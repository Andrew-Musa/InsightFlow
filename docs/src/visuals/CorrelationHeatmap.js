import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Heatmap } from 'recharts'; // Simulate with a placeholder

export default function CorrelationHeatmap() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Correlation Heatmap</Typography>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Correlation_matrix_heatmap.png" alt="Correlation Heatmap" style={{width:'100%',maxWidth:400}}/>
        <Typography variant="caption" color="text.secondary">Simulated: Pearson/Spearman correlations, colored by strength</Typography>
      </CardContent>
    </Card>
  );
}
