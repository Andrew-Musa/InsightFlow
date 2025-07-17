import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function OutlierDetection() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Outlier Detection</Typography>
        <img src="/demo-assets/outlier-boxplot.svg" alt="Outlier Detection" style={{width:'100%',maxWidth:400, borderRadius:12, boxShadow:'0 2px 8px #0001'}}/>
        <Typography variant="caption" color="text.secondary">Simulated: Boxplot with detected outliers highlighted</Typography>
      </CardContent>
    </Card>
  );
}
