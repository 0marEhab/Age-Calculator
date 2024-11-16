import React from "react";

export default function AgeBanner() {
  const options = [
    "حساب العمر بالهجري",
    "حساب العمر بالميلادي",
    "حساب العمر بالنسبة الهجرية",
    "حساب العمر بالنسبة الميلادية",
  ];

  return (
    <div className="flex justify-center bg-white rounded-md items-center mt-10">
      <div className="w-full rounded-lg p-6">
        <h2 className="text-center text-xl font-bold mb-4 text-gray-800">
          حاسبات العمر
        </h2>
        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              className="w-full shadow-lg border-t-2 hover:border-[#0370A3] text-right px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
            >
              <a href={`#calculator`} className="w-full flex justify-end">
                {option}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
