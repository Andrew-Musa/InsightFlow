from fastapi import FastAPI
from app.api import router

app = FastAPI(title="Insight Flow Backend")
app.include_router(router)
