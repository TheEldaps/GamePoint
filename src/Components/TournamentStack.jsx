import TournamentCard from "./TournamentCard";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

export default function TournamentStack() {
  const [gameList, setGameList] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const res = await fetch("http://localhost:4000/games");
        const data = await res.json();
        setGameList(data);
      } catch (e) {
        console.log("There's an error with loading:", e);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  return (
    <>
      <h1 className="text-[2rem] mt-[3rem] text-center md:mt-[5rem] md:text-[64px] font-bold text-[#fff] font-[Swis721 Blk BT]">
        Find a Game
      </h1>

      <section className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-y-[150px] overflow-hidden items-center border-[2px] md:gap-x-[80px] md:px-[50px]">
        {Loading ? (
          <BounceLoader
            color="#fff"
            size={80}
            loading={true}
            speedMultiplier={1.5}
            cssOverride={{ margin: "200px auto" }}
          />
        ) : (
          gameList.map((game) => {
            return <TournamentCard key={game.id} gameData={game} />;
          })
        )}
      </section>
    </>
  );
}
