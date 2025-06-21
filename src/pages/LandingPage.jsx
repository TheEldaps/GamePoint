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
    <div className=" pb-[50px] min-h-[200vh] bg-[#0F0F0F]">
      <h1 className="text-white">Hello World</h1>
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
