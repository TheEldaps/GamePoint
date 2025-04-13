import GameFrame from "./Components/GameFrame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PlayTournamentBtn from "./Components/PlayTournamentBtn";
import LandingPage from "./pages/LandingPage";
import DashboardHome from "./pages/DashboardHome";
import DashboardTournaments from "./pages/DashboardTournaments";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardWallet from "./pages/DashboardWallets";
import NotFound from "./pages/NotFound";
import SideNavLink from "./Components/SideNavLink";
import Nav from "./Components/Nav";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/wallet" element={<DashboardWallet />} />
        <Route path="/settings" element={<DashboardSettings />} />
        <Route path="/tournament" element={<DashboardTournaments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
