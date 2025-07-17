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
        const res = await fetch(
          `https://gamepoint-backend.onrender.com/games/${id}`
        );
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
    <section className="">
      <Nav />

      <section className="flex justify-center items-center min-h-[95vh] pt-[80px] bg-[#0F0F0F] text-[white]">
        {loading ? (
          <BounceLoader
            color="#5C9703"
            size={80}
            loading={true}
            speedMultiplier={1.5}
          />
        ) : (
          <main className="h-[100vh]">
            <section className="flex flex-col justify-around gap-[15px] mt-[20px] border-1 pt-[20px] pb-[5px] px-[50px] ">
              <h1 className="px-[15px] mx-auto text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] text-center border-1  text-center">
                {fetchedGame.title}
              </h1>
              <iframe
                className="w-[80vw] h-[80vh] bg-[#fff] border"
                src={fetchedGame.url}
                width=""
                height=""
                scrolling="none"
                frameborder=""
              ></iframe>

              <div className="flex flex-col text-center justify-center border bg-[#5C9703] w-[100%] mt-[5px] md:mt-[0] gap-[10px]">
                <p className="">{fetchedGame.instructions}</p>
                {/* <p className="font-bold">{fetchedGame.category}</p> */}
              </div>
            </section>
          </main>
        )}
      </section>
    </section>
  );
}
