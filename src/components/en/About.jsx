import React from "react";

export default function About({ content }) {
  return (
    <div className="w-full rounded-lg bg-[#0370A3] p-8">
      <p className=" font-os font-bold text-[38px]  ">
        Calculate age in {content}
      </p>
      <p className=" font-os font-normal text-lg mt-8">
        Age calculator website for calculating age in both the Gregorian and
        Hijri calendars. Calculate your age now to get accurate information and
        AI-powered personality analysis.
      </p>
    </div>
  );
}
