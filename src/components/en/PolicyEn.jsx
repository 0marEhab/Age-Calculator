import React from "react";
import ContactAbout from "./ContactAbout";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
export default function PolicyEN() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout title={"privacy policy"} />
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>
            At{" "}
            <Link to={"/"} className="text-[#0370A3]">
              Age Calculator
            </Link>
            , we value the privacy of our visitors and work hard to protect
            their personal information. This privacy policy explains how we
            collect, use, and safeguard the information provided through our
            website.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Use of Cookies
          </h2>
          <p>
            We use cookies to help improve our services and customize your
            experience on our website. Cookies are small text files stored on
            your device that help us remember your preferences and interests.
            You can disable cookies through your browser settings, but please
            note that disabling them may affect your browsing experience on the
            site.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Third-Party Advertising{" "}
          </h2>
          <p>
            Our website uses Google Ads, a third-party financial provider.
            Google uses cookies to display ads on our website based on visitors’
            interests. The DART cookie technology is used by Google to serve ads
            based on users’ previous visits across the internet. You can opt out
            of the DART cookie usage by visiting the Google Ads Privacy Policy
            page.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Secure Use of Information{" "}
          </h2>
          <p>
            We ensure that the information we collect remains confidential and
            is used only to improve website content and customize ads. We work
            diligently to protect all stored data and ensure it is not leaked to
            unauthorized third parties.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Log Files
          </h2>
          <p>
            Our website uses a log file system, like most other websites. This
            includes collecting IP addresses, browser types, internet service
            providers (ISP), date/time stamps, and the number of clicks to
            analyze trends. This information is used solely to improve our
            services and does not aim to infringe on user privacy.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Privacy Policy Updates{" "}
          </h2>
          <p>
            We reserve the right to modify this privacy policy at any time. Any
            changes will be posted on this page, and you may review updates
            periodically. The last updated date will be noted at the bottom of
            this page.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy or wish to ask
            any questions, you can contact us via email at: Email:
            info@agecalculator.app
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
