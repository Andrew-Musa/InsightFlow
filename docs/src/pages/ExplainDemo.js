import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { explainModel } from '../mockData/mockApi';

export default function ExplainDemo() {
  const [explain, setExplain] = useState(null);

  React.useEffect(() => {
    explainModel().then(setExplain);
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Explainability Tools
      </Typography>
      {explain ? (
        <Paper sx={{ mt: 2, p: 2 }}>
          <Typography variant="subtitle1">Feature Importances</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Feature</TableCell>
                <TableCell>Importance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(explain.feature_importances).map(([f, v]) => (
                <TableRow key={f}>
                  <TableCell>{f}</TableCell>
                  <TableCell>{v}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>SHAP Values (Sample)</Typography>
          <pre style={{ fontSize: 14 }}>{JSON.stringify(explain.shap_values_sample, null, 2)}</pre>
        </Paper>
      ) : (
        <Typography variant="body1">Load demo data to see explainability results.</Typography>
      )}
    </Box>
  );
}
