import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

export default function PlayTournamentBtn({
  styles,
  pad = "py-[20px] px-[50px]",
  color = "bg-[#5C9703]",
}) {
  return (
    <Link to="/tournament" className="no-underline">
      <button
        className={`${styles} ${pad} flex items-center ${color} cursor-pointer hover:bg-[#46562da8]`}
      >
        <img
          className="w-[40px] mr-[10px] inline text-[#000]"
          src={logo}
          alt=""
        />
        <span
          className={`text-[32px] text-[500] text-[Swis721 Blk BT ] text-[${styles}] text-center`}
        >
          Play tournaments
        </span>
      </button>
    </Link>
  );
}
