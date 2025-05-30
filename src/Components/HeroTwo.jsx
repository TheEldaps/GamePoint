import PlayTournamentBtn from "./PlayTournamentBtn";

export default function HeroTwo() {
  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="text-[white] text-[3rem] md:text-6xl text-bold text-center">
        <h2 className="leading-13 ">
          We are the best <br />
          e-sport tournament <br />
          platform for you. <br />
        </h2>
      </div>

      <p className="text-[#fff] text-center text-[1rem]   my-[40px]">
        Play against or alongside other iconic gamers and show the wonder of
        your skills in legendary tournaments.
      </p>

      <PlayTournamentBtn
        pad="py-[10px] px-[30px]"
        color="bg-[#5C9703]"
        styles="sm:block min-w-[50px] text-[0.7rem] font-bold py-[10px] px-[20px] font-[Swiss721 Blk BT] mx-[auto] my-[20px] text-[#000] "
      />
    </section>
  );
}
