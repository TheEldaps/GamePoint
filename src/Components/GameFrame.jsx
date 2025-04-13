import Call2Duty from "../assets/GameframeImgs/Call2Duty.png";
import PES2020 from "../assets/GameframeImgs/PES2020.png";
import Overwatch from "../assets/GameframeImgs/Overwatch.png";
import PUBG from "../assets/GameframeImgs/PUBG.png";

const imageList = [Call2Duty, PES2020, Overwatch, PUBG];

const GameFrame = () => {
  return (
    <div className="bg-[#121212] relative overflow-hidden w-full   bg-gradient-to-r from-[rgba(206,206,206,0.1125)] via-[rgba(206,206,206,0.1215)] to-[rgba(206,206,206,0.1215)] h-[200px] border-t-2 border-b-2 border-[#5C9703]">
      <div className="flex animate-marquee whitespace-nowrap  gap-[10rem]">
        {[...imageList, ...imageList].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            width={100}
            height={100}
            className="h-16 w-auto my-[1.5rem] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default GameFrame;
