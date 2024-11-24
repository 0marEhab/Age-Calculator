import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaBabyCarriage } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className="mt-10 bg-gray-100 font-os flex flex-col items-end justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3] text-[#212529]  mb-4">
          Age Calculator
        </h1>

        <div className="flex items-center gap-5 mb-4 justify-end">
          <p className="text-gray-700 ">
            The{" "}
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Link to={"/en"} className="text-[#0370A3]">
                Age Calculator{" "}
              </Link>
            </button>{" "}
            provides accurate age calculations based on either the Gregorian or
            Hijri calendar. It offers precise details such as your age in years,
            months, days, and weeks. Additionally, you can find out your
            upcoming birthday and the number of days left until it. The
            calculator provides details like the day of the week you were born
            and the season of your birth.
            <br />
            <br />
            Moreover, it offers fascinating insights about your life, such as
            estimated numbers of cups of water you've consumed or steps you've
            taken. These approximate statistics are based on average daily
            habits, adding a fun and practical dimension to your experience.
          </p>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3] text-[#212529]  mb-4">
            Age Calculation
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700 ">
              Using the Age Calculator, you can accurately determine your age in
              both the Gregorian and Hijri calendars. It calculates the time
              difference between your birthdate (based on either calendar) and
              the current date.
              <br />
              <br />
              The Age Calculator also offers additional details, such as your
              birthday expressed both numerically and verbally, the time left
              until your next birthday, and the season associated with your date
              of birth.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3] text-[#212529]  mb-4">
            Calculating Age Using the Gregorian Calendar
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700 ">
              The{" "}
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Link to={"/en"} className="text-[#0370A3]">
                  {" "}
                  Gregorian age calculator{" "}
                </Link>
              </button>
              feature helps you easily determine your age using the Gregorian
              calendar, which consists of 365 days in a year and 366 days in a
              leap year. The process calculates the age by determining the
              differences in years, months, and days, providing an accurate
              result.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3] text-[#212529]  mb-4">
            Calculating Age Using the Hijri Calendar
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700 ">
              When{" "}
              <Link to={"/en"} className="text-[#0370A3]">
                {" "}
                calculating age in the Hijri{" "}
              </Link>
              calendar, the lunar year of 355 days is used instead of the solar
              year. As a result, an individual’s Hijri age is often slightly
              greater than their Gregorian age. Over time, the difference
              between the two calendars grows, reaching approximately one year
              every 35 years. To determine Hijri age accurately, knowing the
              birthdate in the Gregorian calendar is essential.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3] text-[#212529]  mb-4">
            How to Use the Age Calculator
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700">
              The Age Calculator is a quick and user-friendly tool for
              determining your age accurately using either the Gregorian or
              Hijri calendar. Follow these steps to get your result:
              <ol className="p-5 flex flex-col gap-5">
                <li>
                  1. <strong>Select the calendar type</strong>: Choose the
                  calendar you wish to use (Gregorian or Hijri).
                </li>
                <li>
                  2. <strong>Enter Your Date of Birth</strong>: Input the day,
                  month, and year in the respective fields.
                </li>
                <li>
                  3.{" "}
                  <strong>
                    Click "Calculate Age": Press the button to process your
                    input.
                  </strong>
                </li>
                <li>
                  4. <strong>Wait for the result</strong>: The result will
                  display your age in both the Gregorian and Hijri calendars,
                  along with additional details such as your day of birth and
                  the time remaining until your next birthday. The tool also
                  provides fun, estimated facts about your life, like the number
                  of cups of water you’ve likely consumed or steps you’ve
                  taken—adding an engaging and informative touch.
                </li>
              </ol>
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3] text-[#212529]  mb-4">
            Converting Age Between Gregorian and Hijri Calendars
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700 ">
              Sometimes, people need to convert their age between the Gregorian
              and Hijri calendars for personal or legal purposes. With the Age
              Calculator, you can easily{" "}
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Link to={"/en"} className="text-[#0370A3]">
                  convert your age
                </Link>
              </button>{" "}
              from Gregorian to Hijri or vice versa.
              <br />
              <br />
              This feature is especially useful for residents of countries that
              primarily use the Hijri calendar or for those who want to
              understand the age difference between the two calendars.
              Additionally, the calculator can simultaneously calculate your age
              in both calendars for maximum accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
