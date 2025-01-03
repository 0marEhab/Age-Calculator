import React from "react";

import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className=" mt-10 bg-gray-100 font-os flex flex-col items-end justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529] text-end mb-4">
          حاسبة العمر
        </h1>

        <div className="flex items-center gap-5 mb-4 justify-end">
          <p className="text-gray-700 text-end">
            تتيح لك{" "}
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Link to={"/"} className="text-[#0370A3]">
                حاسبة العمر
              </Link>
            </button>{" "}
            حساب عمرك بدقة باستخدام التقويم الميلادي أو التقويم الهجري، حيث تقدم
            تفاصيل دقيقة مثل عمرك بالسنوات، الأشهر، الأيام، والأسابيع. بالإضافة
            إلى ذلك، يمكنك معرفة تاريخ ميلادك القادم وعدد الأيام المتبقية على
            عيد ميلادك. سيتم حساب العمر بدقة، كما سيتم تزويدك بمعلومات مثل اليوم
            الذي وُلدت فيه والفصل الذي وُلدت فيه. كما يمكنك معرفة حقائق ومعلومات
            إضافية عن حياتك، مثل عدد الأكواب التي شربتها أو عدد الخطوات التي
            مشيتها، وهي تقديرات تقريبية تستند إلى متوسطات الحياة اليومية، مما
            يساعدك في اكتشاف المزيد عن حياتك بطريقة ممتعة وواقعية.
          </p>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529] text-end mb-4">
            حساب العمر
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700 text-end">
              باستخدام حاسبة العمر يتيح لك معرفة عمرك بالتقويمين الهجري
              والميلادي بكل دقة، حيث يتم حساب الفارق الزمني بين تاريخ ميلادك
              المحدد وفق أحد التقويمين وبين التاريخ الحالي. كما توفر لك حاسبة
              العمر أونلاين تفاصيل إضافية مثل يوم ميلادك بالصيغة اللفظية
              والرقمية، والوقت المتبقي على عيد ميلادك، بالإضافة إلى تحديد الفصل
              الذي ولدت فيه على تاريخ ميلادك
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529] text-end mb-4">
            حساب العمر بالميلادي
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700 text-end">
              يتيح لك{" "}
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Link to={"/"} className="text-[#0370A3]">
                  حساب العمر بالميلادي
                </Link>
              </button>{" "}
              تحديد عمرك بسهولة باستخدام التقويم الميلادي، حيث تتكون السنة
              الميلادية من 365 يومًا، وفي السنة الكبيسة يتكون العام من 366
              يومًا. يتم حساب العمر بالميلادي عن طريق حساب الفارق بين السنوات
              أولًا، ثم الأشهر، وأخيرًا الأيام، للحصول على عمرك بالميلادي بدقة
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529] text-end mb-4">
            حساب العمر بالهجري{" "}
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700 text-end">
              عند{" "}
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Link to={"/"} className="text-[#0370A3]">
                  حساب العمر بالهجري
                </Link>
              </button>
              ، يتم الاعتماد على السنة القمرية التي تتكون من 355 يومًا بدلاً من
              السنة الشمسية. هذا يعني أن العمر الهجري يكون عادة أكبر من العمر
              الميلادي للشخص. ومع مرور الوقت، يزداد الفارق بين العمرين ليصل إلى
              سنة كاملة تقريبًا كل 35 سنة. ولحساب العمر الهجري بدقة، من الضروري
              معرفة تاريخ الميلاد بالتقويم الميلادي
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529] text-end mb-4">
            كيفية استخدام حاسبة العمر{" "}
          </h1>

          <div className="flex items-center gap-5 mb-4 " dir="rtl">
            <p className="text-gray-700 ">
              تعتبر حاسبة العمر أداة سهلة وسريعة لحساب عمرك بدقة باستخدام
              التقويم الميلادي أو التقويم الهجري. اتبع الخطوات التالية للحصول
              على النتيجة:
              <ol className="p-5 flex flex-col gap-5">
                <li>
                  1. <strong>اختيار نوع التقويم</strong>: قم باختيار التقويم
                  المناسب لحساب العمر (ميلادي أو هجري)
                </li>
                <li>
                  2.<strong> إدخال تاريخ الميلاد</strong>: أدخل اليوم، الشهر،
                  والسنة في الأماكن المخصصة.
                </li>
                <li>
                  <strong>3. الضغط على زر "حساب العمر"</strong>
                </li>
                <li>
                  4.<strong> الانتظار لعرض النتيجة:</strong> ستظهر النتيجة التي
                  تتضمن العمر بالميلادي و العمر بالهجري، بالإضافة إلى تفاصيل
                  أخرى مثل يوم الميلاد والوقت المتبقي على عيد ميلادك. كما يمكنك
                  الاطلاع على معلومات تقديرية إضافية عن حياتك، مثل عدد الأكواب
                  التي شربتها، وعدد الخطوات التي مشيتها، وغيرها من الحقائق
                  التقديرية التي تضيف لمسة ممتعة ومفيدة
                </li>
              </ol>
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-10 bg-gray-100 p-4 border-r-2 font-os font-semibold border-[#0370A3]  text-[#212529] text-end mb-4">
            تحويل العمر بين الميلادي والهجري
          </h1>

          <div className="flex items-center gap-5 mb-4 justify-end">
            <p className="text-gray-700 text-end">
              أحيانًا يحتاج الأشخاص إلى تحويل العمر بين التقويمين الميلادي
              والهجري لأغراض شخصية أو قانونية. مع حاسبة العمر، يمكنك بسهولة أو
              العكس، مما يسهل معرفة العمر بدقة{" "}
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Link to={"/"} className="text-[#0370A3]">
                  تحويل العمر من ميلادي إلى هجري
                </Link>
              </button>{" "}
              باستخدام أي تقويم تختاره. هذه الميزة مفيدة خاصة للمقيمين في دول
              تعتمد بشكل رئيسي على التقويم الهجري، أو لأولئك الذين يحتاجون معرفة
              فارق العمر بين التقويمين. بالإضافة إلى ذلك، يمكن لحاسبة العمر حساب
              العمر بالهجري والميلادي في وقت واحد لمزيد من الدقة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
