import pytest
import pandas as pd
from app.utils import process_csv, prepare_visualization_data, train_model, explain_model

# Sample CSV content as bytes
def sample_csv_bytes():
    return b"A,B,C\n1,2,3\n4,5,6\n7,8,9\n10,11,12\n13,14,15\n"

def test_process_csv():
    result = process_csv(sample_csv_bytes())
    assert 'columns' in result
    assert 'preview' in result
    assert len(result['preview']) == 5
    assert result['columns'] == ['A', 'B', 'C']

def test_prepare_visualization_data():
    result = process_csv(sample_csv_bytes())
    viz = prepare_visualization_data(result, 'bar', 'A', 'B')
    assert viz['chart_type'] == 'bar'
    assert viz['x'] == [1, 4, 7, 10, 13]
    assert viz['y'] == [2, 5, 8, 11, 14]

def test_train_model():
    result = process_csv(sample_csv_bytes())
    # Use 'A' as target, 'B' and 'C' as features
    model_out = train_model(result, 'A', ['B', 'C'])
    assert 'accuracy' in model_out
    assert 'confusion_matrix' in model_out

def test_explain_model():
    result = process_csv(sample_csv_bytes())
    explain_out = explain_model(result, 'A', ['B', 'C'])
    assert 'feature_importances' in explain_out
    assert 'shap_values_sample' in explain_out
