import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import Contest from './pages/Contest';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solo-game" element={<Game />} />
        <Route path="/contest" element={<Contest />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
