import cv2
import numpy as np

def analyze_prnu(image_bytes: bytes, tile_size: int = 64):
    """
    PRNU-inspired noise-residual consistency analysis.
    Extracts high-frequency noise and flags regions with abnormal variance.
    """
    try:
        nparr = np.frombuffer(image_bytes, np.uint8)
        # Decode as grayscale to analyze luminance noise
        img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
        if img is None:
            return {"status": "error", "reason": "Could not decode raster bytes"}
        
        # 1. Denoise to create a reference baseline (Gaussian smoothing)
        blurred = cv2.GaussianBlur(img, (5, 5), 0)
        
        # 2. Extract high-frequency noise residual
        residual = cv2.absdiff(img, blurred)
        
        # 3. Subdivide into macroblock grid and compute local variance
        h, w = residual.shape
        variances = []
        
        for y in range(0, h, tile_size):
            for x in range(0, w, tile_size):
                tile = residual[y:y+tile_size, x:x+tile_size]
                # Exclude edge tiles that are too small
                if tile.shape[0] == tile_size and tile.shape[1] == tile_size:
                    variances.append(np.var(tile))
                    
        if not variances:
            return {"status": "not_evaluated", "reason": "Image too small for tile analysis"}
            
        # 4. Compute robust statistics (Median Absolute Deviation)
        median_var = np.median(variances)
        mad = np.median(np.abs(variances - median_var))
        
        # Flag anomalous tiles (variance significantly higher than median)
        threshold = median_var + (3 * mad)
        flagged_tiles = sum(1 for v in variances if v > threshold)
        valid_tiles = len(variances)
        
        # Determine boolean mismatch flag (e.g., if > 15% of tiles are anomalous)
        mismatch = bool(flagged_tiles > (valid_tiles * 0.15))
        
        return {
            "status": "success",
            "prnu_variance_mismatch": mismatch,
            "valid_tiles": valid_tiles,
            "flagged_tiles": flagged_tiles,
            "median_variance": float(median_var),
            "scientific_limitation": "Single-image noise residual anomaly analysis without reference camera fingerprint."
        }
    except Exception as e:
        return {"status": "error", "reason": str(e)}