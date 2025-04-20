import TournamentCard from "./TournamentCard";

export default function ContentTournament() {
  return (
    <div className=" flex flex-col ml-[240px] w-[100vw] pt-[120px] ">
      <div className="px-[100px] pb-[60px]">
        <h2 className=" font-[bold] pl-[40px] my-[0px] text-[2.5rem]">
          My Tournament
        </h2>

        <section className="flex flex-wrap  justify-evenly h-[650px] overflow-hidden mt-[20px] gap-[40px] gap-y-[60px]">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </section>
      </div>

      <div className="px-[100px] pb-[60px]">
        <h2 className=" pl-[40px] mt-[50px] mb-[0px] font-[bold] text-[2.5rem]">
          Physical tournament
        </h2>
        <section className="flex  flex-wrap  justify-evenly h-[650px] overflow-hidden mt-[20px] gap-[40px] gap-y-[60px]">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </section>
      </div>
    </div>
  );
}
