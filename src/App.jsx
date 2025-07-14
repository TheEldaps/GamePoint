import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardHome from "./pages/DashboardHome";
import DashboardTournaments from "./pages/DashboardTournaments";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardWallet from "./pages/DashboardWallets";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import GamePage from "./pages/GamePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        {/* <Route path="/wallet" element={<DashboardWallet />} /> */}
        {/* <Route path="/settings" element={<DashboardSettings />} /> */}
        <Route path="/Games" element={<DashboardTournaments />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Games/:id" element={<GamePage />} />
      </Routes>
    </Router>
  );
}
