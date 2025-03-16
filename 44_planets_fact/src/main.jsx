import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { baseTheme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={baseTheme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);
