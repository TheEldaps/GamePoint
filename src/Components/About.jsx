import Messi from "../assets/Images/Messi.png";
import CartoonGirl from "../assets/Images/CartoonGirl.png";
import PlayTournamentBtn from "./PlayTournamentBtn";

export default function About() {
  return (
    <div className="flex w-[1280] h-[530px] px-[40px] mt-[300px] bg-[#8BC72F] bg-[url('./assets/Images/AboutBackgroundDesign.png')] bg-[cover] min-h-[300px]  gap-[60px]  overflow-visible">
      {/* <img src={BackDesign} alt="" className="w-[892px] h-[530px] relative" /> */}
      <div className="flex absolute">
        <section className="">
          <h2 className=" w-[665px] h-[192px] mb-[20px] text-[56px] text-[#141414]">
            About <span className="text-[#E5FC0A] ">A10</span> <br /> e-sports{" "}
            <br /> Platform
          </h2>
          <p className="text-[1.3rem] w-[100%] leading-[24px] text-[#4a4a4a]">
            Play against or alongside other iconic gamers and show the <br />
            wonder of your skills in legendary tournaments
          </p>
          <PlayTournamentBtn color="bg-[#272825]" styles="text-[#95D039]" />
        </section>

        <section className="inline ">
          <img
            src={CartoonGirl}
            className="w-[630px]  h-[680px] absolute bottom-[-119px] left-[450px] inline"
            alt=""
          />
          <img
            src={Messi}
            className="w-[450px]  inline h-[700px] absolute left-[800px]  bottom-[-119px] "
            alt=""
          />
        </section>
      </div>
    </div>
  );
}
