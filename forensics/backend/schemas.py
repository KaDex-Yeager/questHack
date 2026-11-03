from pydantic import BaseModel
from typing import Optional, Dict

class AnalysisResponse(BaseModel):
    case_id: str
    status: str
    confidence_score: float
    rating_badge: str
    natural_language_summary: str
    ela_mean_error: Optional[float] = None
    prnu_variance_mismatch: Optional[bool] = None
    software_signature: Optional[str] = None
    heatmap_base64: Optional[str] = None
