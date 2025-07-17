import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CausalGraph from '../visuals/CausalGraph';
import TreatmentEffect from '../visuals/TreatmentEffect';

export default function CausalInferenceDemo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Causal Inference & Discovery</Typography>
            <Typography variant="body2" color="text.secondary">
              Simulated causal DAG discovery, treatment effect estimation, and do-calculus visualizations.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <CausalGraph />
      </Grid>
      <Grid item xs={12} md={6}>
        <TreatmentEffect />
      </Grid>
    </Grid>
  );
}
