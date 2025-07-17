import React from 'react';
import { Box, Typography, Button, MenuItem, Select, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useState } from 'react';
import { getAvailableDatasets, setMockDataset, uploadCsv } from '../mockData/mockApi';

export default function UploadDemo({ onDataLoaded }) {
  const [dataset, setDataset] = useState('iris');
  const [preview, setPreview] = useState(null);
  const [summary, setSummary] = useState(null);
  const [missing, setMissing] = useState(null);
  const [columns, setColumns] = useState([]);

  const handleDatasetChange = (e) => {
    setDataset(e.target.value);
  };

  const handleLoad = async () => {
    setMockDataset(dataset);
    const res = await uploadCsv();
    setPreview(res.preview);
    setSummary(res.summary);
    setMissing(res.missing);
    setColumns(res.columns);
    if (onDataLoaded) onDataLoaded(res);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select a Demo Dataset
      </Typography>
      <Select value={dataset} onChange={handleDatasetChange} sx={{ mb: 2, minWidth: 200 }}>
        {getAvailableDatasets().map(ds => (
          <MenuItem key={ds.key} value={ds.key}>{ds.label}</MenuItem>
        ))}
      </Select>
      <Button variant="contained" onClick={handleLoad} sx={{ ml: 2 }}>
        Load Demo Data
      </Button>
      {preview && (
        <Paper sx={{ mt: 4, p: 2 }}>
          <Typography variant="subtitle1">Data Preview</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                {columns.map(col => <TableCell key={col}>{col}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {preview.map((row, i) => (
                <TableRow key={i}>
                  {columns.map(col => <TableCell key={col}>{row[col]}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>Summary Statistics</Typography>
          <pre style={{ fontSize: 14 }}>{JSON.stringify(summary, null, 2)}</pre>
          <Typography variant="subtitle2">Missing Values</Typography>
          <pre style={{ fontSize: 14 }}>{JSON.stringify(missing, null, 2)}</pre>
        </Paper>
      )}
    </Box>
  );
}
