import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function CausalGraph() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Causal Discovery DAG (Simulated)</Typography>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Simple-causal-graph.png" alt="Causal Graph" style={{width:'100%',maxWidth:350}}/>
        <Typography variant="caption" color="text.secondary">Simulated: Causal structure learned from data</Typography>
      </CardContent>
    </Card>
  );
}
