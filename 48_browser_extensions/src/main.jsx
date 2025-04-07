import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { Context } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <Router />
  </Context>
);
