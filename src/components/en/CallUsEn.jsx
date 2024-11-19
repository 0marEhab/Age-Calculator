import { useState } from "react";
import About from "./About";
import AgeBanner from "./AgeBanner";

import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";

import { ToastContainer, toast } from "react-toastify";
import ContactAbout from "./ContactAboutEn";
import SideBar from "./SideBar";
export default function CallUsEn() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout
          title={"Contact Us"}
          about={
            "Milad website for calculating age in both the Gregorian and Hijri calendars. Calculate your age now to get accurate information and a personal analysis powered by AI."
          }
        />
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>you can reach us with this email</p>
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
