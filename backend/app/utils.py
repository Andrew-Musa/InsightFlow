import pandas as pd
from io import BytesIO

def process_csv(content: bytes):
    df = pd.read_csv(BytesIO(content))
    preview = df.head(5).to_dict(orient='records')
    summary = df.describe(include='all').fillna('').to_dict()
    missing = df.isnull().sum().to_dict()
    return {
        'columns': list(df.columns),
        'preview': preview,
        'summary': summary,
        'missing': missing
    }
