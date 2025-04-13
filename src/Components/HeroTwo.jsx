import PlayTournamentBtn from "./PlayTournamentBtn";

export default function HeroTwo() {
  return (
    <>
      <div className="text-[white] leading-[100px] pb-[80px] text-[100px] font-[Swiss721 Blk BT] text-bold text-center">
        <h2>We are the best</h2>
        <h2>e-sport tournament</h2>
        <h2>platform for you.</h2>
      </div>

      <p className="text-[#fff] text-center text-[24px] w-[800px] mx-[auto] mb-[20px]">
        Play against or alongside other iconic gamers and show the wonder of
        your skills in legendary tournaments.
      </p>

      <PlayTournamentBtn styles="mx-[auto] block text-[36px] " />
    </>
  );
}
