import TournamentCard from "./TournamentCard";

export default function ContentHome() {
  return (
    <section className=" bg-[#0F0F0F] border-[2px] ml-[240px] w-[100%] mt-[80px]">
      <div className="flex justify-between mb-[40px]">
        <section className="w-[500px] bg-[gray] h-[300px] border-[#000] border-2">
          Empty Section One
        </section>
        <section className="w-[500px] bg-[gray] h-[300px] border-[#000] border-2">
          Empty Section Two
        </section>
      </div>

      <div className="px-[100px] pb-[60px]">
        <h2 className=" font-[bold] text-[2.5rem]">Upcoming tournament</h2>
        <section className="flex justify-center mt-[20px] gap-x-[30px] ">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </section>
      </div>

      <div className="px-[100px]">
        <h2 className=" font-[bold] text-[2.5rem]">Physical tournament</h2>
        <section className="grid grid-cols-3 mt-[20px] gap-x-[30px] place-items-center">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </section>
      </div>
    </section>
  );
}
