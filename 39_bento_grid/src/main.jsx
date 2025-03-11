import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { baseTheme } from './styles/theme';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={baseTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
