import Messi from "../assets/Images/Messi.png";
import CartoonGirl from "../assets/Images/CartoonGirl.png";
import PlayTournamentBtn from "./PlayTournamentBtn";

export default function About() {
  return (
    <div className=" p-[20px] bg-[#7cc72c] min-h-[300px]  gap-[60px] flex overflow-visible">
      <section className="text-[#ffffffa0] w-[500px] text-[24px] bg-[#d79696]">
        <h2 className="text-[#141414]">
          About <span className="text-[#E5FC0A]">A10</span> <br /> e-sports{" "}
          <br /> Platform
        </h2>
        <p>
          Play against or alongside other icinic gamers and show the <br />
          wonder of your skills in legendary tournaments
        </p>
        <PlayTournamentBtn bg="bg-[black]" />
      </section>

      <section className="inline ">
        <img
          src={Messi}
          className="w-[300px]  inline h-[400px] absolute bottom-[50px] "
          alt=""
        />
        <img
          src={CartoonGirl}
          className="w-[300px] absolute bottom-[50px] left-[700px] inline h-[400px]"
          alt=""
        />
      </section>
    </div>
  );
}
