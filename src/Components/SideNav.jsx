import SideNavLink from "./SideNavLink";
import BellIcon from "../assets/Images/BellIcon.png";

export default function SideNav() {
  return (
    <ul className="bg-[#121212] pt-[20px] w-[200px] flex flex-col h-[100vh] fixed top-[80px] ">
      <div className="flex h-[40vh]  border-2 flex-col gap-[10px] border-[#b2adad]">
        <SideNavLink
          src={BellIcon}
          icon="home-icon"
          title="Home"
          path="/dashboard"
        />
        <SideNavLink
          src={BellIcon}
          icon="Tournament-icon"
          title="Tournaments"
          path="/tournaments"
        />
        <SideNavLink
          src={BellIcon}
          icon="Wallet-icon"
          title="Wallet"
          path="/wallet"
        />
        <SideNavLink
          src={BellIcon}
          icon="Settings-icon"
          title="Settings"
          path="/settings"
        />
      </div>
      <div className="flex flex-col-reverse border-[2px] border-[white] h-[43vh]  ">
        <SideNavLink src={BellIcon} icon="Logout-icon" title="LOG-OUT" />
      </div>
    </ul>
  );
}
