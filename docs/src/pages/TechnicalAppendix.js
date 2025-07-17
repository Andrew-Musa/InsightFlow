import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function TechnicalAppendix() {
  return (
    <Box>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5">Technical Appendix</Typography>
          <Typography variant="body2" color="text.secondary">
            <b>InsightFlow: Research Foundations</b><br />
            <ul>
              <li><b>Automated EDA:</b> Based on state-of-the-art statistical profiling and visualization (see: Pandas Profiling, D-Tale).</li>
              <li><b>AutoML:</b> Simulates model selection, hyperparameter optimization, and ensembling (see: AutoML, TPOT, AutoGluon).</li>
              <li><b>Explainability:</b> SHAP, LIME, and counterfactual explanations (see: Lundberg & Lee 2017, Ribeiro et al. 2016).</li>
              <li><b>Causal Inference:</b> DAG discovery, do-calculus, and treatment effect estimation (see: Pearl 2009, DoWhy, CausalNex).</li>
              <li><b>Collaboration:</b> Real-time comments, annotation, and session-based workflow (see: Observable, Google Colab).</li>
            </ul>
            <b>References:</b>
            <ul>
              <li>Pearl, J. (2009). Causality: Models, Reasoning, and Inference.</li>
              <li>Lundberg, S. M., & Lee, S.-I. (2017). A Unified Approach to Interpreting Model Predictions. NeurIPS.</li>
              <li>Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "Why Should I Trust You?" Explaining the Predictions of Any Classifier. KDD.</li>
              <li>AutoML: https://www.automl.org/</li>
              <li>DoWhy: https://microsoft.github.io/dowhy/</li>
              <li>CausalNex: https://causalnex.readthedocs.io/</li>
            </ul>
            <b>All results in this demo are simulated for demonstration purposes.</b>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
