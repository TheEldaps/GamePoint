import PlayTournamentBtn from "./PlayTournamentBtn";

export default function HeroTwo() {
  return (
    <section className="py-[80px]">
      <div className="text-[white] leading-[50px]  text-[4rem] font-[Swiss721 Blk BT] text-bold text-center">
        <h2>We are the best</h2>
        <h2>e-sport tournament</h2>
        <h2>platform for you.</h2>
      </div>

      <p className="text-[#fff] text-center text-[24px] w-[800px] mx-[auto] mb-[40px]">
        Play against or alongside other iconic gamers and show the wonder of
        your skills in legendary tournaments.
      </p>

      <PlayTournamentBtn styles="mx-[auto] cursor-pointer block text-[36px] " />
    </section>
  );
}
