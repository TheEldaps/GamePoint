// import Tournament from "../assets/Images/Tournament.png";
import ButtonPad from "../assets/Images/ButtonPadIcon.png";
import TrophyIcon from "../assets/Images/TrophyIcon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TournamentCard({ gameData }) {
  const [showDescription, setShowDescription] = useState(false);
  const shortenedDescription = gameData.description.slice(0, 120) + "...";

  return (
    <section className=" border-[1px] w-[300px] border-[white] md:w-[300px] mt-[60px] mb-[60px]">
      <img className="w-[300px]" src={gameData.thumb} alt="" />

      <div className="bg-[#1c1c1c]  py-[10px] px-[10px] md:py-[15px] md:px-[15px] ">
        <h3 className="flex items-center text-[#fff]  md:text-[24px] h-[60px] ">
          {gameData.title}
        </h3>

        <p className="  px-[0px] md:gap-x-[10px] gap-y-[10px] md:gap-y-[15px] text-[0.9rem] pb-[10px] mt-[10px] mb-[5px] font-['Georgia'] text-[#ffffffa4]">
          {showDescription ? gameData.description : shortenedDescription}
          <button
            className="text-[#3636ebb8] pl-[5px] inline-block pr-[5px]"
            onClick={() => {
              setShowDescription((prev) => !prev);
            }}
          >
            {showDescription ? "show less" : "show more"}
          </button>
        </p>

        <section className="bg-[#242424] flex items-center justify-center text-[#fff] text-center text-[0.8rem] md:text-[1.2rem] font-[800] py-[7px] md:py-[15px]">
          <img
            className="w-[20px] mid:w-[30px]"
            src={TrophyIcon}
            alt="trophy icon"
          />
          <span>Free</span>
        </section>

        <section className="w-[100%] text-[24px] font-[bold] mt-[20px]">
          <Link
            to={`/games/${gameData.id}`}
            className="bg-[#8bc72f] cursor-pointer flex justify-center items-center hover:bg-[#8ac72f82] text-[#000] text-[0.8rem] md:text-[1.2rem] font-[Arial] w-[100%] mb-[10px] md:py-[8px] "
          >
            <img
              className="inline w-[15px] md:w-[15px] mr-[4px] md:mr-[10px] py-[10px] md:py-[15px]"
              src={ButtonPad}
              alt="..."
            />
            Play Game
          </Link>
          {/* 
          <button className="bg-[#1c1c1c] cursor-pointer md:h-[60px] hover:bg-[#3a3b38] hover:text-[#000] text-[#fff] text-[0.8rem] py-[8px] md:py-[8px]  md:text-[1.2rem] border-[2px] border-[#4A4A4A] font-[Arial] block  w-[100%]">
            View details
          </button> */}
        </section>
      </div>
    </section>
  );
}
