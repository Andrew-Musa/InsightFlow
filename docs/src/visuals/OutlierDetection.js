import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function OutlierDetection() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Outlier Detection</Typography>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Boxplot_vs_PDF.png" alt="Outlier Detection" style={{width:'100%',maxWidth:400}}/>
        <Typography variant="caption" color="text.secondary">Simulated: Boxplot with detected outliers highlighted</Typography>
      </CardContent>
    </Card>
  );
}
