import { Route, Routes } from "react-router-dom";
import "./App.css";
// import GpSmartPage from "./pages/Gp Smart Greeting Card/GpSmartPage";
import XriSmartPage from "./pages/Xri Smart Greeting Card/XriSmartPage";
import ErrorPage from "./pages/Error/ErrorPage";
import Greetings from "./pages/Greetings/Greetings";
import GreetingForm from "./pages/GreetingForm/GreetingForm";
import RecipentForm from "./pages/RecipentForm/RecipentForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XriSmartPage />} />
      <Route path="/greetings" element={<Greetings />} />
      <Route path="/greetingform" element={<GreetingForm />} />
      <Route path="/recipentform" element={<RecipentForm />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
