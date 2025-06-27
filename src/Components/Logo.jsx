import image from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

export default function Logo({
  width = "200px",
  text = "2.5rem",
  imgWidth = "50px",
  imgHeight = "50px",
}) {
  return (
    <>
      <Link
        to="/"
        className={`flex text-[#fff] justify-center items-center no-underline min-w-[${width}]`}
      >
        <img
          className={`inline md:w-[50px] md:h-[50px] w-[${imgWidth}] h-[${imgHeight}] mr-[10px]`}
          src={image}
          alt="App logo"
        />
        <span
          className={`text-[${text}] md:text-4xl font-[Arial] font-[900] inline`}
        >
          GamePoint
        </span>
      </Link>
    </>
  );
}
