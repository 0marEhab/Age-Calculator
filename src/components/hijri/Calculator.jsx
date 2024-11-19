import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "hijri-date";
import { toGregorian } from "hijri-converter";
export default function Calculator({ content }) {
  const [activeTab, setActiveTab] = useState("hijri");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2024);
  const [ageData, setAgeData] = useState(null);
  const greg = [
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
  ];
  const hijri = [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الثاني",
    "جُمادى الأولى",
    "جُمادى الثانية",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة",
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
      ageYears: birthDate.toLocaleDateString("ar-EG"),
      yourBirthDay: birthDate.toLocaleString("ar-EG", { weekday: "long" }),
      ageYears: age,
      ageDays: ageInDays,
      ageMonths: ageInMonths,
      ageWeeks: ageInWeeks,
      nextBirthday: nextBirthday.toLocaleDateString("ar-EG"),
      weekDayNextBirthday: weekDayNextBirthday,
      daysToNextBirthday: daysUntilNextBirthday,
      hijryToday: hijryToday,
      hijryBirthDay: hijriBirthDate,
      dayYouWereBorn: birthDate.toLocaleString("ar-EG", { weekday: "long" }),
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
  console.log(ageData);
  return (
    <div className="mt-10 font-os p-6 bg-white w-full">
      <h1 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529] text-end mb-4">
        عمر مواليد 1425 هجري
      </h1>
      <div className="text-black flex flex-col gap-8 p-2" dir="rtl">
        <p>
          العمر الحالي للأشخاص المولودين في عام هجري{" "}
          <span className="text-[#0370A3]">1425</span> أو قبل تاريخ
          <span className="text-[#0370A3]" dir="ltr">
            {" "}
            1446-05-17{" "}
          </span>{" "}
          هو <span className="text-[#0370A3]"> 21 سنة</span>.
        </p>
        <p>
          العمر الحالي للأشخاص المولودين في عام هجري{" "}
          <span className="text-[#0370A3]">1425</span> أو بعد تاريخ
          <span className="text-[#0370A3]" dir="ltr">
            {" "}
            1446-05-17 {" "}
          </span>{" "}
          هو <span className="text-[#0370A3]"> 21 سنة</span>.
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
                content("الهجري");
              }}
              className={`px-4 py-2 rounded ${
                activeTab === "hijri"
                  ? "border-[#0370A3] border-2"
                  : "bg-gray-200"
              }`}
            >
              حساب العمر بالهجري
            </button>
            <button
              onClick={() => {
                setActiveTab("gregorian");
                content("الميلادي");
              }}
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
          <div
            dir="rtl"
            className="flex md:flex-row flex-col  gap-4 z-10 justify-between items-center bg-gray-100 p-8 rounded-lg border-[#0370A3] border-t-2"
          >
            {/* Day */}
            <div className="flex flex-col mt-2 md:flex-row gap-2 items-center">
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
            <div className="flex flex-col mt-2 md:flex-row gap-2 items-center">
              <label className="text-gray-600 mb-2">الشهر</label>
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
              <label className="text-gray-600 mb-2">السنة</label>
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
              احسب العمر
            </button>
          </div>
          {/* Results */}
          {ageData && (
            <div className="mt-10">
              <h1 className="text-2xl bg-gray-100 p-4 border-r-2 border-[#0370A3] font-bold text-black text-end mb-4">
                النتائج بالتاريخ الميلادي
              </h1>
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
            </div>
          )}
          {ageData && (
            <div className="mt-10">
              <h1 className="text-2xl bg-gray-100 p-4 border-r-2 border-[#0370A3] font-bold text-black text-end mb-4">
                النتائج بالتاريخ الهجري
              </h1>
              <div className="mt-8  p-6 w-full flex justify-center items-center  rounded-lg">
                <table className=" bg-white w-full" dir="rtl">
                  <tbody className="">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        عمرك الحالي:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {Math.floor((ageData.ageDays + 11) / 354.36)} سنة
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        عمرك بالشهور:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {Math.floor(((ageData.ageDays + 11) / 354.36) * 12)} شهر
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
                        الأيام المتبقية لعيد ميلادك القادم:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.daysToNextBirthday} يوم
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {ageData && (
            <div className="mt-10">
              <h1 className="text-2xl bg-gray-100 p-4 border-r-2 border-[#0370A3] font-bold text-black text-end mb-4">
                معلومات اكثر عن حياتك
              </h1>
              <div className="mt-8  p-6 w-full flex justify-center items-center  rounded-lg">
                <table className=" bg-white w-full" dir="rtl">
                  <tbody className="">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        اليوم الذي وُلدت فيه:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.dayYouWereBorn}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        الفصل الذي وُلدت فيه:
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
              <h1 className="text-2xl bg-gray-100 p-4 border-r-2 border-[#0370A3] font-bold text-black text-end mb-4">
                حقائق أكثر عن حياتك
              </h1>
              <div className="mt-8  p-6 w-full flex justify-center items-center  rounded-lg">
                <table className=" bg-white w-full" dir="rtl">
                  <tbody className="">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        شربت
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.water} كوب ماء
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        نمت:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.sleep} ساعه
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        ضحكت:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.laugh} مره
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        تحدثت:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.talk} كلمه
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        مشيت:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.walk} خطوه
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        تنفست:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.breath} نفس
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        نبض قلبك:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.heart} نبضه
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm font-medium text-gray-900">
                        اكلت:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap w-1/2 border-gray-200 border-2 text-sm text-gray-500">
                        {ageData.eat} وجبه
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
