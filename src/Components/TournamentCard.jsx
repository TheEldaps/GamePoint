import Tournament from "../assets/Images/Tournament.png";
import Calendar from "../assets/Images/Calendar.png";
import ButtonPad from "../assets/Images/ButtonPadIcon.png";
import CommunityIcon from "../assets/Images/CommunityIcon.png";
import fourVfour from "../assets/Images/4V4.png";
import TrophyIcon from "../assets/Images/TrophyIcon.png";
import FreeToPlay from "../assets/images/FreeToPlay.png";

export default function TournamentCard() {
  return (
    <section className="">
      <img className="w-[400px] h-[200px]" src={Tournament} alt="" />

      <div className="bg-[#1c1c1c] px-[20px] py-[15px]">
        <h3 className="text-[#fff] p-[20px] text-[24px] ">Call of duty</h3>

        <ul className="grid grid-cols-2 gap-[5px] text-[20px] list-none pb-[10px] mt-[5px] mb-[5px] text-[#7E7F7F]">
          <li className="flex items-center">
            <img className="w-[20px]" src={Calendar} alt="Calendar icon" />
            <span className="text-[1rem]">10 Feb 2023</span>
          </li>

          <li className="flex items-center">
            <img
              className="w-[20px]"
              src={FreeToPlay}
              alt="free to play icon"
            />
            <span className="text-[1rem]">Free-to-play</span>
          </li>

          <li className="flex items-center">
            <img className="w-[20px]" src={fourVfour} alt="" />
            <span className="text-[1rem]">4v4</span>
          </li>

          <li className="flex items-center">
            <img className="w-[20px]" src={CommunityIcon} alt="" />
            <span className="text1rem]">10/48</span>
          </li>
        </ul>

        <section className="bg-[#242424] flex items-center justify-center text-[#fff] text-center mb-[10px] px-[10px] py-[18px]">
          <img className="w-[20px]" src={TrophyIcon} alt="" />
          <p>N10,000</p>
        </section>

        <section className="text-[24px] font-[bold] font-[Swiss721 Blk BT] mt-[40px]">
          <button className="bg-[#8bc72f] hover:bg-[#8ac72f82] text-[#000] font-[Blk] block w-[100%] mb-[10px] ">
            <img
              className="inline w-[40px] mr-[10px] py-[15px]"
              src={ButtonPad}
              alt="..."
            />
            Join tournament
          </button>

          <button className="bg-[#1c1c1c] h-[60px] hover:bg-[#8bc72f] hover:text-[#000] text-[#fff] border-[2px] border-[#7E7F7F] block w-[100%]">
            View details
          </button>
        </section>
      </div>
    </section>
  );
}
