import Messi from "../assets/Images/Messi.png";
import CartoonGirl from "../assets/Images/CartoonGirl.png";
import PlayTournamentBtn from "./PlayTournamentBtn";

export default function About() {
  return (
    <div className="flex  md:h-[530px] px-[10px] md:px-[40px] md:mt-[300px] bg-[#8BC72F] bg-[url('./assets/Images/AboutBackgroundDesign.png')] bg-[cover] min-h-[300px]  gap-[60px]  overflow-visible">
      {/* <img src={BackDesign} alt="" className="w-[892px] h-[530px] relative" /> */}
      <div className="w-[100vw] flex">
        <section className="w-[50%]">
          <h2 className=" lg:w-[665px] md:h-[192px] mb-[10px] text-[2.5rem] leading-11 font-[bold] text-[#141414]">
            About <span className="text-[#E5FC0A] ">A10</span> <br /> e-sports{" "}
            <br /> Platform
          </h2>
          <p className="text-[0.8rem] md:text-[1.3rem]  leading-[14px] text-[#4a4a4a]">
            Play against or alongside other iconic gamers and show the wonder of
            your skills in legendary tournaments
          </p>
          <PlayTournamentBtn
            color="bg-[#272825]"
            styles="text-[#95D039] min-w-[50px] text-[0.7rem] font-bold my-[20px] "
            pad="py-[10px] px-[10px]"
          />
        </section>

        <section className="flex ">
          <img
            src={CartoonGirl}
            className="relative w-[350px] h-[350px] right-[1px] bottom-[] md:max-w-[630px] md:max-h-[680px]"
            alt=""
          />
          <img
            src={Messi}
            className="hidden md:block w-[450px] h-[700px] relative  bottom-[854px]"
            alt=""
          />
        </section>
      </div>
    </div>
  );
}
