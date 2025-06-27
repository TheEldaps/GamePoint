import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import Nav from "../Components/Nav";

export default function GamePage() {
  const [fetchedGame, setFetchedGame] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchGame() {
      try {
        const res = await fetch(`http://localhost:4000/games/${id}`);
        const data = await res.json();
        setFetchedGame(data);
      } catch (error) {
        console.log("Error fetching game data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]);

  return (
    <section>
      <Nav />

      <section className="flex justify-center items-center min-h-[100vh] bg-[#0F0F0F] text-[white]">
        {loading ? (
          <BounceLoader
            color="#5C9703"
            size={80}
            loading={true}
            speedMultiplier={1.5}
          />
        ) : (
          <div>
            <h1>{`Welcome to the ${fetchedGame.title} page`} </h1>
            <img src={fetchedGame.thumb} alt="" />
            <iframe
              src={fetchedGame.url}
              width={fetchedGame.width}
              height={fetchedGame.height}
              scrolling="none"
              frameborder="0"
            ></iframe>
          </div>
        )}
      </section>
    </section>
  );
}
