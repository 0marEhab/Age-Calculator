import React, { useState } from "react";

export default function Calculator() {
  const [activeTab, setActiveTab] = useState("gregorian");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2024);
  const [ageData, setAgeData] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );
    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const diff = today - birthDate;
    const ageYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const ageMonths = today.getMonth() - birthDate.getMonth() + ageYears * 12;
    const ageDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const ageWeeks = Math.floor(ageDays / 7);

    const timeToNextBirthday = nextBirthday - today;
    const daysToNextBirthday = Math.ceil(
      timeToNextBirthday / (1000 * 60 * 60 * 24)
    );

    setAgeData({
      ageYears,
      ageMonths,
      ageDays,
      ageWeeks,
      nextBirthday: nextBirthday.toLocaleDateString("ar-EG"),
      daysToNextBirthday,
    });
  };

  return (
    <div className="p-6 mt-10 bg-white flex justify-center items-center w-full">
      <div className="p-6 rounded-lg w-full" id="calculator">
        {/* Tabs */}
        <div className="flex justify-center gap-4 text-lg text-black">
          <button
            onClick={() => setActiveTab("hijri")}
            className={`px-4 py-2 rounded ${
              activeTab === "hijri"
                ? "border-[#0370A3] border-2"
                : "bg-gray-200"
            }`}
          >
            حساب العمر بالهجري
          </button>
          <button
            onClick={() => setActiveTab("gregorian")}
            className={`px-4 py-2 rounded ${
              activeTab === "gregorian"
                ? "border-[#0370A3] border-2"
                : "bg-gray-200"
            }`}
          >
            حساب العمر بالميلادي
          </button>
        </div>
        {/* Section Title */}
        <div className="mt-12 top-3 relative text-center">
          <span className="text-black bg-white py-3 px-5 z-20 rounded-xl border-2 border-[#0370A3]">
            {activeTab === "gregorian"
              ? "عمرك بالتاريخ الميلادي"
              : "عمرك بالتاريخ الهجري"}
          </span>
        </div>
        {/* Date Selectors */}
        <div className="flex md:flex-row flex-col gap-4 z-10 justify-between items-center bg-gray-100 p-10 rounded-lg border-[#0370A3] border-t-2">
          {/* Day */}
          <div className="flex flex-col items-center">
            <label className="text-gray-600 mb-2">اليوم</label>
            <select
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              className="p-2 border rounded text-gray-600 w-[300px]"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          {/* Month */}
          <div className="flex flex-col items-center">
            <label className="text-gray-600 mb-2">الشهر</label>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="p-2 border rounded text-gray-600 w-[300px]"
            >
              {[
                "يناير",
                "فبراير",
                "مارس",
                "أبريل",
                "مايو",
                "يونيو",
                "يوليو",
                "أغسطس",
                "سبتمبر",
                "أكتوبر",
                "نوفمبر",
                "ديسمبر",
              ].map((m, i) => (
                <option key={i} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          {/* Year */}
          <div className="flex flex-col items-center">
            <label className="text-gray-600 mb-2">السنة</label>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="p-2 border rounded text-gray-600 w-[300px]"
            >
              {Array.from({ length: 101 }, (_, i) => 2024 - i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Calculate Button */}
        <div className="p-6 flex justify-center bg-gray-100">
          <button
            onClick={calculateAge}
            className="bg-[#0370A3] font-bold text-white px-6 py-2 rounded hover:bg-[#025d86]"
          >
            احسب العمر
          </button>
        </div>
        {/* Results */}
        {ageData && (
          <div className="mt-8  p-6 w-full flex justify-center items-center  rounded-lg">
            <table className=" bg-white w-full" dir="rtl">
              <tbody className="">
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                    عمرك الحالي:
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                    {ageData.ageYears} سنة
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                    عمرك بالشهور:
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                    {ageData.ageMonths} شهر
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                    عمرك بالأيام:
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                    {ageData.ageDays} يوم
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                    عمرك بالأسابيع:
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                    {ageData.ageWeeks} أسبوع
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                    تاريخ ميلادك القادم:
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                    {ageData.nextBirthday}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                    الأيام المتبقية لعيد ميلادك القادم:
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                    {ageData.daysToNextBirthday} يوم
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
