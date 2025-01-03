import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <div
        dir="rtl"
        className="flex text-black font-bold p-5 justify-center items-center gap-5"
      >
        <Link to="/policy">سياسة الخصوصية</Link>
        <Link to="/terms-and-conditions">اتفاقية الاستخدام</Link>
        <Link to="/about-us">من نحن</Link>
        <Link to="/contact-us"> اتصل بنا</Link>
      </div>
      <div className="bg-[#0370A3] flex flex-col gap-5 justify-center text-white p-5 items-center">
        <p>
          جميع الحقوق محفوظة ©{" "}
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Link className="font-bold">حاسبة العمر</Link>
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
