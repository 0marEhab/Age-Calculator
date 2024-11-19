import React from "react";
import { Link } from "react-router-dom";

export default function AgeBanner() {
  return (
    <div className="flex justify-center font-os bg-white rounded-md items-center mt-10">
      <div className="w-full rounded-lg p-6">
        <h2 className="text-center text-xl font-semibold  mb-4 text-gray-800">
          Age Calculator{" "}
        </h2>
        <div className="space-y-4">
          <button className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Link to={"/en"} className="w-full flex ">
              calculate hijri{" "}
            </Link>
          </button>
          <button className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Link to={"/en"} className="w-full flex ">
              calculate gregorian
            </Link>
          </button>
          <button className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Link to={"/en/hijri"} className="w-full flex ">
              Calculating age in the Hijri calendar.
            </Link>
          </button>
          <button className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Link to={"/en/gregorian"} className="w-full flex ">
              Calculating age in the gregorian calendar.{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
