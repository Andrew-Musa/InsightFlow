// Mock data and results for iris_demo.csv
export const irisRaw = [
  { sepal_length: 5.1, sepal_width: 3.5, petal_length: 1.4, petal_width: 0.2, species: "setosa" },
  { sepal_length: 4.9, sepal_width: 3.0, petal_length: 1.4, petal_width: 0.2, species: "setosa" },
  { sepal_length: 5.8, sepal_width: 2.7, petal_length: 5.1, petal_width: 1.9, species: "virginica" },
  { sepal_length: 6.7, sepal_width: 3.3, petal_length: 5.7, petal_width: 2.5, species: "virginica" },
  { sepal_length: 5.6, sepal_width: 2.5, petal_length: 3.9, petal_width: 1.1, species: "versicolor" },
  { sepal_length: 6.3, sepal_width: 2.9, petal_length: 5.6, petal_width: 1.8, species: "virginica" },
  { sepal_length: 5.7, sepal_width: 2.8, petal_length: 4.5, petal_width: 1.3, species: "versicolor" },
  { sepal_length: 5.0, sepal_width: 3.4, petal_length: 1.5, petal_width: 0.2, species: "setosa" },
  { sepal_length: 6.4, sepal_width: 2.8, petal_length: 5.6, petal_width: 2.2, species: "virginica" },
  { sepal_length: 5.5, sepal_width: 2.4, petal_length: 3.7, petal_width: 1.0, species: "versicolor" },
];

export const irisSummary = {
  sepal_length: { mean: 5.7, std: 0.59, min: 4.9, max: 6.7 },
  sepal_width: { mean: 2.93, std: 0.38, min: 2.4, max: 3.5 },
  petal_length: { mean: 3.89, std: 1.7, min: 1.4, max: 5.7 },
  petal_width: { mean: 1.24, std: 0.82, min: 0.2, max: 2.5 },
};

export const irisMissing = {
  sepal_length: 0,
  sepal_width: 0,
  petal_length: 0,
  petal_width: 0,
  species: 0,
};

export const irisVizBar = {
  chart_type: 'bar',
  x: ["setosa", "versicolor", "virginica"],
  y: [3, 3, 4],
};

export const irisModelResults = {
  model_type: "decision_tree",
  accuracy: 1.0,
  confusion_matrix: [[3,0,0],[0,3,0],[0,0,4]],
  sample_predictions: ["setosa","virginica","versicolor","setosa","virginica"]
};

export const irisExplain = {
  model_type: "decision_tree",
  feature_importances: {
    sepal_length: 0.15,
    sepal_width: 0.10,
    petal_length: 0.45,
    petal_width: 0.30
  },
  shap_values_sample: [
    [0.1, -0.2, 0.3, 0.0],
    [0.2, 0.1, -0.1, 0.2],
    [-0.1, 0.3, 0.1, 0.0],
    [0.0, 0.0, 0.2, 0.1],
    [0.1, 0.2, 0.0, -0.1]
  ],
  shap_features: ["sepal_length", "sepal_width", "petal_length", "petal_width"]
};

export const irisComments = [
  { id: 1, user: "Alice", context: "visualization", text: "Great separation between species!", timestamp: "2025-07-17T11:00:00Z" },
  { id: 2, user: "Bob", context: "model", text: "Model accuracy is perfect on demo data.", timestamp: "2025-07-17T11:01:00Z" }
];
