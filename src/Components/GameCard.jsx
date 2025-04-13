import GamePic from "../assets/Images/GamePic.png";

export default function GameCard() {
  return (
    <div>
      <img className=" mb-[20px] w-[100%] block mx-auto" src={GamePic} alt="" />
      <h2 className="mb-[10px] text-[30px] font-[bold]">
        Call of duty: Warzone
      </h2>
      <p className="text-[#ffffffa0]">
        Prepare to take the battle to a new metropolis in the all new Urzikstan
        map, the new big Battle Royale map in Call of Duty: Warzone, that is
        sure to excite veterans and newcomers alike. Led by Raven Software, this
        urban high-density layout has exciting points of interest that feel new
        but with some nostalgia to them.
      </p>
    </div>
  );
}
