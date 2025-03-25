import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Start from './pages/Start';
import Game from './pages/Game';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
