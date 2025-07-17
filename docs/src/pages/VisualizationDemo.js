import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { visualize } from '../mockData/mockApi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function VisualizationDemo() {
  const [viz, setViz] = useState(null);

  React.useEffect(() => {
    visualize().then(setViz);
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Visualization Dashboard
      </Typography>
      {viz ? (
        <Paper sx={{ mt: 2, p: 2 }}>
          <Typography variant="subtitle1">Bar Chart</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={viz.x.map((x, i) => ({ x, y: viz.y[i] }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="y" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      ) : (
        <Typography variant="body1">Load demo data to see a chart.</Typography>
      )}
    </Box>
  );
}
