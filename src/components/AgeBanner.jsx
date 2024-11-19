import React from "react";
import { Link } from "react-router-dom";

export default function AgeBanner() {
  return (
    <div className="flex justify-center font-os bg-white rounded-md items-center mt-10">
      <div className="w-full rounded-lg p-6">
        <h2 className="text-center text-xl font-semibold  mb-4 text-gray-800">
          حاسبات العمر
        </h2>
        <div className="space-y-4">
          <button className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Link to={"/"} className="w-full flex justify-end">
              حساب العمر بالهجري
            </Link>
          </button>
          <button className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Link to={"/"} className="w-full flex justify-end">
              حساب العمر بالميلادي
            </Link>
          </button>
          <button className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Link to={"/hijri"} className="w-full flex justify-end">
              حساب العمر بالنسبة الهجرية
            </Link>
          </button>
          <button className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            <Link to={"/gregorian"} className="w-full flex justify-end">
              حساب العمر بالنسبة الميلادية
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
