// Mock data and results for titanic_demo.csv
export const titanicRaw = [
  { PassengerId: 1, Survived: 0, Pclass: 3, Sex: "male", Age: 22, Fare: 7.25 },
  { PassengerId: 2, Survived: 1, Pclass: 1, Sex: "female", Age: 38, Fare: 71.2833 },
  { PassengerId: 3, Survived: 1, Pclass: 3, Sex: "female", Age: 26, Fare: 7.925 },
  { PassengerId: 4, Survived: 1, Pclass: 1, Sex: "female", Age: 35, Fare: 53.1 },
  { PassengerId: 5, Survived: 0, Pclass: 3, Sex: "male", Age: 35, Fare: 8.05 },
  { PassengerId: 6, Survived: 0, Pclass: 3, Sex: "male", Age: 27, Fare: 8.4583 },
  { PassengerId: 7, Survived: 0, Pclass: 1, Sex: "male", Age: 54, Fare: 51.8625 },
  { PassengerId: 8, Survived: 0, Pclass: 3, Sex: "male", Age: 2, Fare: 21.075 },
  { PassengerId: 9, Survived: 1, Pclass: 3, Sex: "female", Age: 27, Fare: 11.1333 },
  { PassengerId: 10, Survived: 1, Pclass: 2, Sex: "female", Age: 14, Fare: 30.0708 },
];

export const titanicSummary = {
  Age: { mean: 27.6, std: 13.6, min: 2, max: 54 },
  Fare: { mean: 27.6, std: 21.6, min: 7.25, max: 71.2833 },
  Survived: { mean: 0.5, std: 0.53, min: 0, max: 1 },
};

export const titanicMissing = {
  PassengerId: 0,
  Survived: 0,
  Pclass: 0,
  Sex: 0,
  Age: 0,
  Fare: 0,
};

export const titanicVizBar = {
  chart_type: 'bar',
  x: ["Survived", "Not Survived"],
  y: [5, 5],
};

export const titanicModelResults = {
  model_type: "decision_tree",
  accuracy: 0.8,
  confusion_matrix: [[4,1],[1,4]],
  sample_predictions: [1,0,1,1,0]
};

export const titanicExplain = {
  model_type: "decision_tree",
  feature_importances: {
    Pclass: 0.25,
    Sex: 0.30,
    Age: 0.20,
    Fare: 0.25
  },
  shap_values_sample: [
    [0.2, -0.1, 0.1, 0.0],
    [0.1, 0.0, -0.2, 0.1],
    [-0.1, 0.2, 0.0, 0.1],
    [0.0, 0.1, 0.2, -0.1],
    [0.1, 0.1, 0.0, -0.2]
  ],
  shap_features: ["Pclass", "Sex", "Age", "Fare"]
};

export const titanicComments = [
  { id: 1, user: "Carol", context: "visualization", text: "Interesting survival split.", timestamp: "2025-07-17T11:00:00Z" },
  { id: 2, user: "Dave", context: "model", text: "Model accuracy is pretty good for demo data.", timestamp: "2025-07-17T11:01:00Z" }
];
