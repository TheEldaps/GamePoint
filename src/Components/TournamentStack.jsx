import GameList from "./GameList";
import GameCatalogBtn from "./GameCatalogBtn";

export default function TournamentStack() {
  return (
    <section>
      <h1 className="text-[2rem] mt-[3rem] text-center md:mt-[5rem] md:text-[64px] font-bold text-[#fff] font-[Swis721 Blk BT]">
        Find a Game
      </h1>

      <GameList />

      <section>
        <GameCatalogBtn />
      </section>
    </section>
  );
}
