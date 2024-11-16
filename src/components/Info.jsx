import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaBabyCarriage } from "react-icons/fa";
export default function Info() {
  return (
    <div className=" mt-10 bg-gray-100 flex items-end justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl bg-gray-100 p-4 border-r-2 border-[#0370A3] font-bold text-black text-end mb-4">
          ميلاد
        </h1>
        <p className=" bg-blue-200 text-blue-900 font-bold rounded-md border-2 p-4 text-end border-[#0370A3]  mb-4">
          نعدك بتقديم معلومات جديدة ومثيرة عن تاريخ ميلادك لم تكن تعرفها من قبل
        </p>
        <div className="flex items-center gap-5 mb-4 justify-end">
          <p className="text-gray-700 text-end">
            نساعدك في اكتشاف معلومات جديدة عن عمرك وتاريخ ميلادك، حساب العمر
            الهجري والميلادي بدقة عالية والوقت المتبقي لذكرى ميلادك باليوم
            والساعة
          </p>
          <SlCalender size={60} className="text-[#0370A3]" />
        </div>
        <div className="flex items-center gap-5 mb-4 justify-end">
          <p className="text-gray-700 text-end mb-4">
            تعرف على اشهر شخصيات العالم التي ولدت في يوم ميلادك واه‍م الأحداث
            التي وقعت في هذا اليوم، احصل على تحليل للشخصية بالذكاء الاصطناعي
            واشهر الشخصيات المولودة في هذا اليوم والأحداث في مثل ذلك اليوم
          </p>
          <FaBabyCarriage size={60} className="text-[#0370A3]  " />
        </div>
      </div>
    </div>
  );
}
