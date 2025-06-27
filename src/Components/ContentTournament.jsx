import GameList from "./GameList";

export default function ContentTournament() {
  return (
    <div className=" flex flex-col md:ml-[240px] w-[100vw] pt-[120px] ">
      <div className="md:px-[100px] pb-[60px]">
        <h2 className=" font-[bold] pl-[40px] my-[0px] text-[2.5rem]">
          All Games
        </h2>
        <section className="flex  flex-wrap  justify-evenly mt-[20px] gap-[40px] gap-y-[60px]">
          <GameList />
        </section>
      </div>
    </div>
  );
}
