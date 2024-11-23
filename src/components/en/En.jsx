import { useState, useEffect } from "react";
import About from "./About";
import AgeBanner from "./AgeBanner";
import Calculator from "./Calculator";
import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";
import SideBar from "./SideBar";
import SocialMedia from "./SocialMedia";
import { ToastContainer, toast } from "react-toastify";
export default function En() {
  const [content, setContent] = useState("gregorian");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const toggle = (t) => {
    setContent(t);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header content={content} toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" font-os font-normal justify-center mx-auto w-full   md:w-[1220px] mt-10  text-white">
        <About content={content} />
        <Calculator content={toggle} />
        <SocialMedia />
        <Info />
        <AgeBanner />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
