import TournamentCard from "./TournamentCard";

export default function TournamentStack() {
  return (
    <>
      <h1 className="text-center mt-[5rem] text-[64px] font-bold text-[#fff] font-[Swis721 Blk BT]">
        Find a tournament
      </h1>

      <section className=" flex flex-wrap justify-center gap-y-[150px] overflow-hidden h-[1400px] border-[2px] gap-x-[80px]  px-[150px] py-[40px]">
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
      </section>
    </>
  );
}
