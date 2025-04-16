import TournamentCard from "./TournamentCard";

export default function ContentTournament() {
  return (
    <div className="flex ml-[240px] w-[100%] px-[4rem] pt-[120px] ">
      <div>
        <h2 className=" font-[bold] pl-[40px] my-[0px] text-[2.5rem]">
          My Tournament
        </h2>
        <section className="grid grid-cols-3 gap-y-[150px]  place-items-center  py-[50px]">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </section>
      </div>

      <div>
        <h2 className=" pl-[40px] mt-[50px] mb-[0px] font-[bold] text-[2.5rem]">
          Physical tournament
        </h2>
        <section className="grid grid-cols-3 gap-y-[150px] gap-x-[30px] place-items-center  py-[50px]">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </section>
      </div>
    </div>
  );
}
