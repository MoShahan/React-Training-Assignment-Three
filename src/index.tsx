import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import VariantOne from './pages/VariantOne';
import VariantTwo from './pages/VariantTwo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home />}/>
    <Route path="*" element={<Navigate to="/home" />} />
    <Route path="/v1" element={<VariantOne />}/>
    <Route path="/v2" element={<VariantTwo />}/>
  </Routes>
  </BrowserRouter>
);
