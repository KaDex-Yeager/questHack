import cv2
import numpy as np
import base64

def analyze_ela(image_bytes: bytes, quality: int = 90, scale: int = 15):
    try:
        nparr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            return {"status": "error", "reason": "Could not decode raster bytes"}
        
        # Recompress
        encode_param = [int(cv2.IMWRITE_JPEG_QUALITY), quality]
        _, encimg = cv2.imencode('.jpg', img, encode_param)
        recompressed = cv2.imdecode(encimg, cv2.IMREAD_COLOR)
        
        # Absolute pixel difference
        diff = cv2.absdiff(img, recompressed)
        gray_diff = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
        gray_diff_scaled = cv2.convertScaleAbs(gray_diff, alpha=scale)
        
        # Heatmap visualization
        heatmap = cv2.applyColorMap(gray_diff_scaled, cv2.COLORMAP_JET)
        
        # Metrics
        mean_error = np.mean(gray_diff)
        
        # Base64 encode for API
        _, buffer = cv2.imencode('.png', heatmap)
        b64 = base64.b64encode(buffer).decode('utf-8')
        
        return {
            "status": "success",
            "mean_error": float(mean_error),
            "heatmap_base64": b64
        }
    except Exception as e:
        return {"status": "error", "reason": str(e)}
