import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div dir="rtl" className="flex text-black font-bold p-5 justify-center items-center gap-5">
        <a href="">الرئيسيه</a>
        <a href="">من نحن</a>
        <a href="">سياسه الخصوصيه</a>
        <a href="">تواصل معنا</a>
      </div>
      <div className="bg-[#0370A3] flex flex-col gap-5 justify-center text-white p-5 items-center">
        <p>جميع الحقوق محفوظة © حاسبة العمر 2024</p>
        <div className="flex gap-5">
          <RiWhatsappFill size={30} />
          <FaLinkedinIn size={30} />
          <FaTwitter size={30} />
          <FaFacebookF size={30} />
        </div>
      </div>
    </div>
  );
}
