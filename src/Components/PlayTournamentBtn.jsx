import logo from "../assets/Images/logo.png";

export default function PlayTournamentBtn({
  styles,
  pad = "py-[20px] px-[50px]",
}) {
  return (
    <button
      className={`${styles} ${pad} flex items-center bg-[#5C9703]  hover:bg-[#97e2268d]`}
    >
      <img
        className="w-[40px] mr-[10px] inline text-[#000]"
        src={logo}
        alt=""
      />
      <span className="text-[32px] text-[500] text-[Swis721 Blk BT ] text-[#0a0a0a] text-center">
        Play tournaments
      </span>
    </button>
  );
}
