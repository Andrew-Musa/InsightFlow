import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CorrelationHeatmap from '../visuals/CorrelationHeatmap';
import OutlierDetection from '../visuals/OutlierDetection';
import FeatureEngineering from '../visuals/FeatureEngineering';

export default function AdvancedEDA() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Advanced Data Exploration</Typography>
            <Typography variant="body2" color="text.secondary">
              Explore your data with automated EDA, correlation heatmaps, smart outlier detection, and feature engineering suggestions.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <CorrelationHeatmap />
      </Grid>
      <Grid item xs={12} md={6}>
        <OutlierDetection />
      </Grid>
      <Grid item xs={12}>
        <FeatureEngineering />
      </Grid>
    </Grid>
  );
}
