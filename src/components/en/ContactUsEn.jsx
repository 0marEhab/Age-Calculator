import { useState } from "react";
import About from "./About";
import AgeBanner from "./AgeBanner";
import Calculator from "./Calculator";
import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";
import SideBar from "./SideBar";
import { ToastContainer, toast } from "react-toastify";
import ContactAbout from "./ContactAboutEn";
export default function ContactUsEn() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header  toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout
          title={"Who are we"}
          about={
            "Milad website for calculating age in both the Gregorian and Hijri calendars. Calculate your age now to get accurate information and a personal analysis powered by AI."
          }
        />
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>
            Age Calculator is an online website specialized in accurately
            calculating age using both the Gregorian and Hijri calendars. With
            an easy-to-use interface and simple design, the Milad website allows
            users to calculate their age in both calendars quickly and easily,
            providing accurate and immediate results. Using advanced
            technologies such as artificial intelligence, the website also
            offers personal analyses based on the entered data, providing deep
            insights into personality and age in an innovative way.
          </p>
          <p>
            Age Calculator makes the process of calculating age easier by
            providing various tools like the age calculator designed to meet the
            diverse needs of users. Whether you want to calculate age in the
            Hijri or Gregorian calendar, you can rely on Milad to get accurate
            and efficient results. Simply enter your birth date, and the website
            will handle the "calculate your age" task quickly and easily.
          </p>
          <p>
            Age Calculator is not just a traditional age calculator; it offers
            advanced services based on artificial intelligence to help you
            better understand your personality based on your birth date. By
            relying on the latest programming and analysis technologies, Milad
            is the ideal destination for anyone looking to calculate their age
            and analyze their personality in a modern and accurate way.
          </p>
        </div>

        <Info />
        <AgeBanner />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
