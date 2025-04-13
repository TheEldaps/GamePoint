import SearchTab from "../Components/SearchTab";
import SideNav from "../Components/SideNav";
import ContentHome from "../Components/ContentHome";

export default function DashboardHome() {
  return (
    <div className="bg-[#0F0F0F]  text-[#ffffff]">
      <SearchTab />
      <div className="flex">
        <SideNav />
        <ContentHome />
      </div>
    </div>
  );
}
