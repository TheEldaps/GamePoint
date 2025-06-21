import SearchTab from "../Components/SearchTab";
import SideNav from "../Components/SideNav";
import ContentTournament from "../Components/ContentTournament";

export default function DashboardTournaments() {
  return (
    <div className="bg-[#0F0F0F] text-[#ffffff]">
      <SearchTab />
      <div className="flex">
        <div className="hidden md:flex">
          <SideNav />
        </div>
        <ContentTournament />
      </div>
    </div>
  );
}


