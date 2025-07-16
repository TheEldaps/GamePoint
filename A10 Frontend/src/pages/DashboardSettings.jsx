import SearchTab from "../Components/SearchTab";
import SideNav from "../Components/SideNav";
import ContentSettings from "../Components/ContentSettings";

export default function DashboardSettings() {
  return (
    <div className="bg-[#0F0F0F]  text-[#ffffff] min-h-[100vh]">
      <SearchTab />
      <div className="flex">
        <SideNav className="border-[20px] border-[#ffffff] border-solid" />
        <ContentSettings />
      </div>
    </div>
  );
}
