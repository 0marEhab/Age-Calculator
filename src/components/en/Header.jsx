import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Header({ toggleSidebar }) {
  return (
    <header>
      <div className="bg-[#FFFFFF] h-[70px] shadow-md flex justify-center items-center shadow-slate-400">
        <div className="w-[1220px] flex justify-between items-start font-os text-lg">
          <div className="flex gap-8 justify-center items-center">
            <button onClick={toggleSidebar}>
              {<GiHamburgerMenu /> || sidebar}
            </button>
            <Link to={"/"}>EN</Link>
          </div>
          <div>
            <Link to={"/en"}>age calculator</Link>{" "}
          </div>
        </div>
      </div>
    </header>
  );
}
