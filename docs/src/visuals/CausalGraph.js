import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function CausalGraph() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Causal Discovery DAG (Simulated)</Typography>
        <img src="/demo-assets/causal-dag.svg" alt="Causal Graph" style={{width:'100%',maxWidth:350, borderRadius:12, boxShadow:'0 2px 8px #0001'}}/>
        <Typography variant="caption" color="text.secondary">Simulated: Causal structure learned from data</Typography>
      </CardContent>
    </Card>
  );
}
