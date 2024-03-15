import { Route, Routes } from "react-router-dom";
import "./App.css";
// import GpSmartPage from "./pages/Gp Smart Greeting Card/GpSmartPage";
import XriSmartPage from "./pages/Xri Smart Greeting Card/XriSmartPage";
import ErrorPage from "./pages/Error/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XriSmartPage />} />
      {/* <Route path="/xrismartpage" element={<XriSmartPage />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
