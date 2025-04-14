import Halland from "../assets/Images/Heroimage.png";

import BackgrdYellow from "../assets/Images/BackgrdYellow.png";
import PlayTournamentBtn from "./PlayTournamentBtn";

export default function HeroSection() {
  return (
    <div className=" relative flex text-[#ffffff] pt-[30px] pl-[90px] bg-[#000]">
      <div className="w-[45%]">
        <h1 className="font-[Arial]  text-[96px] font-[1000] leading-[96px] mb-[20px] mt-[40px] text-left decoration-skip-ink-none">
          Dominate <br /> the world <br /> with <br /> every win.
        </h1>

        {/* <h1 className="font-[Swis721 Blk BT] text-[96px] font-[1000] leading-[100px] text-left decoration-skip-ink-none mb-[50px]">
          every win
        </h1> */}

        <p className="text-[1.3rem] mt-[30px] mb-[40px] font-[sans-serif]">
          Play against or alongside other iconic gamers and show the <br />
          wonder of your skills in legendary tournaments
        </p>

        <PlayTournamentBtn
          color="bg-[#5C9703]"
          styles="block min-w-[50px] text-[32px] font-bold py-[10px] px-[20px] font-[Swiss721 Blk BT]   text-[#000]"
        />
      </div>

      <div>
        <img
          className="h-[770px]  w-[100%] pr-[] "
          src={BackgrdYellow}
          alt=""
        />
        <img
          className="absolute bottom-[0px] right-[0px] max-w-[750px] h-[770px]"
          src={Halland}
          alt=""
        />
      </div>
    </div>
  );
}
