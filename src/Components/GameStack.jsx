import GameCard from "../Components/GameCard";

export default function GameStack() {
  return (
    <div className="h-[1000px] px-[15px] overflow-hidden md md:max-w-[900px] mx-[auto] grid my-[80px] md:grid-cols-2 gap-[80px] gap-x-[80px] text-justify text-[#fff] mb-[30px]">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
}
