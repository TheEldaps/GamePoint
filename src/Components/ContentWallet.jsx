import padIcon from "../assets/Images/logo.png";
import ButtonPad from "../assets/Images/ButtonPadIcon.png";

export default function ContentWallet() {
  return (
    <section className=" w-[100%] min-h-[80vh] ml-[240px] bg-[#0F0F0F] mt-[80px] px-[] pt-[40px]">
      <section className="min-h-[100px] mx-[auto] w-[80%] p-[20px] px-[40px]  border-[1px] border-[#8BC72F]">
        <div className="flex flex-wrap w-[100%] border-t-[4px] pt-[30px] border-[#8BC72F]">
          <div className=" font-[arial] min-w-[400px] flex-grow">
            <p className="my-[0] font-[600] text-[#7E7F7F]">Total Balance</p>
            <p className=" mt-[10px] font-[900] text-[2rem]">NGN 123,567.90</p>
          </div>
          <div className=" flex flex-wrap max-w-[500px] justify-between flex-grow items-center ">
            <button className="flex w-[200px] h-[60px] font-[700] mr-[40px] items-center justify-center bg-[#0F0F0F] px-[20px] py-[10px]  border-[#8BC72F] text-[#8BC72F] cursor-pointer">
              <img
                src={padIcon}
                alt="gamepad-icon"
                className="w-[20px] mr-[10px]"
              />
              Add Funds
            </button>
            <button className="flex w-[200px] h-[60px] font-[700] items-center justify-center  bg-[#8BC72F] px-[20px] py-[10px] border-[#8BC72F] text-[#0F0F0F] cursor-pointer">
              <img
                src={ButtonPad}
                alt="gamepad-icon"
                className="w-[20px] mr-[10px]"
              />
              Withdraw Funds
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
