import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="flex w-[800px] justify-between text-[#fff] pt-[30px] px-[40px]">
      <div className=" flex flex-col items-center ">
        <Logo />
        <p className="mt-[0px] text-[0.8rem] mx-[auto]">
          Connecting the world of E-sports
        </p>
      </div>
      <div>
        <ul className="flex flex-col list-none gap-y-[10px] text-[1.1rem]">
          <li>
            <Link to="/home" className="no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tournaments" className="no-underline">
              Tournaments
            </Link>
          </li>
          <li>
            <Link to="/terms&condition" className="no-underline">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="no-underline">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
