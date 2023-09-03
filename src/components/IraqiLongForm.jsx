import React from "react";
import BottomArrow from "./BottomArrow";
import { Link, useLocation } from "react-router-dom";

const IraqiLongForm = () => {
  const currentUriLocation = useLocation().pathname.slice(1);
  return (
    <div className="lg:w-1/2 md:w-3/5 mx-auto lg:mx-auto">
      <BottomArrow />
      <h1 className="text-blue-600 font-bold text-2xl text-center ">
        التقدم بطلب بطاقة اموال/ النموذج الكامل
      </h1>
      <div className="flex justify-between mt-16 mb-6">
        <Link
          to="/noniqlongform"
          className={`px-12 py-2 outline outline-blue-600 rounded-xl outline-2 text-blue-600 ${
            currentUriLocation === "noniqlongform" && "bg-blue-600 text-white "
          }`}
        >
          التقديم لغير العراقيين
        </Link>
        <Link
          to="/iqlongform"
          className={`px-12 py-2 outline outline-blue-600 rounded-xl outline-2 text-blue-600 ${
            currentUriLocation === "iqlongform" && "bg-blue-600 text-white "
          }`}
        >
          التقديم للعراقيين
        </Link>
      </div>
      <form className="flex flex-col flex-grow-1 " dir="rtl">
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8   placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="الاسم الاول :"
          required
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8   placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="اسم الجد :"
          required
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8   placeholder:text-neutral-400 rounded-xl my-5"
          placeholder=" اللقب :"
          required
        />
        <input
          type="number"
          placeholder="رقم الهاتف  :"
          pattern="[0-9]"
          className="bg-neutral-100 py-2 px-8   placeholder:text-neutral-400 rounded-xl my-5"
          required
        />
        <input
          type="email"
          className="bg-neutral-100 py-2 px-8   placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="البريد الالكتروني :"
          required
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="رقم البطاقة الوطنية : "
          required
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="تاريخ إصدار البطاقة الوطنية : "
          required
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="جهة إصدار البطاقة الوطنية :"
          required
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="محل الولادة :"
          required
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="إسم الأم الثلاثي :"
          required
        />
        <div className="flex flex-col ">
          <label htmlFor="birthday" className="text-gray-500">
            تاريخ الميلاد :
          </label>
          <input
            type="date"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            id="birthday"
            required
          />
        </div>
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="الدخل الشهري :"
          required
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="المهنة : "
          required
        />
        <div className="flex flex-col">
          <label htmlFor="city" className="text-gray-500">
            عنوان السكن :
          </label>
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            placeholder="المحافظة : "
            id="city"
            required
          />
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            placeholder="المنطقة : "
            required
          />
        </div>
        <div className="flex shrink gap-5">
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            placeholder="محلة : "
            required
          />
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            placeholder="زقاق: "
            required
          />
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            placeholder="دار:"
            required
          />
        </div>
        <div className="flex flex-col gap-5 	">
          <div className="flex gap-5">
            <input
              type="radio"
              id="html"
              name="fav_language"
              className="  ring-blue-600 "
            />
            <label htmlFor="html" className="text-blue-600">
              الموافقة على الشروط والأحكام الخاصة بمنتج بطاقات الدفع المسبق
              الصادرة عن شركة أموال.
              <br />
              <br />
              أقرّ أنني إطلعت ووافقت على كافّة الشروط والأحكام الخاصة ببطاقات
              الدفع المسبق الصادرة عن شركة أموال والموجودة على موقع الشركة
              الإلكتروني وأية تحديثات أو تعديلات مستقبلية تطراً عليها
              لاحـــــــقاً.
              <br />
              <a
                href="https://amwalps.iq/wp-content/uploads/2023/04/Terms-and-Conditions-Amwal.pdf"
                className="underline"
              >
                اضغط هنا للإطلاع على الشروط والأحكام
              </a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className=" bg-blue-600 px-20 py-2 text-white rounded-xl my-5"
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default IraqiLongForm;
