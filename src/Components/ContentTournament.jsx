import TournamentCard from "./TournamentCard";

export default function ContentTournament() {
  return (
    <div className="ml-[140px] px-[4rem] pt-[120px] border-4 border-[#c60d0d]">
      <div>
        <h2 className=" font-[bold] text-[2.5rem]">My Tournament</h2>
        <section className="grid grid-cols-3 gap-y-[150px] gap-x-[30px] place-items-center  py-[80px]">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </section>
      </div>

      <div>
        <h2 className=" font-[bold] text-[2.5rem]">Physical tournament</h2>
        <section className="grid grid-cols-3 gap-y-[150px] gap-x-[30px] place-items-center  py-[80px]">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </section>
      </div>
    </div>
  );
}
