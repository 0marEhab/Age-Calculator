import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function SocialMedia() {
  return (
    <div className="flex mt-10 text-black gap-5 flex-col justify-center  items-center bg-white p-6">
      <p className=" font-bold">شارك الموقع على شبكات التواصل الاجتماعي</p>
      <div className="flex gap-5  justify-center">
        <a href="#" className=" px-3 py-3  rounded-md bg-[#F0F2F5] ">
          <RiWhatsappFill size={30} className="text-green-500" />
        </a>
        <a href="#" className=" px-3 py-3  rounded-md bg-[#F0F2F5] ">
          <FaLinkedinIn size={30} className=" text-blue-600" />
        </a>
        <a href="#" className=" px-3 py-3  rounded-md bg-[#F0F2F5] ">
          <FaTwitter size={30} className=" text-blue-400" />
        </a>
        <a href="#" className=" px-3 py-3  rounded-md bg-[#F0F2F5] ">
          <FaFacebookF size={30} className=" text-blue-700" />
        </a>
      </div>
    </div>
  );
}