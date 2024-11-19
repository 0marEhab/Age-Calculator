import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "hijri-date";
import { toGregorian } from "hijri-converter";
export default function CalculatorEn({ content }) {
  const [activeTab, setActiveTab] = useState("hijri");
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

    // Function to determine the season
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
    const weekDayNextBirthday = nextBirthday.toLocaleString("ar-EG", {
      weekday: "long",
    });

    setAgeData({
      ageYears: birthDate.toLocaleDateString("en-US"),
      yourBirthDay: birthDate.toLocaleString("en-US", { weekday: "long" }),
      ageYears: age,
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

    setAgeData({
      ageYears: birthDate.toLocaleDateString("en-US"),
      yourBirthDay: birthDate.toLocaleString("en-US", { weekday: "long" }),
      ageYears: age,
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
    <div className="mt-10 font-os p-6 bg-white w-full">
      <h1 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
        age of 2003 gregorian{" "}
      </h1>
      <div className="text-black flex flex-col gap-8 p-2">
        <p>
          The current age of individuals born in a specific gregorian year.{" "}
          <span className="text-[#0370A3]"> 2003 </span> Or before the date.
          <span className="text-[#0370A3]"> 19-11-2024 </span> is{" "}
          <span className="text-[#0370A3]"> 21 year </span>.
        </p>
        <p>
          The current age of individuals born in a specific hijri year.{" "}
          <span className="text-[#0370A3]"> 2003 </span> Or after the date.
          <span className="text-[#0370A3]"> 19-11-2024 </span> is{" "}
          <span className="text-[#0370A3]"> 20 year</span>.
        </p>
        <p className="border-b mt-5 border-black w-full"></p>
      </div>
      <div className=" mt-10 font-os bg-white flex justify-center items-center w-full">
        <div className="p-6 rounded-lg w-full" id="calculator">
          {/* Tabs */}
          <div className="flex justify-center gap-4 text-lg text-black">
            <button
              onClick={() => {
                setActiveTab("hijri");
                content("hijri");
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
                content("gregorian");
              }}
              className={`px-4 py-2 rounded ${
                activeTab === "gregorian"
                  ? "border-[#0370A3] border-2"
                  : "bg-gray-200"
              }`}
            >
              Calculating age in the Gregorian calendar.{" "}
            </button>
          </div>
          {/* Section Title */}
          <div className="mt-12 top-3 relative text-center">
            <span className="text-black bg-white py-3 px-5 z-20 rounded-xl border-2 border-[#0370A3]">
              {activeTab === "gregorian"
                ? "your age in the Gregorian "
                : "your age in the hijri "}
            </span>
          </div>
          {/* Date Selectors */}
          <div className="flex md:flex-row flex-col  gap-4 z-10 justify-between items-center bg-gray-100 p-8 rounded-lg border-[#0370A3] border-t-2">
            {/* Day */}
            <div className="flex flex-col mt-2 md:flex-row gap-2 items-center">
              <label className="text-gray-600 mb-2">day</label>

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
            <div className="flex flex-col mt-2 md:flex-row gap-2 items-center">
              <label className="text-gray-600 mb-2">month</label>
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="p-2 border rounded text-gray-600 w-[300px]"
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
                  className="p-2 border rounded text-gray-600 w-[300px]"
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
                  className="p-2 border rounded text-gray-600 w-[300px]"
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
              Calculate the age{" "}
            </button>
          </div>
          {/* Results */}
          {ageData && (
            <div className="mt-10">
              <h1 className="text-2xl bg-gray-100 p-4 border-l-2 border-[#0370A3] font-bold text-black mb-4">
                The Result in gregorian{" "}
              </h1>
              <div className="mt-8  p-6 w-full flex justify-center items-center  rounded-lg">
                <table className=" bg-white w-full">
                  <tbody className="">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        Current Age:{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.ageYears} year
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        your age with monthes:{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.ageMonths} month
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        your age with days:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.ageDays} day
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        your age with weeks:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.ageWeeks} week
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        Next birthday:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.nextBirthday}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        Days until your next birthday
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.daysToNextBirthday} day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {ageData && (
            <div className="mt-10">
              <h1 className="text-2xl bg-gray-100 p-4 border-l-2 border-[#0370A3] font-bold text-black  mb-4">
                The result in hijri{" "}
              </h1>
              <div className="mt-8  p-6 w-full flex justify-center items-center  rounded-lg">
                <table className=" bg-white w-full">
                  <tbody className="">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        Your age:{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {Math.floor((ageData.ageDays + 11) / 354.36)} year
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        your age with monthes:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {Math.floor(((ageData.ageDays + 11) / 354.36) * 12)}{" "}
                        month
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        your age with days:{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.ageDays} day
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        your age with weeks:{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.ageWeeks} week
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        Next birthday:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.hijry
                          ? ageData.hijry.day
                          : ageData.hijryToday.date}
                        /{ageData.hijryBirthDay.month}/
                        {ageData.hijry
                          ? ageData.hijry.year + 1
                          : ageData.hijryToday.year + 1}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        Days until your next birthday:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.daysToNextBirthday} day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {ageData && (
            <div className="mt-10">
              <h1 className="text-2xl bg-gray-100 p-4 border-l-2 border-[#0370A3] font-bold text-black  mb-4">
                More information about your life
              </h1>
              <div className="mt-8  p-6 w-full flex justify-center items-center  rounded-lg">
                <table className=" bg-white w-full">
                  <tbody className="">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        the day that you were born:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.dayYouWereBorn}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        the season that you were born :
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.seasonYouWereBorn}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {ageData && (
            <div className="mt-10">
              <h1 className="text-2xl bg-gray-100 p-4 border-l-2 border-[#0370A3] font-bold text-black  mb-4">
                More facts about your life{" "}
              </h1>
              <div className="mt-8  p-6 w-full flex justify-center items-center  rounded-lg">
                <table className=" bg-white w-full">
                  <tbody className="">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        drink
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.water} cup of water
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        sleep:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.sleep} hour
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        laugh:{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.laugh} one
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        talk:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.talk} word
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        walk:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.walk} step
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        breath:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.breath} breath
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        heart beat
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.heart} beat
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        eat:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.eat} meal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}