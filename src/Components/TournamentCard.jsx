import Tournament from "../assets/Images/Tournament.png";
import Calendar from "../assets/Images/Calendar.png";
import ButtonPad from "../assets/Images/ButtonPadIcon.png";
import CommunityIcon from "../assets/Images/CommunityIcon.png";
import fourVfour from "../assets/Images/4V4.png";
import TrophyIcon from "../assets/Images/TrophyIcon.png";
import FreeToPlay from "../assets/images/FreeToPlay.png";

export default function TournamentCard() {
  return (
    <section className="w-[300px]">
      <img className="w-[300px]" src={Tournament} alt="" />

      <div className="bg-[#1c1c1c] pt-[10px] px-[15px] ">
        <h3 className="text-[#fff]  text-[24px] ">Call of duty</h3>

        <ul className="grid grid-cols-2 px-[0px] gap-x-[10px] gap-y-[15px] text-[1.1rem] list-none pb-[10px] mt-[5px] mb-[5px] font-['Georgia'] text-[#7E7F7F]">
          <li className="flex items-center">
            <img className="w-[30px]" src={Calendar} alt="Calendar icon" />
            <span className="">10 Feb 2023</span>
          </li>

          <li className="flex items-center">
            <img
              className="w-[30px]"
              src={FreeToPlay}
              alt="free to play icon"
            />
            <span className="">Free-to-play</span>
          </li>

          <li className="flex items-center">
            <img className="w-[30px]" src={fourVfour} alt="" />
            <span className="">4v4</span>
          </li>

          <li className="flex items-center">
            <img className="w-[30px]" src={CommunityIcon} alt="" />
            <span className="">10/48</span>
          </li>
        </ul>

        <section className="bg-[#242424] flex items-center justify-center text-[#fff] text-center  text-[1.2rem] font-[800] py-[15px]">
          <img className="w-[30px]" src={TrophyIcon} alt="trophy icon" />
          <span>N10,000</span>
        </section>

        <section className="text-[24px] font-[bold] font-[Swiss721 Blk BT] mt-[20px]">
          <button className="bg-[#8bc72f] flex justify-center items-center hover:bg-[#8ac72f82] text-[#000] text-[1.2rem] font-[Arial] w-[100%] mb-[10px] ">
            <img
              className="inline w-[40px] mr-[10px] py-[15px]"
              src={ButtonPad}
              alt="..."
            />
            Join tournament
          </button>

          <button className="bg-[#1c1c1c] h-[60px] hover:bg-[#8bc72f] hover:text-[#000] text-[#fff] text-[1.1rem] border-[2px] border-[#4A4A4A] block w-[100%]">
            View details
          </button>
        </section>
      </div>
    </section>
  );
}
