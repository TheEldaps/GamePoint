import Tournament from "../assets/Images/Tournament.png";
import Calendar from "../assets/Images/Calendar.png";
import ButtonPad from "../assets/Images/ButtonPadIcon.png";
import CommunityIcon from "../assets/Images/CommunityIcon.png";
import fourVfour from "../assets/Images/4V4.png";
import TrophyIcon from "../assets/Images/TrophyIcon.png";
import FreeToPlay from "../../src/assets/Images/FreeToPlay.png";
import { useEffect } from "react";

export default function TournamentCard() {
  useEffect(() => {
    fetch("https://localhost:4000");
  }, []);

  return (
    <section className=" border-[1px] w-[300px] border-[white] md:w-[300px] mt-[60px] mb-[60px]">
      <img className="w-[300px]" src="" alt="" />

      <div className="bg-[#1c1c1c]  py-[10px] px-[10px] md:py-[15px] md:px-[15px] ">
        <h3 className="text-[#fff]  md:text-[24px] ">Call of duty</h3>

        <ul className=" grid grid-cols-2 px-[0px] md:gap-x-[10px] gap-y-[10px] md:gap-y-[15px] text-[0.6rem] md:text-[1.1rem] list-none pb-[10px] mt-[5px] mb-[5px] font-['Georgia'] text-[#7E7F7F]">
          <li className="flex items-center">
            <img
              className="w-[20px] md:w-[30px]"
              src={Calendar}
              alt="Calendar icon"
            />
            <span className="">10 Feb, 2023 </span>
          </li>

          <li className="flex items-center">
            <img
              className="w-[20px] md:w-[30px]"
              src={FreeToPlay}
              alt="free to play icon"
            />
            <span className="">Free play</span>
          </li>

          <li className="flex items-center">
            <img className="w-[20px] md:w-[30px]" src={fourVfour} alt="" />
            <span className="">4v4</span>
          </li>

          <li className="flex items-center">
            <img className="w-[20px] md:w-[30px]" src={CommunityIcon} alt="" />
            <span className="">10/48</span>
          </li>
        </ul>

        <section className="bg-[#242424] flex items-center justify-center text-[#fff] text-center text-[0.8rem] md:text-[1.2rem] font-[800] py-[7px] md:py-[15px]">
          <img
            className="w-[20px] mid:w-[30px]"
            src={TrophyIcon}
            alt="trophy icon"
          />
          <span>N10,000</span>
        </section>

        <section className="w-[100%] text-[24px] font-[bold] mt-[20px]">
          <button className="bg-[#8bc72f] cursor-pointer flex justify-center items-center hover:bg-[#8ac72f82] text-[#000] text-[0.8rem] md:text-[1.2rem] font-[Arial] w-[100%] mb-[10px] md:py-[8px] ">
            <img
              className="inline w-[15px] md:w-[15px] mr-[4px] md:mr-[10px] py-[10px] md:py-[15px]"
              src={ButtonPad}
              alt="..."
            />
            Join tournament
          </button>

          <button className="bg-[#1c1c1c] cursor-pointer md:h-[60px] hover:bg-[#3a3b38] hover:text-[#000] text-[#fff] text-[0.8rem] py-[8px] md:py-[8px]  md:text-[1.2rem] border-[2px] border-[#4A4A4A] font-[Arial] block  w-[100%]">
            View details
          </button>
        </section>
      </div>
    </section>
  );
}
