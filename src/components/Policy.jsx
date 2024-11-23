import React from "react";
import ContactAbout from "./ContactAbout";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
export default function Policy() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout title={"سياسة الخصوصية"} />
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>
            نحن في موقع{" "}
            <Link to={"/"} className="text-[#0370A3]">
              حاسبة العمر
            </Link>{" "}
            نقدر خصوصية زوارنا ونعمل بجد لحماية معلوماتهم الشخصية. تشرح سياسة
            الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات التي نقدمها من خلال
            موقعنا الإلكتروني.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            استخدام ملفات تعريف الارتباط (الكوكيز)
          </h2>
          <p>
            نستخدم ملفات تعريف الارتباط لمساعدتنا في تحسين خدماتنا ولتخصيص
            تجربتك على موقعنا. ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزن
            على جهازك وتساعدنا في تذكر تفضيلاتك واهتماماتك. يمكنك تعطيل ملفات
            تعريف الارتباط من خلال إعدادات متصفحك، ولكن يرجى ملاحظة أن تعطيلها
            قد يؤثر على تجربة استخدامك للموقع.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            الإعلانات من طرف ثالث
          </h2>
          <p>
            موقعنا يستخدم إعلانات Google، التي تعتبر مورِّدًا ماليًا خارجيًا.
            وتستخدم Google ملفات تعريف الارتباط لعرض الإعلانات على موقعنا بناءً
            على اهتمامات الزوار. تستخدم Google تقنية ملف تعريف الارتباط DART
            لعرض الإعلانات وفقًا للزيارات السابقة للمستخدمين على الإنترنت. يمكنك
            تعطيل استخدام ملفات تعريف الارتباط DART عن طريق زيارة سياسة الخصوصية
            لإعلانات Google.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            الاستخدام الآمن للمعلومات
          </h2>
          <p>
            نحن نضمن أن المعلومات التي نجمعها تظل سرية ولن يتم استخدامها إلا
            لأغراض تحسين محتوى الموقع وتخصيص الإعلانات. نحن نعمل جاهدين لضمان أن
            جميع المعلومات المحفوظة محمية بشكل مناسب ولن يتم تسريبها إلى أطراف
            ثالثة غير مخولة.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            ملفات الدخول
          </h2>
          <p>
            موقعنا يستخدم نظام ملفات الدخول مثل معظم المواقع الأخرى. يتضمن ذلك
            جمع عناوين الـIP، نوع المتصفح، مزود خدمة الإنترنت (ISP)،
            التاريخ/الوقت، وعدد النقرات لتحليل الاتجاهات. هذه المعلومات تُستخدم
            فقط لتحسين خدماتنا ولا تهدف إلى التطفل على خصوصية المستخدم.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            تحديثات سياسة الخصوصية
          </h2>
          <p>
            نحتفظ بالحق في تعديل سياسة الخصوصية هذه في أي وقت. أي تغييرات سيتم
            نشرها على هذه الصفحة، ويمكنك العودة إليها بين الحين والآخر لمراجعة
            التحديثات. تاريخ آخر تحديث سيكون في أسفل هذه الصفحة.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            اتصل بنا
          </h2>
          <p>
            إذا كان لديك أي استفسارات حول سياسة الخصوصية هذه أو كنت ترغب في طرح
            أي سؤال، يمكنك الاتصال بنا عبر البريد الإلكتروني التالي:
            info@agecalculator.app
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
