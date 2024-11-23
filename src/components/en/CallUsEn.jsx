import { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";

import { ToastContainer, toast } from "react-toastify";
import ContactAbout from "./ContactAbout";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
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
        <ContactAbout title={"Contact Us:"} />
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>
            At{" "}
            <Link to={"/"} className="text-[#0370A3]">
              Age Calculator
            </Link>
            , we are committed to providing the best experience for our users.
            If you have any inquiries or need support, feel free to contact us
            via the following email:
          </p>
          <p> info@agecalculator.app </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            We are happy to assist you with support or provide any of the
            following services:{" "}
          </h1>

          <div className="flex flex-col text-gray-700  gap-5 mb-4 ">
            <p className="text-gray-700 p-10">
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  General Inquiries: If you have any questions about how to use
                  the website or calculate your age
                </li>
                <li>
                  Suggestions and Complaints: We always welcome your feedback to
                  enhance your experience on our website
                </li>
                <li>
                  Advertising and Collaboration: If you’re interested in
                  advertising on the site or collaborating with us for ad spaces
                  or promotional articles
                </li>
              </ul>
              <p className="mt-3">
                {" "}
                We’re here to help anytime, so don’t hesitate to reach out!{" "}
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
