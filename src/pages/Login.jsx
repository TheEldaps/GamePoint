import Input from "../Components/Input";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className="flex justify-center pb-[50px] bg-[#0F0F0F] text-[white] ">
      <section className=" pt-[20px] mt-[50px] px-[40px] min-w-[500px] border">
        <Logo />

        <section className="mb-[50px]">
          <div>
            <h1 className="text-[2rem] mb-[0px]">Create Account</h1>
            <p className="text-[0.6rem]">
              Sign up with your email or use your social account
            </p>
          </div>

          <div className="px-[2px]">
            <Input title="Firstname" />
            <Input title="Lastname" />
            <Input title="Email" />
            <Input title="Date of Birth" />
            <Input title="Create password" placeholder="Password" />
          </div>

          <div>
            <button className="block bg-[green] py-[8px] cursor-pointer w-[70%] mx-[auto] mt-[40px] mb-[60px]">
              <Link className="block no-underline">Create Account</Link>
            </button>

            <span>
              Have an Account? <Link>Log-in</Link>
            </span>

            <div className="flex my-[20px]">
              <hr className="w-[45%]" /> Or <hr className="w-[45%]" />
            </div>
          </div>

          <div className="flex justify-around gap-[5px] ">
            <button className="grow cursor-pointer bg-[red]">Meta</button>
            <button className="grow cursor-pointer bg-[blue]">Google</button>
            <button className="grow cursor-pointer bg-[green]">Apple</button>
          </div>
        </section>
      </section>
    </section>
  );
}
