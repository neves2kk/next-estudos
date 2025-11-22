import { Saira_Stencil_One } from "next/font/google";
import Lupa from "../assets/lupa.svg";
import { CartControl } from "./CartControl";

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export function Header() {
  return (
    <header className="flex items-center justify-between py-1 px-8 bg-white sm:py-5 sm:px-40 ">
      <div>
        <a
          className={`${sairaStencil.className} font-bold  text-(--logo-color) cursor-pointer text-2xl sm:text-4xl`}
        >
          capputeeno
        </a>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex  bg-[#F3F5F6]">

            <input
            className="outline-none  w-60 px-2.5 py-2 rounded text-(--text-dark) sm:w-80"
            placeholder="Procurando por algo específico?"
            />
            <img src={Lupa.src} alt="Lupa" className="pr-2 cursor-pointer, h-auto w-10" />

        </div>
        
        <CartControl/>
      </div>

    </header>
  );
}
