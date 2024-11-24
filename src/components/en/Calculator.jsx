import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "hijri-date";
import { toGregorian } from "hijri-converter";
export default function Calculator() {
  const [activeTab, setActiveTab] = useState("gregorian");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2024);
  const [ageData, setAgeData] = useState(null);
  const greg = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const hijri = [
    "Muharram",
    "Safar",
    "Rabi' al-awwal",
    "Rabi' al-thani",
    "Jumada al-awwal",
    "Jumada al-thani",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhu al-Qi'dah",
    "Dhu al-Hijjah",
  ];
  const currentAge = function getArabicDateDifference(startDateStr) {
    // Parse the start date
    const startDate = new Date(startDateStr);
    if (isNaN(startDate)) {
      throw new Error("Invalid start date format. Use MM/DD/YYYY format.");
    }

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years, months, and days
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    // Adjust for negative months or days
    if (days < 0) {
      months -= 1;
      days += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate(); // Days in previous month
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Return the formatted Arabic difference
    return `${years} year - ${months} month - ${days} day `;
  };
  const getSeason = (month, day) => {
    if (
      (month === 12 && day >= 21) ||
      month <= 2 ||
      (month === 3 && day <= 19)
    ) {
      return "Winter";
    } else if (
      (month === 3 && day >= 20) ||
      month <= 5 ||
      (month === 6 && day <= 20)
    ) {
      return "Spring";
    } else if (
      (month === 6 && day >= 21) ||
      month <= 8 ||
      (month === 9 && day <= 21)
    ) {
      return "Summer";
    } else if (
      (month === 9 && day >= 22) ||
      month <= 11 ||
      (month === 12 && day <= 20)
    ) {
      return "Autumn";
    }
  };
  const calculateGregAgeFromHijri = () => {
    const today = new Date();
    const hijriBirthDate = { year, month, day }; // Hijri input values

    // Convert Hijri date to Gregorian date
    const gregorianBirthDate = toGregorian(
      hijriBirthDate.year,
      hijriBirthDate.month,
      hijriBirthDate.day
    );
    const birthDate = new Date(
      gregorianBirthDate.gy,
      gregorianBirthDate.gm - 1,
      gregorianBirthDate.gd
    );

    const hijryToday = today.toHijri(); // Optional: Keep track of current Hijri date

    // Check if the birthDate is in the future
    if (birthDate > today) {
      toast.error("Cannot calculate the future date!");
      return;
    }

    const birthSeason = getSeason(
      birthDate.getMonth() + 1,
      birthDate.getDate()
    ); // Determine the season

    const nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    let age = today.getFullYear() - birthDate.getFullYear();
    if (today < nextBirthday) {
      age--;
    }

    const ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    const ageInMonths = age * 12 + (today.getMonth() - birthDate.getMonth());
    const ageInWeeks = Math.floor(ageInDays / 7);

    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const daysUntilNextBirthday = Math.floor(
      (nextBirthday - today) / (1000 * 60 * 60 * 24)
    );
    const weekDayNextBirthday = nextBirthday.toLocaleString("en-US", {
      weekday: "long",
    });
    const result = currentAge(birthDate.toLocaleDateString("en-US"));
    const birth = new Date(birthDate.toLocaleString("en-US"));
    setAgeData({
      ageYears: result,
      yourBirthDay: birthDate.toLocaleString("en-US", { weekday: "long" }),
      birthDate: birth.toLocaleDateString("en-US"),
      ageDays: ageInDays,
      ageMonths: ageInMonths,
      ageWeeks: ageInWeeks,
      nextBirthday: nextBirthday.toLocaleDateString("en-US"),
      weekDayNextBirthday: weekDayNextBirthday,
      daysToNextBirthday: daysUntilNextBirthday,
      hijryToday: hijryToday,
      hijryBirthDay: hijriBirthDate,
      dayYouWereBorn: birthDate.toLocaleString("en-US", { weekday: "long" }),
      seasonYouWereBorn: birthSeason, // Add season info

      sleep: ageInDays * 8,
      laugh: ageInDays * 15,

      breath: ageInDays * 25000,
      heart: ageInDays * 115200,
    });
  };

  const calculateGregAge = () => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    const hijry = today.toHijri();
    const hijryBirthDay = birthDate.toHijri();

    // Check if the birthDate is in the future
    if (birthDate > today) {
      toast.error("Cannot calculate the future date!");
      return;
    }

    // Function to determine the season

    const birthSeason = getSeason(month, day); // Determine the season

    const nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    let age = today.getFullYear() - birthDate.getFullYear();
    if (today < nextBirthday) {
      age--;
    }

    const ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    const ageInMonths = age * 12 + (today.getMonth() - birthDate.getMonth());
    const ageInWeeks = Math.floor(ageInDays / 7);

    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const daysUntilNextBirthday = Math.floor(
      (nextBirthday - today) / (1000 * 60 * 60 * 24)
    );
    const weekDayNextBirthday = nextBirthday.toLocaleString("en-US", {
      weekday: "long",
    });

    // Example usage:

    const result = currentAge(birthDate.toLocaleDateString("en-US"));
    const birth = new Date(birthDate.toLocaleString("en-US"));
    setAgeData({
      ageYears: result,
      yourBirthDay: birthDate.toLocaleString("en-US", { weekday: "long" }),
      birthDate: birth.toLocaleDateString("en-US"),
      ageDays: ageInDays,
      ageMonths: ageInMonths,
      ageWeeks: ageInWeeks,
      nextBirthday: nextBirthday.toLocaleDateString("en-US"),
      weekDayNextBirthday: weekDayNextBirthday,
      daysToNextBirthday: daysUntilNextBirthday,
      hijry: hijry,
      hijryBirthDay: hijryBirthDay,
      dayYouWereBorn: birthDate.toLocaleString("en-US", { weekday: "long" }),
      seasonYouWereBorn: birthSeason, // Add season info
      water: ageInDays * 15.5,
      sleep: ageInDays * 8,
      laugh: ageInDays * 15,
      talk: ageInDays * 7000,
      walk: ageInDays * 10000,
      breath: ageInDays * 25000,
      heart: ageInDays * 115200,
      eat: ageInDays * 3,
    });
  };

  return (
    <div className="p-6 mt-10 font-os bg-white flex justify-center items-center w-full">
      <div className="p-6 rounded-lg w-full" id="calculator">
        {/* Tabs */}
        <div className="flex justify-center gap-4 text-lg text-black">
          <button
            onClick={() => {
              setActiveTab("hijri");

              setYear(1446);
            }}
            className={`px-4 py-2 rounded ${
              activeTab === "hijri"
                ? "border-[#0370A3] border-2"
                : "bg-gray-200"
            }`}
          >
            Calculating age in the Hijri calendar{" "}
          </button>
          <button
            onClick={() => {
              setActiveTab("gregorian");

              setYear(2024);
            }}
            className={`px-4 py-2 rounded ${
              activeTab === "gregorian"
                ? "border-[#0370A3] border-2"
                : "bg-gray-200"
            }`}
          >
            Calculating age in the Gregorian calendar{" "}
          </button>
        </div>
        {/* Section Title */}
        <div className="mt-12 top-3 relative text-center">
          <span className="text-black bg-white py-3 px-5 z-20 rounded-xl border-2 border-[#0370A3]">
            {activeTab === "gregorian"
              ? "Age in the Gregorian Calendar "
              : "Age in the hijri Calendar"}
          </span>
        </div>
        {/* Date Selectors */}
        <div className="flex md:flex-row flex-col  gap-4 z-10 justify-between items-center bg-gray-100 p-8 rounded-lg border-[#0370A3] border-t-2">
          {/* Day */}
          <div className="flex flex-col mt-2 md:flex-row gap-2 items-center">
            <label className="text-gray-600 mb-2">Day</label>

            <select
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              className="p-2 border rounded text-gray-600 md:w-[300px] w-[200px]"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          {/* Month */}
          <div className="flex flex-col mt-2 md:flex-row gap-2 items-center">
            <label className="text-gray-600 mb-2">Month</label>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="p-2 border rounded text-gray-600 md:w-[300px] w-[200px]"
            >
              {(activeTab === "gregorian" ? greg : hijri).map((m, i) => (
                <option key={i} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          {/* Year */}
          <div className="flex flex-col mt-2 md:flex-row gap-2 items-center">
            <label className="text-gray-600 mb-2">Year</label>
            {activeTab === "gregorian" ? (
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="p-2 border rounded text-gray-600 md:w-[300px] w-[200px]"
              >
                {Array.from({ length: 101 }, (_, i) => 2024 - i).map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            ) : (
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="p-2 border rounded text-gray-600 md:w-[300px] w-[200px]"
              >
                {Array.from({ length: 101 }, (_, i) => 1446 - i).map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        {/* Calculate Button */}
        <div className="p-6 flex justify-center bg-gray-100">
          <button
            onClick={
              activeTab == "gregorian"
                ? calculateGregAge
                : calculateGregAgeFromHijri
            }
            className="bg-[#0370A3] font-bold text-white px-6 py-2 rounded hover:bg-[#025d86]"
          >
            Calculate Age{" "}
          </button>
        </div>
        {/* Results */}
        {ageData && (
          <div className="mt-10 flex flex-col justify-center items-center md:justify-end md:items-end">
            <div className="p-2 flex-col  md:w-full flex justify-center items-center rounded-lg">
              <div className="overflow-x-auto">
                <table className="bg-white w-[200px]">
                  <tbody>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        Age in Gregorian
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.ageYears}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        Gregorian birthdate
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.birthDate}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        yourBirthDay
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.yourBirthDay}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        Hijri birthdate
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.hijryBirthDay.month}-
                        {ageData.hijryBirthDay.day}-{ageData.hijryBirthDay.year}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        Age in Days
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.ageDays} Day
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        Age in Weeks{" "}
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.ageWeeks} Week
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        Age in Months
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.ageMonths} Month
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        next birthday
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.daysToNextBirthday} days
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm font-medium text-gray-900">
                        season you born in
                      </td>
                      <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-sm text-gray-900">
                        {ageData.seasonYouWereBorn}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {ageData && (
          <div className="mt-10 flex flex-col justify-center items-center md:justify-end md:items-end">
            <h1 className="text-2xl w-full bg-gray-100 p-4 border-l-2 border-[#0370A3] font-bold text-black  mb-4">
              Fun Facts About Your Life
            </h1>
            <div className="p-2 flex-col md:w-full flex justify-center items-center rounded-lg">
              <div>
                <p className="bg-blue-200 text-blue-900 rounded-md border-2 p-4 border-[#0370A3] mb-4">
                  Note: The facts are calculated based on the average daily
                  rates of general activities for a healthy human body. We use
                  standard percentages and multiply these rates by the number of
                  days you have lived to get the results.
                </p>
              </div>
              <table className="bg-white  ">
                <tbody>
                  <tr className="border-b">
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs font-medium text-gray-900">
                      You have slept:
                    </td>
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs text-gray-900">
                      {ageData.sleep} hours approximately
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs font-medium text-gray-900">
                      You have laughed:
                    </td>
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs text-gray-900">
                      {ageData.laugh} times approximately
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs font-medium text-gray-900">
                      You have taken:
                    </td>
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs text-gray-900">
                      {ageData.breath} breaths approximately
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs font-medium text-gray-900">
                      You have eaten:
                    </td>
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs text-gray-900">
                      {ageData.eat} meals approximately
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs font-medium text-gray-900">
                      You have drunk:
                    </td>
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs text-gray-900">
                      {ageData.water} cups of water approximately
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs font-medium text-gray-900">
                      You have walked:
                    </td>
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs text-gray-900">
                      {ageData.walk} steps approximately
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs font-medium text-gray-900">
                      Your heart has beaten:
                    </td>
                    <td className="px-1 md:px-6 md:text-start text-center py-4 whitespace-nowrap w-1/2 border-gray-400 border-2 text-xs text-gray-900">
                      {ageData.heart} beats approximately
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
