import TournamentCard from "./TournamentCard";

export default function ContentHome() {
  return (
    <section className="flex flex-col bg-[#0F0F0F]  pt-[40px] w-[100vw] ml-[240px] mt-[80px]">
      <div className="flex justify-evenly mb-[40px]  ">
        <section className="flex-grow max-w-[500px] bg-[gray] h-[300px] border-[#000] border-2">
          Empty Section One
        </section>
        <section className="flex-grow max-w-[500px] bg-[gray] h-[300px] border-[#000] border-2">
          Empty Section Two
        </section>
      </div>
      <section className="flex flex-col">
        <div className="px-[100px] pb-[60px]">
          <h2 className=" font-[bold] text-[2.5rem]">Upcoming tournament</h2>
          <section className="flex flex-wrap  justify-evenly h-[650px] overflow-hidden mt-[20px] gap-[40px] gap-y-[60px] ">
            <TournamentCard />
            <TournamentCard />
            <TournamentCard />
          </section>
        </div>

        <div className="px-[100px] pb-[60px]">
          <h2 className=" font-[bold] text-[2.5rem]">Physical tournament</h2>
          <section className="flex flex-wrap  justify-evenly h-[650px] overflow-hidden mt-[20px] gap-[40px] gap-y-[60px] ">
            <TournamentCard />
            <TournamentCard />
            <TournamentCard />
          </section>
        </div>
      </section>
    </section>
  );
}
