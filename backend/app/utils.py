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


def train_model(data: dict, target_column: str, feature_columns: list, model_type: str = "decision_tree"):
    import pandas as pd
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score, confusion_matrix

    df = pd.DataFrame(data['preview'])  # For demo, use preview; in a full app, use all data
    X = df[feature_columns]
    y = df[target_column]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    if model_type == "decision_tree":
        model = DecisionTreeClassifier()
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        acc = accuracy_score(y_test, y_pred)
        cm = confusion_matrix(y_test, y_pred).tolist()
        return {
            'model_type': model_type,
            'accuracy': acc,
            'confusion_matrix': cm,
            'sample_predictions': y_pred.tolist()
        }
    else:
        raise ValueError(f"Model type {model_type} not supported.")


def explain_model(data: dict, target_column: str, feature_columns: list, model_type: str = "decision_tree"):
    import pandas as pd
    import shap
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.model_selection import train_test_split

    df = pd.DataFrame(data['preview'])  # For demo, use preview; in a full app, use all data
    X = df[feature_columns]
    y = df[target_column]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    if model_type == "decision_tree":
        model = DecisionTreeClassifier()
        model.fit(X_train, y_train)
        # Feature importances
        importances = model.feature_importances_.tolist()
        # SHAP values
        explainer = shap.TreeExplainer(model)
        shap_values = explainer.shap_values(X_test)
        # For classification, shap_values is a list (one per class)
        if isinstance(shap_values, list):
            shap_sample = shap_values[0][:5].tolist()  # First class, first 5 samples
        else:
            shap_sample = shap_values[:5].tolist()
        return {
            'model_type': model_type,
            'feature_importances': dict(zip(feature_columns, importances)),
            'shap_values_sample': shap_sample,
            'shap_features': feature_columns
        }
    else:
        raise ValueError(f"Model type {model_type} not supported.")
