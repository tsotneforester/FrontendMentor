import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import HowTo from './pages/HowTo';
import Category from './pages/Category';
import Game from './pages/Game';
import { useContext } from 'react';
import { AppContext } from './Context';

const Router = () => {
  const { state } = useContext(AppContext);
  const { newUser } = state;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/how-to"
          element={newUser ? <Navigate to="/" replace /> : <HowTo />}
        />
        <Route
          path="/category"
          element={newUser ? <Navigate to="/" replace /> : <Category />}
        />
        <Route
          path="/game"
          element={newUser ? <Navigate to="/" replace /> : <Game />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
