import React from "react";
import BottomArrow from "./BottomArrow";

const ShortCard = () => {
  return (
    <div className="lg:w-1/2 md:w-3/5 mx-auto lg:mx-auto">
      <BottomArrow />
      <h1 className="text-blue-600 font-bold text-2xl text-center ">
        تقدم بطلب بطاقة مختصر
      </h1>
      <form className="flex flex-col flex-grow-1 " dir="rtl">
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8   placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="الاسم الكامل :"
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
          placeholder="العنوان : "
          required
        />
        <div className="flex flex-col gap-5 	">
          <div className="flex gap-5">
            <input
              type="radio"
              id="html"
              name="fav_language"
              className="-translate-y-14 form-radio  ring-blue-600 "
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

export default ShortCard;
