import Messi from "../assets/Images/Messi.png";
import CartoonGirl from "../assets/Images/CartoonGirl.png";
import PlayTournamentBtn from "./PlayTournamentBtn";

export default function About() {
  return (
    <div className="flex  h-[530px] px-[40px] mt-[300px] bg-[#8BC72F] bg-[url('./assets/Images/AboutBackgroundDesign.png')] bg-[cover] min-h-[300px]  gap-[60px]  overflow-visible">
      {/* <img src={BackDesign} alt="" className="w-[892px] h-[530px] relative" /> */}
      <div className="w-[100vw] flex">
        <section className="w-[50%]">
          <h2 className=" w-[665px] h-[192px] mb-[20px] text-[56px] text-[#141414]">
            About <span className="text-[#E5FC0A] ">A10</span> <br /> e-sports{" "}
            <br /> Platform
          </h2>
          <p className="text-[1.3rem] w-[80%] leading-[24px] text-[#4a4a4a]">
            Play against or alongside other iconic gamers and show the <br />
            wonder of your skills in legendary tournaments
          </p>
          <PlayTournamentBtn color="bg-[#272825]" styles="text-[#95D039]" />
        </section>

        <section className="flex">
          <img
            src={CartoonGirl}
            className="max-w-[630px] block max-h-[680px]"
            alt=""
          />
          {/* <img
            src={Messi}
            className="w-[450px] h-[700px] relative  bottom-[854px] inline"
            alt=""
          /> */}
        </section>
      </div>
    </div>
  );
}
