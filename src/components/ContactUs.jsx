import { useState } from "react";
import About from "./About";
import AgeBanner from "./AgeBanner";
import Calculator from "./Calculator";
import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";
import SocialMedia from "./SocialMedia";
import { ToastContainer, toast } from "react-toastify";
import ContactAbout from "./ContactAbout";
import SideBar from "./SideBar";
export default function ContactUs() {
  const [content, setContent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const toggle = (t) => {
    setContent(t);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout
          title={"من نحن"}
          about={
            " موقع ميلاد لحساب العمر بالميلادي والهجري. احسب عمرك الآن للحصول على معلومات دقيقة وتحليل شخصي بالذكاء الاصطناعي."
          }
        />
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>
            ميلاد هو موقع إلكتروني متخصص في حساب العمر بدقة باستخدام كل من
            التاريخ الميلادي والتاريخ الهجري. مع واجهة سهلة الاستخدام وتصميم
            بسيط، يتيح موقع ميلاد للمستخدمين إمكانية حساب العمر بالميلادي
            والهجري في خطوات سريعة وسهلة، مما يوفر نتائج دقيقة وفورية. باستخدام
            تقنيات متقدمة مثل الذكاء الاصطناعي، يقدم الموقع أيضًا تحليلات شخصية
            بناءً على البيانات المدخلة، مما يوفر نظرة عميقة على الشخصية والعمر
            بطريقة مبتكرة.
          </p>
          <p>
            يعمل موقع ميلاد على تسهيل عملية حساب العمر من خلال توفير أدوات
            متعددة مثل حاسبة العمر وحاسبات العمر المصممة لتلبية احتياجات
            المستخدمين المختلفة. سواء كنت ترغب في حساب العمر بالهجري أو حساب
            العمر بالميلادي، يمكنك الاعتماد على ميلاد للحصول على النتائج
            المطلوبة بدقة وكفاءة. يمكنك ببساطة إدخال تاريخ ميلادك والموقع سيتولى
            مهمة "احسب عمرك" بسهولة ويسر.
          </p>
          <p>
            ميلاد ليس مجرد حاسبة العمر التقليدية، بل يقدم خدمات متقدمة تعتمد على
            الذكاء الاصطناعي لمساعدتك على فهم شخصيتك بشكل أفضل بناءً على تاريخ
            ميلادك. مع الاعتماد على أحدث تقنيات البرمجة والتحليل، يعد موقع ميلاد
            الوجهة المثالية لكل من يبحث عن حساب العمر وتحليل الشخصية بطريقة
            عصرية ودقيقة.
          </p>
        </div>

        <Info />
        <AgeBanner />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
