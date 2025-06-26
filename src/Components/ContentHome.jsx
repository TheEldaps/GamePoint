import TournamentCard from "./TournamentCard";

export default function ContentHome() {
  return (
    <section className="flex flex-col bg-[#0F0F0F]  pt-[40px] px-[20px] w-[100%] md:ml-[270px] mt-[80px]">
      <div className="flex justify-center md:justify-evenly mb-[40px]  ">
        <section className="flex-grow max-w-[500px] bg-[gray] h-[300px] border-[#000] border-2">
          {/* <iframe
            src="https://html5.gamemonetize.co/ahsrpqpzx05abp7qbkazmyvrw02wcwwm/"
            width="800"
            height="600"
            scrolling="none"
            frameborder="0"
          ></iframe> */}
        </section>
        <section className="hidden md:flex flex-grow max-w-[500px] bg-[gray] h-[300px] border-[#000] border-2">
          Empty Section Two
        </section>
      </div>
      <section className="flex flex-col">
        <div className="px-[100px] pb-[60px]">
          <h2 className=" font-[bold] text-[2.5rem]">Upcoming tournament</h2>
          <section className="flex flex-wrap  justify-evenly h-[500px] md:h-[600px] overflow-hidden mt-[20px] gap-[40px] gap-y-[60px] ">
            <TournamentCard />
            <TournamentCard />
            <TournamentCard />
          </section>
        </div>

        <div className="px-[100px] pb-[60px]">
          <h2 className=" font-[bold] text-[2.5rem]">Physical tournament</h2>
          <section className="flex flex-wrap  justify-evenly h-[500px] md:h-[600px] overflow-hidden mt-[20px] gap-[40px] gap-y-[60px] ">
            <TournamentCard />
            <TournamentCard />
            <TournamentCard />
          </section>
        </div>
      </section>
    </section>
  );
}
