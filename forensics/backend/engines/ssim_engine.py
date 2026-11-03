import cv2
import numpy as np
import base64
from skimage.metrics import structural_similarity as ssim

def analyze_comparative_ssim(ref_bytes: bytes, target_bytes: bytes):
    """
    Aligns target to reference using ORB/RANSAC and computes SSIM difference map.
    """
    try:
        # 1. Decode images
        ref_arr = np.frombuffer(ref_bytes, np.uint8)
        ref_img = cv2.imdecode(ref_arr, cv2.IMREAD_GRAYSCALE)
        
        tgt_arr = np.frombuffer(target_bytes, np.uint8)
        tgt_img = cv2.imdecode(tgt_arr, cv2.IMREAD_GRAYSCALE)
        
        if ref_img is None or tgt_img is None:
            return {"status": "error", "reason": "Could not decode one or both images"}

        # 2. ORB Feature Detection
        orb = cv2.ORB_create(nfeatures=1000)
        kp1, des1 = orb.detectAndCompute(ref_img, None)
        kp2, des2 = orb.detectAndCompute(tgt_img, None)
        
        if des1 is None or des2 is None:
            return {"status": "insufficient_matches", "reason": "Features missing"}

        # 3. Brute-Force Matching (Hamming distance)
        bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
        matches = bf.match(des2, des1) # Match Target(2) to Reference(1)
        matches = sorted(matches, key=lambda x: x.distance)
        
        if len(matches) < 15:
            return {"status": "insufficient_matches", "reason": "Not enough matched features to align"}
            
        # 4. Estimate Homography with RANSAC
        src_pts = np.float32([kp2[m.queryIdx].pt for m in matches]).reshape(-1, 1, 2)
        dst_pts = np.float32([kp1[m.trainIdx].pt for m in matches]).reshape(-1, 1, 2)
        
        H, mask = cv2.findHomography(src_pts, dst_pts, cv2.RANSAC, 5.0)
        if H is None:
            return {"status": "alignment_failed", "reason": "Homography matrix failed to converge"}
            
        # 5. Warp Target to Reference coordinates
        h, w = ref_img.shape
        aligned_tgt = cv2.warpPerspective(tgt_img, H, (w, h))
        
        # 6. Compute SSIM
        # SSIM returns a score (-1 to 1) and a full difference image
        score, diff = ssim(ref_img, aligned_tgt, full=True, data_range=255)
        
        # Convert diff (-1, 1) to uint8 (0, 255) for visualization
        diff_scaled = (diff * 255).astype("uint8")
        
        # Create a heatmap of the structural differences (Invert so differences are hot/red)
        diff_colored = cv2.applyColorMap(255 - diff_scaled, cv2.COLORMAP_JET)
        
        # Encode to base64
        _, buffer = cv2.imencode('.png', diff_colored)
        heatmap_b64 = base64.b64encode(buffer).decode('utf-8')
        
        return {
            "status": "success",
            "ssim_score": float(score),
            "matches_found": len(matches),
            "heatmap_base64": heatmap_b64
        }
    except Exception as e:
        return {"status": "error", "reason": str(e)}