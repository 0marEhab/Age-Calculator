import { useState } from "react";
import About from "./AboutEn";
import AgeBanner from "../AgeBanner";
import Calculator from "./CalculatorEn";
import Footer from "../Footer";
import Header from "../Header";
import Info from "../Info";
import SocialMedia from "../SocialMedia";
import { ToastContainer, toast } from "react-toastify";
export default function HijriEn() {
  const [content, setContent] = useState("hijri");
  const toggle = (t) => {
    setContent(t);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header content={"hijri"} />
      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <About content={"hijri"} />
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
