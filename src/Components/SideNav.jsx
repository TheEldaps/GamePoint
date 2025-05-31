import SideNavLink from "./SideNavLink";
import Home from "../assets/Images/Home_icon.png";
import Logout from "../assets/Images/logout_Icon.png";
import Settings from "../assets/Images/Settings_Icon.png";
import Tournament from "../assets/Images/Tournament_Icon.png";
import Wallet from "../assets/Images/Wallet_Icon.png";
import { useState } from "react";

export default function SideNav() {
  const [active, setActive] = useState("");

  return (
    <nav className="h-[95vh] md:h-[90%] bg-[#121212] list-none pt-[20px] px-[20px] fixed md:w-[250px] flex flex-col top-[36px] md:top-[70px] flex-grow ">
      <div className="flex  h-[47vh]  flex-col gap-[10px] ">
        <SideNavLink
          src={Home}
          icon="home-icon"
          title="Home"
          path="/dashboard"
          onClick={() => {
            setActive("home");
          }}
          id="home"
          active={active}
        />

        <SideNavLink
          src={Tournament}
          icon="Tournament-icon"
          title="Tournaments"
          path="/tournaments"
          onClick={() => {
            setActive("tournament");
          }}
          id="tournament"
          active={active}
        />

        <SideNavLink
          src={Wallet}
          icon="Wallet-icon"
          title="Wallet"
          path="/wallet"
          onClick={() => {
            setActive("wallet");
          }}
          id="wallet"
          active={active}
        />
        <SideNavLink
          src={Settings}
          icon="Settings-icon"
          title="Settings"
          path="/settings"
          onClick={() => {
            setActive("settings");
          }}
          id="settings"
          active={active}
        />
      </div>

      <div className="flex flex-col-reverse grow pb-[25px] ">
        <SideNavLink
          src={Logout}
          bg="bg-[#1E2415]"
          icon="Logout-icon"
          title="LOG-OUT"
          textcol="text-[#8BC72F]"
        />
      </div>
    </nav>
  );
}
