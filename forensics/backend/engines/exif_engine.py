from PIL import Image, ExifTags
import io

def extract_exif(image_bytes: bytes):
    try:
        img = Image.open(io.BytesIO(image_bytes))
        exif_data = img._getexif()
        if not exif_data:
            return {"status": "absent", "software": "Not present"}
        
        exif = {ExifTags.TAGS.get(k, k): v for k, v in exif_data.items()}
        software = exif.get("Software", "Not present")
        return {
            "status": "present",
            "software": str(software),
            "make": str(exif.get("Make", "Unknown")),
            "model": str(exif.get("Model", "Unknown"))
        }
    except Exception as e:
        return {"status": "error", "software": "Unreadable"}
