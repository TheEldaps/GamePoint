import PlayTournamentBtn from "./PlayTournamentBtn";

export default function HeroTwo() {
  return (
    <section className="py-[30px] px-[5px] md:py-[80px]">
      <div className="text-[white] text-[3rem] md:text-6xl text-bold text-center xl:text-[5rem]">
        <h2 className="leading-13 md:leading-15 xl:leading-20">
          We are the best <br />
          e-sport tournament <br />
          platform for you. <br />
        </h2>
      </div>

      <p className="text-[#fff] text-center text-[1rem] my-[40px] md:mx-[20px] xl:text-[1.5rem]">
        Play against or alongside other iconic gamers and show the wonder of
        your skills in legendary tournaments.
      </p>

      <PlayTournamentBtn
        pad="py-[10px] px-[30px]"
        color="bg-[#5C9703]"
        styles="sm:block min-w-[50px] text-[0.7rem] font-bold py-[10px] px-[20px] font-[Swiss721 Blk BT] mx-[auto] my-[20px] text-[#000] md:py-[20px] md:px-[50px] md:text-[1rem]"
      />
    </section>
  );
}
