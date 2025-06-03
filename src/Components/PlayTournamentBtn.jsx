import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

export default function PlayTournamentBtn({
  styles,
  pad = "md:py-[20px] md:px-[50px]",
  color = "bg-[#5C9703]",
}) {
  return (
    <Link to="/tournaments" className=" flex justify-start">
      <button
        className={`${styles} ${pad} flex items-center ${color} cursor-pointer hover:bg-[#46562da8]`}
      >
        <img
          className="w-[20px] mr-[5px] inline text-[#000]"
          src={logo}
          alt=""
        />
        <span className={` text-[500] text-[Swis721 Blk BT ]text-center`}>
          Play tournaments
        </span>
      </button>
    </Link>
  );
}
