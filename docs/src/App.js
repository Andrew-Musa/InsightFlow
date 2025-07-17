import React, { useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import BarChartIcon from '@mui/icons-material/BarChart';
import ScienceIcon from '@mui/icons-material/Science';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import UploadDemo from './pages/UploadDemo';
import VisualizationDemo from './pages/VisualizationDemo';
import ModelDemo from './pages/ModelDemo';
import ExplainDemo from './pages/ExplainDemo';
import CollabDemo from './pages/CollabDemo';
import AdvancedEDA from './pages/AdvancedEDA';
import AutoMLDemo from './pages/AutoMLDemo';
import CausalInferenceDemo from './pages/CausalInferenceDemo';
import TechnicalAppendix from './pages/TechnicalAppendix';

const drawerWidth = 220;

const pages = [
  { label: 'Data Upload & Exploration', key: 'upload', icon: <UploadFileIcon /> },
  { label: 'Visualization Dashboard', key: 'visualization', icon: <BarChartIcon /> },
  { label: 'ML Model Builder', key: 'ml', icon: <ScienceIcon /> },
  { label: 'Explainability Tools', key: 'explain', icon: <InsightsIcon /> },
  { label: 'Collaboration & Annotation', key: 'collab', icon: <GroupIcon /> },
  { label: 'Technical Appendix', key: 'appendix', icon: <MenuBookIcon /> }
];

function App() {
  const [selectedPage, setSelectedPage] = useState('upload');
  const [loadedData, setLoadedData] = useState(null);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)' }}>
        <Toolbar>
          <DashboardIcon sx={{ mr: 2, fontSize: 32 }} />
          <Typography variant="h5" noWrap component="div" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            Insight Flow Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(120deg, #f5f7fa 60%, #e3f2fd 100%)',
            borderRight: '1.5px solid #e0e3e7',
            boxShadow: '2px 0 10px #1976d211',
          },
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
                sx={{
                  mb: 1,
                  borderRadius: 2,
                  background: selectedPage === page.key ? 'linear-gradient(90deg, #1976d2 80%, #42a5f5 100%)' : 'none',
                  color: selectedPage === page.key ? '#fff' : 'inherit',
                  boxShadow: selectedPage === page.key ? '0 2px 8px #1976d233' : 'none',
                  transition: 'all 0.2s',
                  '&:hover': { background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)', color: '#fff' }
                }}
              >
                <ListItemIcon sx={{ color: selectedPage === page.key ? '#fff' : '#1976d2', minWidth: 36 }}>
                  {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: { xs: 1, md: 4 }, minHeight: '100vh', transition: 'background 0.3s' }}>
        <Toolbar />
        {selectedPage === 'upload' && (
          <Box>
            <Box sx={{
              background: 'linear-gradient(120deg, #e3f2fd 50%, #fff 100%)',
              borderRadius: 4,
              p: 5,
              mb: 3,
              boxShadow: '0 2px 24px #1976d211',
              textAlign: 'center',
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 220
            }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#1976d2', mb: 1 }}>
                  Welcome to Insight Flow
                </Typography>
                <Typography variant="h6" sx={{ color: '#333', mb: 2 }}>
                  Effortless, Explainable Machine Learning for Everyone
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                  Upload your data, explore insights, build models, and explain results—all in your browser, no coding required.
                </Typography>
              </Box>
            </Box>
            <UploadDemo onDataLoaded={setLoadedData} />
          </Box>
        )}
        {selectedPage === 'visualization' && (
          <Box sx={{ animation: 'fadeIn 0.6s', background: '#fff', borderRadius: 4, boxShadow: '0 2px 16px #1976d111', p: { xs: 2, md: 4 }, mb: 2 }}>
            <VisualizationDemo loadedData={loadedData} />
          </Box>
        )}
        {selectedPage === 'ml' && (
          <Box sx={{ animation: 'fadeIn 0.6s', background: '#fff', borderRadius: 4, boxShadow: '0 2px 16px #1976d111', p: { xs: 2, md: 4 }, mb: 2 }}>
            <ModelDemo loadedData={loadedData} />
          </Box>
        )}
        {selectedPage === 'explain' && (
          <Box sx={{ animation: 'fadeIn 0.6s', background: '#fff', borderRadius: 4, boxShadow: '0 2px 16px #1976d111', p: { xs: 2, md: 4 }, mb: 2 }}>
            <ExplainDemo loadedData={loadedData} />
          </Box>
        )}
        {selectedPage === 'collab' && (
          <Box sx={{ animation: 'fadeIn 0.6s', background: '#fff', borderRadius: 4, boxShadow: '0 2px 16px #1976d111', p: { xs: 2, md: 4 }, mb: 2 }}>
            <CollabDemo />
          </Box>
        )}
        {selectedPage === 'appendix' && (
          <Box sx={{ animation: 'fadeIn 0.6s', background: '#fff', borderRadius: 4, boxShadow: '0 2px 16px #1976d111', p: { xs: 2, md: 4 }, mb: 2 }}>
            <TechnicalAppendix />
          </Box>
        )}
        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        `}</style>
      </Box>
    </Box>
  );
}

export default App;
