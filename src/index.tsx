import { ChakraProvider} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import theme from "./styles/theme";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <ChakraProvider theme = {theme}>
      <App />
  </ChakraProvider>
  </React.StrictMode>
);

