import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './Router.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <Router></Router>
    </ChakraProvider>
  </StrictMode>
);
