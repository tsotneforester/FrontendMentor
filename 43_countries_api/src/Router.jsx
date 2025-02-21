import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Country from './pages/Country';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/:country" element={<Country />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
