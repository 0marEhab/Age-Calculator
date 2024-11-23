import React from "react";
import ContactAbout from "./ContactAbout";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
export default function Terms() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout title={"اتفاقية الاستخدام"} />
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>
            مرحبًا بك في موقع{" "}
            <Link to={"/"} className="text-[#0370A3]">
              حاسبة العمر
            </Link>{" "}
            باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام
            الواردة في هذه الاتفاقية. إذا كنت لا توافق على هذه الشروط، نرجو منك
            عدم استخدام الموقع أو الوصول إليه.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            حقوق النشر
          </h2>
          <p>
            جميع المحتويات المعروضة على موقعنا، بما في ذلك النصوص، الصور، الرسوم
            التوضيحية، التصاميم، البرمجيات، والأدوات، محمية بموجب قوانين حقوق
            الملكية الفكرية والعلامات التجارية. يحظر عليك نسخ أو توزيع أو نشر أي
            من هذه المحتويات إلا في حدود الاستخدام الشخصي غير التجاري.
          </p>
          <p>
            لا تمتلك أي حقوق ملكية لأي محتوى معروض على الموقع، ولا يعتبر نشر
            المحتوى عبر الموقع تنازلًا عن حقوقنا.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            الحق المحدود بالاستخدام
          </h2>
          <p>
            يُسمح لك بمراجعة، تحميل، أو طباعة المحتوى الموجود على الموقع فقط
            للاستخدام الشخصي غير التجاري ولأغراض التعليم والتثقيف. يمنع عليك
            إعادة نشر أو توزيع أي جزء من المحتوى المعروض على الموقع دون الحصول
            على إذن كتابي مسبق
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            التعديل على المحتوى
          </h2>
          <p>
            نحتفظ بحقنا في تعديل أو حذف أي محتوى أو معلومات موجودة على الموقع في
            أي وقت ودون إشعار مسبق. قد تشمل هذه التعديلات نصوص المحتوى، الصور،
            الروابط، وأي جزء آخر من الموقع.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            الحذف والإلغاء
          </h2>
          <p>
            نحتفظ بالحق في حذف أو عدم نشر أي محتوى لا يتوافق مع هذه الاتفاقية أو
            مع سياسة الموقع. كما نحتفظ بحقنا في إلغاء أو تعليق تسجيل المستخدمين
            في الموقع في حال انتهاكهم لأي من هذه الشروط
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            خدمات الأطراف الأخرى
          </h2>
          <p>
            قد يحتوي الموقع على روابط لمواقع تجارية لأطراف ثالثة، مثل مواقع
            التجارة الإلكترونية. نحن لا نتحكم في محتوى هذه المواقع ولا نتحمل أي
            مسؤولية عن المنتجات أو الخدمات المقدمة من خلالها. جميع المعاملات
            التي تتم مع هذه الأطراف تتم على مسؤوليتك الشخصية.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            الروابط إلى مواقع أخرى
          </h2>
          <p>
            قد يحتوي موقعنا على روابط لمواقع أخرى، ولكننا غير مسؤولين عن محتوى
            هذه المواقع أو عن أي أضرار قد تنشأ نتيجة لتصفحها. إذا قررت مغادرة
            موقعنا والانتقال إلى مواقع أخرى، فإنك تتحمل كامل المسؤولية عن ذلك.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            حقوق الملكية الفكرية
          </h2>
          <p>
            نحتفظ بكافة الحقوق المتعلقة بالمحتوى المعروض على الموقع. لا يحق لك
            نسخ أو توزيع أي محتوى دون إذن مسبق من الموقع. يُسمح لك بتحميل
            المحتوى لاستخدامك الشخصي فقط. يجب عليك عدم تعديل المحتوى المحمل أو
            إعادة استخدامه لأي غرض تجاري إلا بموافقة خطية منا.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <h2 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529]  mb-4">
            التغييرات في الاتفاقية
          </h2>
          <p>
            نحتفظ بالحق في تعديل شروط هذه الاتفاقية في أي وقت. ستكون هذه
            التعديلات سارية فور نشرها على الموقع، وعليك متابعة التحديثات
            بانتظام. استمرارك في استخدام الموقع بعد التعديلات يعني موافقتك على
            الشروط المعدلة.
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
            إذا كانت لديك أي أسئلة أو استفسارات حول هذه الاتفاقية أو أي جزء من
            محتوى الموقع، لا تتردد في الاتصال بنا عبر صفحة "اتصل بنا" على
            الموقع.
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
