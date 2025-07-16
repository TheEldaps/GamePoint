import SideNavLink from "./SideNavLink";
import Home from "../assets/Images/Home_icon.png";
// import Logout from "../assets/Images/logout_Icon.png";
// import Settings from "../assets/Images/Settings_Icon.png";
import Tournament from "../assets/Images/Tournament_Icon.png";
// import Wallet from "../assets/Images/Wallet_Icon.png";
import { useState } from "react";

export default function SideNav({ vanishOnBigScreen }) {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`border-1 w-[92%] md:h-[92vh] bg-[#0a0a0a] list-none pt-[10px] px-[10px] fixed md:w-[250px] flex flex-col top-[36px] md:top-[60px] flex-grow ${
        vanishOnBigScreen ? "md:hidden" : "md:block"
      }`}
    >
      <div className="flex   flex-col gap-[10px] ">
        <SideNavLink
          src={Home}
          icon="home-icon"
          title="Home"
          path="/"
          onClick={() => {
            setActive("home");
          }}
          id="home"
          active={active}
        />

        <SideNavLink
          src={Tournament}
          icon="Tournament-icon"
          title="Games"
          path="/Games"
          onClick={() => {
            setActive("tournament");
          }}
          id="tournament"
          active={active}
        />

        {/* <SideNavLink
          src={Wallet}
          icon="Wallet-icon"
          title="Wallet"
          path="/wallet"
          onClick={() => {
            setActive("wallet");
          }}
          id="wallet"
          active={active}
        /> */}
        {/* <SideNavLink
          src={Settings}
          icon="Settings-icon"
          title="Settings"
          path="/settings"
          onClick={() => {
            setActive("settings");
          }}
          id="settings"
          active={active}
        /> */}
      </div>

      {/* <div className="flex flex-col-reverse grow pb-[25px] ">
        <SideNavLink
          src={Logout}
          bg="bg-[#1E2415]"
          icon="Logout-icon"
          title="LOG-OUT"
          textcol="text-[#8BC72F]"
        />
      </div> */}
    </nav>
  );
}
