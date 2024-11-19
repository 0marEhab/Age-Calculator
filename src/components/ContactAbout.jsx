import React from "react";

export default function ContactAbout({title,about}) {
  return (
    <div className="w-full rounded-lg bg-[#0370A3] p-8" dir="rtl">
      <p className=" font-os font-bold text-[38px]  ">من نحن</p>
      <p className=" font-os font-normal text-lg mt-8">
        موقع ميلاد لحساب العمر بالميلادي والهجري. احسب عمرك الآن للحصول على
        معلومات دقيقة وتحليل شخصي بالذكاء الاصطناعي.
      </p>
    </div>
  );
}
