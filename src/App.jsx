import About from "./components/About";
import AgeBanner from "./components/AgeBanner";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import SocialMedia from "./components/SocialMedia";
import { ToastContainer, toast } from "react-toastify";
export default function App() {
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header />
      <div className=" justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <About />
        <Calculator />
        <SocialMedia />
        <Info />
        <AgeBanner />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
