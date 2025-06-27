import GameList from "./GameList";

export default function ContentTournament() {
  return (
    <div className=" border-5 flex flex-col ml-[300px] md:ml-[250px] w-[100vw] pt-[120px] ">
      <div className="md:px-[50px] pb-[60px]">
        <h2 className=" font-[bold] pl-[40px] mb-[20px] text-[2.5rem]">
          All Games
        </h2>
        <section>
          <GameList />
        </section>
      </div>
    </div>
  );
}
