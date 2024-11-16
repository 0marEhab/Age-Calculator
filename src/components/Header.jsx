import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
  return (
    <header>
      <div className="bg-[#FFFFFF] h-[70px] shadow-md flex justify-center items-center shadow-slate-400">
        <div className="w-[1220px] flex justify-between items-start font-semibold text-xl">
          <div>
            <GiHamburgerMenu />
          </div>
          <div>حساب العمر</div>
          <div>عمر</div>
        </div>
      </div>
    </header>
  );
}
