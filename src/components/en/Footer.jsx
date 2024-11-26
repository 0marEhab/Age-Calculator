import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="flex text-black font-bold p-5 justify-center items-center gap-5">
        <Link to="/en/policy">Privacy Policy</Link>
        <Link to="/en/terms-and-conditions">Terms and Conditions</Link>
        <Link to={"/en/contact-us"}>Contact Us</Link>
        <Link to={"/en/about-us"}>About Us</Link>
      </div>
      <div className="bg-[#0370A3] flex flex-col gap-5 justify-center text-white p-5 items-center">
        <p>
          All rights reserved ©{" "}
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Link to={"/en"} className="font-bold">
              Age Calculator
            </Link>
          </button>{" "}
          2024
        </p>

        <div className="flex gap-5">
          <RiWhatsappFill size={30} />
          <FaLinkedinIn size={30} />
          <FaSquareXTwitter size={30} />
          <FaFacebookF size={30} />
        </div>
      </div>
    </div>
  );
}
