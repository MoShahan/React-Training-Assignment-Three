import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import VariantOne from "./pages/VariantOne";
import VariantTwo from "./pages/VariantTwo";
import RawStory from "./pages/RawStory";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/v1" element={<VariantOne />} />
        <Route path="/v2" element={<VariantTwo />} />
        <Route path="/story" element={<RawStory />} />
      </Routes>
    </BrowserRouter>
  </>
);
