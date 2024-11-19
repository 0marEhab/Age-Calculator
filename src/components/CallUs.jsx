import { useState } from "react";
import About from "./About";
import AgeBanner from "./AgeBanner";

import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";

import { ToastContainer, toast } from "react-toastify";
import ContactAbout from "./ContactAbout";
import SideBar from "./SideBar";
export default function CallUs() {
  const [content, setContent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const toggle = (t) => {
    setContent(t);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout
          title={"تواصل معنا"}
          about={
            "موقع ميلاد لحساب العمر بالميلادي والهجري. احسب عمرك الآن للحصول على معلومات دقيقة وتحليل شخصي بالذكاء الاصطناعي."
          }
        />
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>يمكنك التواصل معنا عبر البريد الالكتروني التالي :</p>
          <p>meladdotme@gmail.com</p>
        </div>

        <Info />
        <AgeBanner />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
