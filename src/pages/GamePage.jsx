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
          <main className="min-h-[150vh]">
            <h1 className="text-[2rem] mt-[20px] border-1  text-center">
              {fetchedGame.title}
            </h1>
            <section className="flex flex-col md:flex-row justify-around gap-[20px] mt-[50px] border-1 p-[40px] max-w-[1200px]">
              <iframe
                className="md:w-[80%] bg-[#2a292963]"
                src={fetchedGame.url}
                // width={fetchedGame.width}
                height={fetchedGame.height}
                scrolling="none"
                frameborder=""
              ></iframe>

              <div className="flex flex-col justify-center max-w-[20%] border w-[100%] mt-[20px] md:mt-[0] gap-[10px]">
                <p className="h-[100%] ">{fetchedGame.instructions}</p>
                <p className="font-bold">{fetchedGame.category}</p>
              </div>
            </section>
          </main>
        )}
      </section>
    </section>
  );
}
