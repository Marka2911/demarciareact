import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import InitialPage from './pages/InitialPage';
import Housing from './pages/Housing';
import Work from './pages/Work';
import Food from './pages/Food';
import YourVoice from './pages/YourVoice';
import PublicCollab from './pages/PublicCollab';
import Map from './pages/Map';
import WhoAreWe from './pages/WhoAreWe';
import WhatWeDo from './pages/WhatWeDo';
import Contact from './pages/Contact';
import OurCollaborators from './pages/OurCollaborators';
import Projects from './pages/Projects';
import Profile from './pages/Profile';

// Create Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// App Routes Component
const AppRoutes = () => {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/home" element={<InitialPage />} />
      
      {/* Grid squares pages */}
      <Route path="/housing" element={<Housing />} />
      <Route path="/work" element={<Work />} />
      <Route path="/food" element={<Food />} />
      <Route path="/your-voice" element={<YourVoice />} />
      <Route path="/public-collab" element={<PublicCollab />} />
      <Route path="/map" element={<Map />} />
      
      {/* Navigation button pages */}
      <Route path="/whoAreWe" element={<WhoAreWe />} />
      <Route path="/whatWeDo" element={<WhatWeDo />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ourCollaborators" element={<OurCollaborators />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/profile" element={<Profile />} />
      
      {/* Default redirects */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

// Main App Component
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
