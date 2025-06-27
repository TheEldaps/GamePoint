import TournamentCard from "./TournamentCard";

import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

export default function GameList({ showFewGames = false }) {
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

  const gamesToDisplay = showFewGames ? gameList.slice(0, 8) : gameList;

  return (
    <section className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly md:gap-y-[50px] items-center md:gap-x-[20px] md:px-[20px]">
      {Loading ? (
        <BounceLoader
          color="#fff"
          size={80}
          loading={true}
          speedMultiplier={1.5}
          cssOverride={{ margin: "200px auto" }}
        />
      ) : (
        gamesToDisplay.map((game) => {
          return <TournamentCard key={game.id} gameData={game} />;
        })
      )}
    </section>
  );
}
