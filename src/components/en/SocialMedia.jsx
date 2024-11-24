import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SocialMedia() {
  return (
    <div className="flex font-os mt-10 text-[#212529] gap-5 flex-col justify-center  items-center bg-white p-6">
      <p className=" ">share the website on Social Media</p>
      <div className="flex gap-5  justify-center">
        <Link className=" px-3 py-3  rounded-md bg-[#F0F2F5] ">
          <RiWhatsappFill size={30} className="text-green-500" />
        </Link>

        <Link className=" px-3 py-3  rounded-md bg-[#F0F2F5] ">
          <FaLinkedinIn size={30} className=" text-blue-600" />
        </Link>
        <Link className=" px-3 py-3  rounded-md bg-[#F0F2F5] ">
          <FaSquareXTwitter size={30} className=" text-gray-900" />
        </Link>
        <Link className=" px-3 py-3  rounded-md bg-[#F0F2F5] ">
          <FaFacebookF size={30} className=" text-blue-700" />
        </Link>
      </div>
    </div>
  );
}
