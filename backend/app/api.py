from fastapi import APIRouter, UploadFile, File, HTTPException
from app.utils import process_csv

router = APIRouter()

@router.post("/upload")
def upload_csv(file: UploadFile = File(...)):
    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="Only CSV files are supported.")
    try:
        content = file.file.read()
        result = process_csv(content)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
