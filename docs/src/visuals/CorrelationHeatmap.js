import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Heatmap } from 'recharts'; // Simulate with a placeholder

export default function CorrelationHeatmap() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Correlation Heatmap</Typography>
        <img src="/demo-assets/correlation-heatmap.svg" alt="Correlation Heatmap" style={{width:'100%',maxWidth:400, borderRadius:12, boxShadow:'0 2px 8px #0001'}}/>
        <Typography variant="caption" color="text.secondary">Simulated: Pearson/Spearman correlations, colored by strength</Typography>
      </CardContent>
    </Card>
  );
}
