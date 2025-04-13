import GameCard from "../Components/GameCard";

export default function GameStack() {
  return (
    <div className="max-w-[900px] mx-[auto] grid mt-[80px] grid-cols-2 gap-[80px] gap-x-[80px] text-justify text-[#fff] mb-[200px]">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
}
