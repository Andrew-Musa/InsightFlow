# InsightFlow

## Define Scope & Core Features

**Project Vision:**
Insight Flow aims to create interactive systems that make complex data analysis intuitive for non-experts. The platform focuses on human-centered design, providing accessible, explainable, and collaborative analytics workflows.

**Core Demo Features:**
- Interactive data upload and exploration
- Visualizations of data and model results (charts, graphs, dashboards)
- Simple, guided ML model building (e.g., drag-and-drop or wizard interface)
- Explainability tools (feature importance, SHAP values, decision plots)
- Collaborative workflow (comments, sharing, annotation)
- User-friendly UI/UX with tooltips and onboarding

## Select Technology Stack

- **Frontend:** React (Material-UI or Ant Design), D3.js or Plotly for visualizations
- **Backend:** Python (FastAPI or Flask) for data processing and ML
- **ML/Explainability:** scikit-learn, SHAP, pandas, numpy
- **Collaboration:** Simple backend storage (SQLite or PostgreSQL), or mock real-time features
- **Deployment:** Docker for local demo, or deploy to Netlify/Vercel (frontend) + Render/Heroku (backend)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone <repo_url>
cd InsightFlow
```

### 2. Install Dependencies
- **Backend:**
  - Navigate to `backend/` and install Python requirements:
    ```bash
    pip install -r requirements.txt
    ```
- **Frontend:**
  - Navigate to `frontend/` and install npm packages:
    ```bash
    npm install
    ```

### 3. Running the App
- **Backend:**
  - Run the FastAPI server:
    ```bash
    uvicorn app.main:app --reload
    ```
- **Frontend:**
  - Start the React development server:
    ```bash
    npm start
    ```

- Or use `docker-compose up` from the project root for both services (if Docker is set up).

---

## Demo Data & Walkthrough
- Demo datasets are provided in [`demo_data/`](./demo_data/):
  - `iris_demo.csv`, `titanic_demo.csv`
- See [`DEMO_WALKTHROUGH.md`](./DEMO_WALKTHROUGH.md) for a step-by-step guide to using all features.

---

## Features Overview
- **Data Upload & Exploration:** Upload CSVs, preview data, view statistics.
- **Visualization Dashboard:** Create charts from your data.
- **ML Model Builder:** Train and evaluate models with a few clicks.
- **Explainability Tools:** Understand model decisions with feature importances and SHAP values.
- **Collaboration & Annotation:** Add and view comments on results.

---

## Contributing & Documentation
- Contributions welcome! Please open issues or pull requests.
- For more details, see code comments and walkthrough files.

---

## License
MIT License (or specify your preferred license)