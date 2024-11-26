import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import ContactAbout from "./ContactAbout";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
export default function AboutUsEn() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout title={"About us"} about={""} />
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>
            The{" "}
            <Link to={"/en"} className="text-[#0370A3]">
              Age Calculator
            </Link>{" "}
            website is an online platform that provides a tool for accurately
            and easily calculating your age. Using the site, you can determine
            your age in either the Gregorian or Hijri calendar. Simply select
            your preferred calendar, whether Gregorian or Hijri, enter your date
            of birth (day, month, year), and click the "Calculate Age" button to
            get an accurate result.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>
            The website provides detailed information about your age, such as
            the number of years, months, days, and weeks. It also informs you
            about your next birthday, the time remaining until your birthday,
            and the season in which you were born. Additionally, users can
            explore fun and estimated facts about their daily lives, such as the
            number of cups of water they've consumed or the steps they've walked
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>
            The "Age Calculator" tool is designed to align with the latest
            software and technological advancements in electronic calculators,
            providing users with accurate and fast results. We are continuously
            working on updating and improving the tool to ensure the best user
            experience, with a focus on precision in calculations and ease of
            use.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>
            Our goal is to provide a reliable and enjoyable service that helps
            you discover more about your age and life in a simple and accurate
            way. We are always committed to enhancing your experience on our
            website.
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
