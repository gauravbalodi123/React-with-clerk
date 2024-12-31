import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

// Directly hardcode the Clerk Publishable Key (for testing purposes only)
const PUBLISHABLE_KEY = 'pk_test_b3JnYW5pYy1tb25hcmNoLTEuY2xlcmsuYWNjb3VudHMuZGV2JA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <App />
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);
