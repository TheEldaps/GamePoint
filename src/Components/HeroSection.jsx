import Halland from "../assets/Images/Heroimage.png";
import BackgrdYellow from "../assets/Images/BackgrdYellow.png";
import PlayTournamentBtn from "./PlayTournamentBtn";
import HeroImagePhone from "../assets/Images/Heroimage-phone-02.png";

export default function HeroSection() {
  return (
    <>
      <div className=" relative flex text-[#ffffff] pt-[10px] pl-[20px] md:pl-[90px] bg-[#000]">
        <div className="w-[55%]">
          <h1 className=" text-[3.5rem] leading-[60px]  font-[Arial]  md:text-[96px] font-[1000] md:leading-[96px] mb-[20px] mt-[40px] text-left ">
            Dominate the world <br /> with <br /> every win.
          </h1>

          <p className=" border- block min-w-[80px] max-w-[230px] text-[0.9rem] mt-[20px] mb-[10px]">
            Play against or alongside <br /> other iconic gamers and show the
            wonder of your skills in legendary tournament.
          </p>
        </div>

        <div className="w-[45%] ">
          <img
            className="hidden md:flex h-[770px]  w-[100%] z-0"
            src={BackgrdYellow}
            alt=""
          />
          <img
            className="hidden w-[230px] h-[330px]  absolute bottom-[-20px] right-[0px] md:w-[750px] md:h-[770px]"
            src={Halland}
            alt=""
          />

          <img
            src={HeroImagePhone}
            alt=""
            className='w-[280px] h-[410px] md:hidden absolute top-[100px] right-[0px] md:w-[750px] md:h-[770px]"'
          />
        </div>
      </div>
      <PlayTournamentBtn
        color="bg-[#5C9703]"
        styles="sm:block min-w-[50px] text-[0.7rem] font-bold py-[10px] px-[20px] font-[Swiss721 Blk BT] mx-[auto] my-[20px] text-[#000] "
        pad="py-[10px] px-[30px]"
      />
    </>
  );
}
