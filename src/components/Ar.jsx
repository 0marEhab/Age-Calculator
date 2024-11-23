import { useState } from "react";
import Header from "./Header";
import About from "./About";
import Calculator from "./Calculator";
import Footer from "./Footer";
import Info from "./Info";
import SocialMedia from "./SocialMedia";
import AgeBanner from "./AgeBanner";
import SideBar from "./SideBar";

export default function Ar() {
  const [content, setContent] = useState("الميلادية");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggle = (t) => {
    setContent(t);
  };

  return (
    <div className="bg-[#F0F2F5]">
      {/* Header */}
      <Header content={content} toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="font-os font-normal justify-center mx-auto w-full md:w-[1220px] mt-10 text-white">
        <About />
        <Calculator />
        <SocialMedia />
        <Info />
        <AgeBanner />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
