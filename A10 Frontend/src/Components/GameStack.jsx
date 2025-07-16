import GameCard from "../Components/GameCard";

export default function GameStack() {
  return (
    <div className="max-h-[1150px] sm:max-h-[1100px] md:max-h-[100%] p-[30px] overflow-hidden md:max-w-[900px] mx-[auto] grid my-[120px] md:grid-cols-2 gap-y-[100px] gap-x-[80px] text-justify text-[#fff] mb-[30px] border-2 border-amber-50">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
}
