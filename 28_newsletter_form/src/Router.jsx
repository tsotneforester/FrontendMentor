import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Form from './pages/Form';
import Submitted from './pages/Submitted';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/submitted" element={<Submitted />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
const S = {};
S.Container = styled.div``;
