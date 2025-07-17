import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import AutoMLResults from '../visuals/AutoMLResults';

export default function AutoMLDemo() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Automated Machine Learning</Typography>
        <Typography variant="body2" color="text.secondary">
          Simulated AutoML pipeline: model selection, cross-validation, hyperparameter tuning, and ensemble results.
        </Typography>
        <AutoMLResults />
      </CardContent>
    </Card>
  );
}
