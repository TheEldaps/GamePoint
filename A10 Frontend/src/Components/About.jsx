import Messi from "../assets/Images/Messi.png";
import CartoonGirl from "../assets/Images/CartoonGirl.png";
import PlayTournamentBtn from "./PlayTournamentBtn";

export default function About() {
  return (
    <div className="flex px-[10px] md:px-[40px] md:mt-[100px] pt-[20px] bg-[#8BC72F] bg-[url('./assets/Images/AboutBackgroundDesign.png')] bg-[cover] min-h-[300px] gap-[60px]  overflow-visible md:pt-[40px] lg:mt-[200px]">
      {/* <img src={BackDesign} alt="" className="w-[892px] h-[530px] relative" /> */}
      <div className="w-[100vw] flex">
        <section className="w-[50%]">
          <h2 className=" mb-[10px] lg:w-[665px]  text-[2rem] leading-[2rem] font-[bold] text-[#141414] md:text-[4.0rem]  md:leading-[4rem]">
            About <span className="text-[#E5FC0A] ">A10</span> <br /> e-sports
            <br /> Platform
          </h2>
          <p className="text-[0.8rem] md:text-[1.2rem]  leading-[1rem] text-[#4a4a4a] md:leading-[1.5rem]">
            Play against or alongside other iconic gamers and show the wonder of
            your skills in legendary tournaments
          </p>
          <PlayTournamentBtn
            color="bg-[#272825]"
            styles="text-[#95D039] min-w-[50px] text-[0.7rem] font-bold my-[20px] md:text-[1.3rem]"
            pad="py-[10px] px-[10px]  md:py-[20px] md:px-[50px]"
          />
        </section>

        <section className="flex  md:min-h-[400px] lg:h-[400px] ">
          <img
            src={CartoonGirl}
            className="relative w-[350px] h-[350px] right-[1px]  sm:h-[300px] sm:w-[250px] md:w-[450px] md:min-h-[400px] md:h-[410px] md:bottom-[0px] lg:h-[600px] lg:w-[650px] lg:bottom-[200px] lg:right-[100px]"
            alt=""
          />
          <img
            src={Messi}
            className="hidden lg:block h-[600px] lg:w-[600px] relative  lg:bottom-[200px] lg:right-[360px]"
            alt=""
          />
        </section>
      </div>
    </div>
  );
}
