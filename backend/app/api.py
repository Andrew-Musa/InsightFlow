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

from fastapi import Body
from app.utils import prepare_visualization_data

@router.post("/visualize")
def visualize(
    data: dict = Body(..., embed=True),
    chart_type: str = Body(...),
    x_column: str = Body(...),
    y_column: str = Body(...),
    group_column: str = Body(None)
):
    try:
        plot_data = prepare_visualization_data(data, chart_type, x_column, y_column, group_column)
        return plot_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

from app.utils import train_model

@router.post("/train_model")
def train_model_endpoint(
    data: dict = Body(..., embed=True),
    target_column: str = Body(...),
    feature_columns: list = Body(...),
    model_type: str = Body("decision_tree")
):
    try:
        results = train_model(data, target_column, feature_columns, model_type)
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
