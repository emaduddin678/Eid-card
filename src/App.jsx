import { Route, Routes } from "react-router-dom";
import "./App.css";
// import GpSmartPage from "./pages/Gp Smart Greeting Card/GpSmartPage";
import XriSmartPage from "./pages/Xri Smart Greeting Card/XriSmartPage";
import ErrorPage from "./pages/Error/ErrorPage";
import Greetings from "./pages/Greetings/Greetings";
import GreetingForm from "./pages/GreetingForm/GreetingForm";
import RecipentForm from "./pages/RecipentForm/RecipentForm";
import EnjoyMsg from "./pages/EnjoyMsg/EnjoyMsg";
import LikeMsg from "./pages/LikeMsg/LikeMsg";
import ToneGreeting from "./pages/ToneGreeting/ToneGreeting";
import GeneratingCard from "./pages/GeneratingCard/GeneratingCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XriSmartPage />} />
      <Route path="/greetings" element={<Greetings />} />
      <Route path="/greetingform" element={<GreetingForm />} />
      <Route path="/recipentform" element={<RecipentForm />} />
      <Route path="/enjoymsg" element={<EnjoyMsg />} />
      <Route path="/likemsg" element={<LikeMsg />} />
      <Route path="/tone" element={<ToneGreeting />} />
      <Route path="/generatecard" element={<GeneratingCard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
