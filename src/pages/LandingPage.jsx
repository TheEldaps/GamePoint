import Nav from "../Components/Nav";
import HeroSection from "../Components/HeroSection";
import GameFrame from "../Components/GameFrame";
import TournamentStack from "../Components/TournamentStack";
import HeroTwo from "../Components/HeroTwo";
import GameStack from "../Components/GameStack";
import About from "../Components/About";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <div className="relative pb-[50px] w-full min-h-[200vh] bg-[#0F0F0F]">
      <Nav />
      <HeroSection />
      <GameFrame />
      <TournamentStack />
      <HeroTwo />
      <GameStack />
      <About />
      <Footer />
    </div>
  );
}
