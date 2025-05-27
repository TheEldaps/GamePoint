import SearchTab from "../Components/SearchTab";
import SideNav from "../Components/SideNav";
import ContentWallet from "../Components/ContentWallet";


export default function DashboardWallets() {
  return (
    <div className="bg-[#0F0F0F] min-h-[100vh] text-[#ffffff]">
      <SearchTab />
      <div className="flex">
        <SideNav className="border-[20px] border-[#ffffff] border-solid" />
        <ContentWallet />
      </div>
    </div>
  );
}
