import React from "react";
import ContactAbout from "./ContactAbout";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
export default function TermsEn() {
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
        <ContactAbout title={"Terms and conditions"} />
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <p>
            Welcome to{" "}
            <Link to={"/en"} className="text-[#0370A3]">
              Age Calculator
            </Link>
            . By using this website, you agree to comply with the terms and
            conditions outlined in this agreement. If you do not agree with
            these terms, please refrain from using or accessing the website
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Copyright
          </h2>
          <p>
            All content displayed on our website, including text, images,
            illustrations, designs, software, and tools, is protected by
            intellectual property and trademark laws. You are prohibited from
            copying, distributing, or publishing any of this content except for
            personal, non-commercial use.
          </p>
          <p>
            You do not own any rights to the content displayed on the website,
            and publishing content via the website does not constitute a waiver
            of our rights.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Limited Right to Use
          </h2>
          <p>
            You are permitted to review, download, or print the content on this
            website solely for personal, non-commercial, educational, or
            informational purposes. Republishing or redistributing any part of
            the website’s content without prior written permission is strictly
            prohibited.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Content Modification
          </h2>
          <p>
            We reserve the right to modify or remove any content or information
            on the website at any time without prior notice. This includes
            textual content, images, links, and any other part of the website
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Deletion and Cancellation
          </h2>
          <p>
            We reserve the right to delete or withhold the publication of any
            content that does not comply with this agreement or the website's
            policies. Additionally, we may cancel or suspend user registrations
            if any terms are violated.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Third-Party Services
          </h2>
          <p>
            The website may contain links to third-party commercial websites,
            such as e-commerce platforms. We do not control the content of these
            websites and are not responsible for the products or services they
            provide. Any transactions conducted with these third parties are at
            your own risk.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Links to Other Websites
          </h2>
          <p>
            Our website may include links to other sites, but we are not
            responsible for the content of these external sites or any damages
            that may result from visiting them. If you choose to leave our
            website and browse these linked sites, you do so at your own
            discretion and risk.
          </p>
        </div>
        <div className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os">
          <h2 className="text-2xl bg-gray-100 p-4 border-l-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            Intellectual Property Rights
          </h2>
          <p>
            We retain all rights related to the content displayed on this
            website. You may not copy, distribute, or use any content without
            prior permission. You are allowed to download content for personal
            use only. Modifying or reusing downloaded content for commercial
            purposes requires explicit written consent from us.
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
