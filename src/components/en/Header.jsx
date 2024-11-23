import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Header({ toggleSidebar }) {
  return (
    <header>
      <div className="bg-[#FFFFFF] p-5 h-[70px] shadow-md flex justify-center items-center shadow-slate-400">
        <div className="w-[1220px] flex justify-between items-start font-os text-lg">
          <div>
            <Link to={"/en"}>Age Calculator</Link>{" "}
          </div>
          <div className="flex gap-8 justify-center items-center">
            <Link to={"/"}>AR</Link>
            <button onClick={toggleSidebar}>
              {<GiHamburgerMenu /> || sidebar}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
