import { Route, Routes } from "react-router-dom";
import "./App.css";
// import GpSmartPage from "./pages/Gp Smart Greeting Card/GpSmartPage";
import XriSmartPage from "./pages/Xri Smart Greeting Card/XriSmartPage";
import ErrorPage from "./pages/Error/ErrorPage";
import Greetings from "./pages/Greetings/Greetings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XriSmartPage />} />
      <Route path="/greetings" element={<Greetings />} />
      {/* <Route path="/xrismartpage" element={<XriSmartPage />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
