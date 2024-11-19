import React from "react";

export default function ContactAboutEn({ title, about }) {
  return (
    <div className="w-full rounded-lg bg-[#0370A3] p-8">
      <p className=" font-os font-bold text-[38px]  ">{title}</p>
      <p className=" font-os font-normal text-lg mt-8">{about}</p>
    </div>
  );
}
