import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="flex max-w-[800px]  justify-between text-[#fff] pt-[30px] px-[40px]">
      <div className=" flex flex-col items-center ">
        <Logo width="150px" text="2.3rem" imgWidth="21px" imgHeight="30px" />
        <p className="mt-[0px] text-[0.5rem] mx-[auto]">
          Connecting the world of E-sports
        </p>
      </div>
      <div>
        <ul className="flex flex-col list-none md:gap-y-[10px] md:text-[1.1rem] text-[#fff]">
          <Links to="/" title="Home" />
          <Links to="/tournaments" title="Tournaments" />
          <Links to="/terms&condition" title="Terms and condition" />
          <Links to="/privacy&policy" title="Privacy and Policy" />
        </ul>
      </div>
    </section>
  );
}

function Links({ to, title }) {
  return (
    <li className=" my-[5px]">
      <Link to={to} className="text-[#fff] hover:text-[#ffffff86] no-underline">
        {title}
      </Link>
    </li>
  );
}
