import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { trainModel } from '../mockData/mockApi';

export default function ModelDemo() {
  const [model, setModel] = useState(null);

  React.useEffect(() => {
    trainModel().then(setModel);
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        ML Model Builder
      </Typography>
      {model ? (
        <Paper sx={{ mt: 2, p: 2 }}>
          <Typography variant="subtitle1">Decision Tree Results</Typography>
          <Typography>Accuracy: {model.accuracy}</Typography>
          <Typography>Confusion Matrix:</Typography>
          <Table size="small">
            <TableBody>
              {model.confusion_matrix.map((row, i) => (
                <TableRow key={i}>
                  {row.map((cell, j) => <TableCell key={j}>{cell}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography>Sample Predictions: {model.sample_predictions.join(', ')}</Typography>
        </Paper>
      ) : (
        <Typography variant="body1">Load demo data to train a model.</Typography>
      )}
    </Box>
  );
}
