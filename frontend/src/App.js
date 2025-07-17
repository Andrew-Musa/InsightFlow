import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

const drawerWidth = 220;

const pages = [
  { label: 'Data Upload & Exploration', key: 'upload' },
  { label: 'Visualization Dashboard', key: 'visualization' },
  { label: 'ML Model Builder', key: 'ml' },
  { label: 'Explainability Tools', key: 'explain' },
  { label: 'Collaboration & Annotation', key: 'collab' }
];

function App() {
  const [selectedPage, setSelectedPage] = React.useState('upload');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Insight Flow
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
        {selectedPage === 'upload' && <UploadDemo />}
        {selectedPage === 'visualization' && <Typography variant="h5">Visualization Dashboard (Coming Soon)</Typography>}
        {selectedPage === 'ml' && <Typography variant="h5">ML Model Builder (Coming Soon)</Typography>}
        {selectedPage === 'explain' && <Typography variant="h5">Explainability Tools (Coming Soon)</Typography>}
        {selectedPage === 'collab' && <Typography variant="h5">Collaboration & Annotation (Coming Soon)</Typography>}
      </Box>
    </Box>
  );
}

export default App;
