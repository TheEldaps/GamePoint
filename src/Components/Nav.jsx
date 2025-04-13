// import Menu from "./Menu";
import Logo from "./Logo";

import { Link } from "react-router-dom";

export default function Nav() {
  // state variable tor togglig the menu bar

  let LinkStyles =
    "no-underline block px-[2rem] py-[0.3rem] text-[1.6rem] text-[#ffffff] hover:bg-[#5C9703] transition duration-300 ease-in-out";
  let styles = "";
  return (
    <header className="  text-[#ffffff]  ">
      <nav className="flex justify-between border-[2px] border-[#fff] items-center  px-[50px] text-[20px] min-h-[40px]">
        <Logo className="w-[500px]" />

        <ul className="list-none flex justify-between min-w-[800px] text-[1.5rem]">
          <li>
            <Link to="/" className={`${LinkStyles}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tournaments" className={`${LinkStyles}`}>
              Tournament
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className={`${LinkStyles}`}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/createaccount" className={`${LinkStyles}`}>
              Create an account
            </Link>
          </li>
          <li>
            <Link to="/login" className={`${LinkStyles}`}>
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
