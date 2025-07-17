// mockApi.js: Simulate backend endpoints for static demo
import * as iris from './iris';
import * as titanic from './titanic';

// Map dataset keys to their mock data modules
const datasets = {
  iris: iris,
  titanic: titanic
};

let currentDataset = 'iris'; // default, can be changed by UI

export function setMockDataset(key) {
  if (datasets[key]) currentDataset = key;
}

export function getAvailableDatasets() {
  return [
    { key: 'iris', label: 'Iris Demo Data' },
    { key: 'titanic', label: 'Titanic Demo Data' }
  ];
}

// Simulate /upload
export function uploadCsv() {
  const data = datasets[currentDataset];
  return Promise.resolve({
    columns: Object.keys(data[`${currentDataset}Raw`][0]),
    preview: data[`${currentDataset}Raw`].slice(0, 5),
    summary: data[`${currentDataset}Summary`],
    missing: data[`${currentDataset}Missing`]
  });
}

// Simulate /visualize
export function visualize() {
  const data = datasets[currentDataset];
  return Promise.resolve(data[`${currentDataset}VizBar`]);
}

// Simulate /train_model
export function trainModel() {
  const data = datasets[currentDataset];
  return Promise.resolve(data[`${currentDataset}ModelResults`]);
}

// Simulate /explain_model
export function explainModel() {
  const data = datasets[currentDataset];
  return Promise.resolve(data[`${currentDataset}Explain`]);
}

// Simulate /comments GET/POST (session only)
let commentsSession = {
  iris: [...iris.irisComments],
  titanic: [...titanic.titanicComments]
};

export function getComments(context = null) {
  let all = commentsSession[currentDataset];
  return Promise.resolve(
    context ? all.filter(c => c.context === context) : all
  );
}

export function addComment({ user, context, text }) {
  const newComment = {
    id: Date.now(),
    user,
    context,
    text,
    timestamp: new Date().toISOString()
  };
  commentsSession[currentDataset].push(newComment);
  return Promise.resolve(newComment);
}
