import { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";


import { ToastContainer, toast } from "react-toastify";
import ContactAbout from "./ContactAbout";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
export default function CallUs() {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
 
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout title={"اتصل بنا:"} />
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>
            نحن في{" "}
            <Link to={"/"} className="text-[#0370A3]">
              "حاسبة العمر"
            </Link>{" "}
            نحرص دائمًا على تقديم أفضل تجربة للمستخدمين. إذا كان لديك أي
            استفسارات أو تحتاج إلى دعم، يمكنك الاتصال بنا بسهولة عبر البريد
            الإلكتروني التالي:
          </p>
          <p>info@agecalculator.app </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529] text-end mb-4">
            يسعدنا التواصل معك للحصول على دعم أو تقديم أي من الخدمات التالية:
          </h1>

          <div className="flex flex-col text-gray-700  gap-5 mb-4 ">
            <p className="text-gray-700 p-10">
              <ul style={{ listStyleType: "disc" }} dir="rtl" >
                <li>
                  الاستفسارات العامة: إذا كان لديك أي أسئلة حول كيفية استخدام
                  الموقع أو حساب العمر
                </li>
                <li>
                  الاقتراحات والشكاوى: نرحب دائمًا بملاحظاتك لتحسين تجربتك على
                  موقعنا
                </li>
                <li>
                  الإعلانات والتعاون: إذا كنت ترغب في الإعلان على الموقع أو
                  التعاون معنا في مساحات إعلانية أو نشر مقالات ترويجية.
                </li>
              </ul>
            <p dir="rtl" className="mt-3">
              {" "}
              نحن هنا لمساعدتك في أي وقت، فلا تتردد في التواصل معنا!
            </p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
