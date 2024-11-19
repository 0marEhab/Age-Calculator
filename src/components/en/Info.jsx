import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaBabyCarriage } from "react-icons/fa";
export default function Info() {
  return (
    <div className=" mt-10 bg-gray-100 font-os flex items-end justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
          age calculator
        </h1>
        <p className=" bg-blue-200 text-blue-900  rounded-md border-2 p-4  border-[#0370A3]  mb-4">
          We promise to provide you with new and exciting information about your
          birth date that you didn't know before.{" "}
        </p>
        <div className="flex items-center gap-5 mb-4 justify-end">
          <SlCalender size={60} className="text-[#0370A3]" />
          <p className="text-gray-700 ">
            We help you discover new information about your age and birth date,
            calculate your age accurately in both the Hijri and Gregorian
            calendars, and provide the remaining time until your next birthday
            in days and hours.
          </p>
        </div>
        <div className="flex items-center gap-5 mb-4 justify-end">
          <FaBabyCarriage size={60} className="text-[#0370A3]  " />
          <p className="text-gray-700  mb-4">
            Discover famous personalities born on your birthday and significant
            events that occurred on this day. Get a personality analysis powered
            by AI and learn about notable figures and historical events that
            share your birthday.
          </p>
        </div>
      </div>
    </div>
  );
}
