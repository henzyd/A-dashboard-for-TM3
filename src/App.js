import "./App.css";
import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import MorePage from "./pages/MorePage";
import PageNotFound from "./pages/PageNotFound";
import LandingPage from "./pages/LandingPage";
import ReportsInsights from "./pages/ReportsInsights";

function App() {
  return (
    <div className="App bg-AppBackgroundColor p-6 min-h-screen max-w-[1440px] justify-self-center self-center pb-8">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<HomePage />} />
          <Route path="/report" element={<ReportsInsights />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/more" element={<MorePage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
