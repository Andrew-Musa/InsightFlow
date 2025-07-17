import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function TreatmentEffect() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Treatment Effect Estimation (Simulated)</Typography>
        <Typography variant="body2">Estimated Average Treatment Effect (ATE): <b>+0.13</b></Typography>
        <Typography variant="caption" color="text.secondary">Simulated: Do-calculus, propensity score matching, confidence intervals</Typography>
      </CardContent>
    </Card>
  );
}
