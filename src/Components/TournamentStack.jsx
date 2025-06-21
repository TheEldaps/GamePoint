import TournamentCard from "./TournamentCard";
// import games from "../../db.json";

export default function TournamentStack() {
  // console.log(games);
  return (
    <>
      <h1 className="text-[2rem] mt-[3rem] text-center md:mt-[5rem] md:text-[64px] font-bold text-[#fff] font-[Swis721 Blk BT]">
        Find a tournament
      </h1>

      <section className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-y-[150px] overflow-hidden h-[1100px] items-center md:h-[1500px] border-[2px] md:gap-x-[80px] md:px-[150px]">
        {
          // games.map((game) => {
          //   <TournamentCard data={game} />;
          // })

          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        }
      </section>
    </>
  );
}
