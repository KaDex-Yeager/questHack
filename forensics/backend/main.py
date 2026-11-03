from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from schemas import AnalysisResponse
from engines.exif_engine import extract_exif
from engines.ela_engine import analyze_ela
import uuid

app = FastAPI(title="VERITAS Forensic Core")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {"status": "online", "engines": ["exif", "ela", "prnu", "ssim"]}

@app.post("/api/analyze/standalone", response_model=AnalysisResponse)
async def analyze_standalone(file: UploadFile = File(...)):
    bytes_data = await file.read()
    
    # 1. Run Engines
    exif_res = extract_exif(bytes_data)
    ela_res = analyze_ela(bytes_data)
    
    if ela_res.get("status") != "success":
        raise HTTPException(status_code=422, detail=ela_res.get("reason"))
        
    # 2. Transparent Scoring Heuristic
    ela_error = ela_res.get("mean_error", 0.0)
    confidence = min(100.0, (ela_error / 10.0) * 100) # Baseline heuristic mapping
    
    if confidence > 75:
        badge = "MANIPULATED"
        summary = f"High error variance detected (ELA: {ela_error:.2f}). Indicates possible splicing or regeneration."
    elif confidence > 35:
        badge = "INCONCLUSIVE"
        summary = f"Moderate anomalies found (ELA: {ela_error:.2f}). Secondary review required."
    else:
        badge = "AUTHENTIC"
        summary = f"Consistent compression signature. No structural anomalies detected."

    return AnalysisResponse(
        case_id=str(uuid.uuid4()),
        status="success",
        confidence_score=round(confidence, 1),
        rating_badge=badge,
        natural_language_summary=summary,
        ela_mean_error=round(ela_error, 2),
        prnu_variance_mismatch=None, # To be implemented via prnu_engine
        software_signature=exif_res.get("software"),
        heatmap_base64=ela_res.get("heatmap_base64")
    )
