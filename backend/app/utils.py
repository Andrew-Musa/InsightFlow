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

def prepare_visualization_data(data: dict, chart_type: str, x_column: str, y_column: str, group_column: str = None):
    import pandas as pd
    df = pd.DataFrame(data['preview'])  # For demo, use preview; in a full app, use all data
    result = {'chart_type': chart_type, 'x': df[x_column].tolist(), 'y': df[y_column].tolist()}
    if group_column and group_column in df.columns:
        result['group'] = df[group_column].tolist()
    return result
