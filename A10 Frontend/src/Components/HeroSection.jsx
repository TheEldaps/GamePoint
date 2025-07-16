import Halland from "../assets/Images/Heroimage.png";
import BackgrdYellow from "../assets/Images/BackgrdYellow.png";
import PlayTournamentBtn from "./PlayTournamentBtn";
import HeroImagePhone from "../assets/Images/Heroimage-phone-02.png";

export default function HeroSection() {
  return (
    <section className="bg-[#000] pt-[30px]">
      <div className="relative flex text-[#ffffff] pt-[10px] pl-[16px] sm:pl-[50px] md:pl-[40px] bg-[#000]">
        <div className="w-[63%]">
          <h1 className=" text-[3.5rem] leading-[60px]  font-[Arial]  md:text-[80px] font-[1000] md:leading-[96px] mb-[20px] mt-[40px] text-left   lg:text-[6.5rem]">
            Dominate <br />
            <span className="whitespace-nowrap">the world</span> <br /> with{" "}
            <br /> every <br /> win.
          </h1>

          <p className=" block w-[80%]  max-w-[100%] text-[0.8rem] mt-[20px] mb-[10px] md:text-[1.125rem] md:w-[72%] xl:w-[65%]">
            Play against or alongside other iconic gamers and show the wonder{" "}
            <br className="hidden md:inline lg:hidden" /> of your skills in
            legendary tournament.
          </p>

          <PlayTournamentBtn
            color="bg-[#5C9703]"
            styles="sm:block min-w-[50px] text-[0.7rem] font-bold md:py-[20px] md:px-[50px] md:text-[1rem] pt-[10px] px-[20px] font-[Swiss721 Blk BT] my-[10px] text-[#000] "
            pad="py-[10px] px-[30px]"
          />
        </div>

        <div className="w-[45%] ">
          <img
            className="hidden md:flex h-[770px]  w-[100%] z-0"
            src={BackgrdYellow}
            alt=""
          />
          <img
            className="hidden lg:block w-[600px]  h-[650px]  absolute top-[150px] right-[0px] xl:w-[900px] xl:h-[850px] xl:top-[0px] "
            src={Halland}
            alt=""
          />

          <img
            src={HeroImagePhone}
            alt=""
            className="w-[240px] h-[410px] lg:hidden xs:h-500 xs:w-[300px] sm:h-120 sm:top-10 sm:w-[360px] absolute top-[130px] right-[0px] md:w-[520px] md:h-[670px] md:top-[130px] md:right-0"
          />
        </div>
      </div>
    </section>
  );
}
