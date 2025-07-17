import React, { useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import UploadDemo from './pages/UploadDemo';
import VisualizationDemo from './pages/VisualizationDemo';
import ModelDemo from './pages/ModelDemo';
import ExplainDemo from './pages/ExplainDemo';
import CollabDemo from './pages/CollabDemo';

const drawerWidth = 220;

const pages = [
  { label: 'Data Upload & Exploration', key: 'upload' },
  { label: 'Visualization Dashboard', key: 'visualization' },
  { label: 'ML Model Builder', key: 'ml' },
  { label: 'Explainability Tools', key: 'explain' },
  { label: 'Collaboration & Annotation', key: 'collab' }
];

function App() {
  const [selectedPage, setSelectedPage] = useState('upload');
  const [loadedData, setLoadedData] = useState(null);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Insight Flow Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {pages.map((page) => (
              <ListItem
                button
                key={page.key}
                selected={selectedPage === page.key}
                onClick={() => setSelectedPage(page.key)}
              >
                <ListItemText primary={page.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        {selectedPage === 'upload' && <UploadDemo onDataLoaded={setLoadedData} />}
        {selectedPage === 'visualization' && <VisualizationDemo loadedData={loadedData} />}
        {selectedPage === 'ml' && <ModelDemo loadedData={loadedData} />}
        {selectedPage === 'explain' && <ExplainDemo loadedData={loadedData} />}
        {selectedPage === 'collab' && <CollabDemo />}
      </Box>
    </Box>
  );
}

export default App;
