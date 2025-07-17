import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';

export default function AutoMLResults() {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">AutoML Results (Simulated)</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Model</TableCell>
              <TableCell>CV Score</TableCell>
              <TableCell>Best Params</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Random Forest</TableCell>
              <TableCell>0.872 ± 0.03</TableCell>
              <TableCell>n=100, max_depth=8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>XGBoost</TableCell>
              <TableCell>0.879 ± 0.02</TableCell>
              <TableCell>n=200, eta=0.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ensemble</TableCell>
              <TableCell>0.884 ± 0.01</TableCell>
              <TableCell>Stacking: RF + XGB</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="caption" color="text.secondary">Simulated: Hyperparameter tuning, cross-validation, and ensemble selection</Typography>
      </CardContent>
    </Card>
  );
}
