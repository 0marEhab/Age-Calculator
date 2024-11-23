import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import ContactAbout from "./ContactAbout";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
export default function ContactUs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className=" bg-[#F0F2F5]  ">
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className=" font-os font-normal justify-center mx-auto w-[400px]   md:w-[1220px] mt-10  text-white">
        <ContactAbout title={"من نحن"} about={""} />
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>
            موقع{" "}
            <Link to={"/"} className="text-[#0370A3]">
              "حاسبة العمر"
            </Link>{" "}
            هو منصة إلكترونية تقدم أداة لحساب العمر عبر الإنترنت بكل دقة وسهولة.
            باستخدام الموقع، يمكنك معرفة عمرك بالميلادي أو الهجري، عن طريق
            اختيار التقويم الذي تفضله، سواء كان الميلادي أو الهجري، ثم إدخال
            تاريخ ولادتك (اليوم، الشهر، السنة) والضغط على زر "احسب العمر" للحصول
            على نتيجة دقيقة.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>
            يقدم الموقع معلومات مفصلة حول عمرك، مثل عدد السنوات، الأشهر، الأيام،
            والأسابيع، بالإضافة إلى معرفة يوم ميلادك القادم، الوقت المتبقي على
            عيد ميلادك، والفصل الذي وُلدت فيه. كما يمكن للمستخدمين الاطلاع على
            حقائق ممتعة وتقديرية حول حياتهم اليومية، مثل عدد الأكواب التي شربوها
            أو الخطوات التي مشوها.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>
            تم تصميم أداة "حاسبة العمر" لتواكب أحدث التطورات البرمجية والتقنية
            في مجال الحاسبات الإلكترونية، حيث تتيح للمستخدمين الحصول على نتائج
            دقيقة وسريعة. ونحن نعمل بشكل مستمر على تحديث وتطوير الأداة لضمان
            تقديم أفضل تجربة للمستخدمين، مع مراعاة دقة الحسابات وسهولة
            الاستخدام.
          </p>
        </div>
        <div
          className="bg-white p-10 mt-10 rounded-lg flex flex-col gap-4 text-black font-os"
          dir="rtl"
        >
          <p>
            هدفنا هو تقديم خدمة موثوقة وممتعة تساعدك في اكتشاف المزيد عن عمرك
            وحياتك بطريقة بسيطة ودقيقة، ونحن نحرص دائمًا على تحسين تجربتك على
            موقعنا.
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
