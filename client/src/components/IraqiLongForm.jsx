import React, { useState } from "react";
import uploadIcon from "../assest/imgs/upload-icon.svg";
import BottomArrow from "./BottomArrow";
import { Link, useLocation } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import axios from "axios";
// const blobToDataURL = (blob) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       resolve(event.target.result);
//     };
//     reader.onerror = (error) => {
//       reject(error);
//     };
//     reader.readAsDataURL(blob);
//   });
// };
const IraqiLongForm = () => {
  // states for img input
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);

  const [fileName1, setFileName1] = useState("اسحب او ارفق هنا");
  const [fileName2, setFileName2] = useState("اسحب او ارفق هنا");
  const [fileName3, setFileName3] = useState("اسحب او ارفق هنا");
  const [fileName4, setFileName4] = useState("اسحب او ارفق هنا");

  const currentUriLocation = useLocation().pathname.slice(1);

  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [grandFatherName, setGrandFatherName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [nationalIdIssueDate, setNationalIdIssueDate] = useState("");
  const [nationalIdIssuePlace, setNationalIdIssuePlace] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [motherFullName, setMotherFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [occupation, setOccupation] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [region, setRegion] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [alley, setAlley] = useState("");
  const [house, setHouse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("img1", img1);
      formData.append("img2", img2);
      formData.append("img3", img3);
      formData.append("img4", img4);
      formData.append("img1Name", fileName1);
      formData.append("img2Name", fileName2);
      formData.append("img3Name", fileName3);
      formData.append("img4Name", fileName4);

      formData.append("firstName", firstName);
      formData.append("fatherName", fatherName);
      formData.append("grandfatherName", grandFatherName);
      formData.append("lastName", lastName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("nationalId", nationalId);
      formData.append("nationalIdIssueDate", nationalIdIssueDate);
      formData.append("nationalIdIssuePlace", nationalIdIssuePlace);
      formData.append("placeOfBirth", placeOfBirth);
      formData.append("motherFullName", motherFullName);
      formData.append("birthDate", birthDate);
      formData.append("monthlyIncome", monthlyIncome);
      formData.append("occupation", occupation);
      formData.append("governorate", governorate);
      formData.append("region", region);
      formData.append("neighborhood", neighborhood);
      formData.append("alley", alley);
      formData.append("house", house);

      // Add your other form data to formData
      for (const key in formData) {
        if (formData[key]) {
          formData.append(key, formData[key]);
        }
      }
      // Send a POST request to your Node.js server
      console.log(formData);
      await axios.post("http://localhost:5000/api/sendIqEmail", formData);
      console.log("good here in iqemail");
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log("error here in iqemail");
    }
  };
  return (
    <div className="lg:w-1/2 md:w-3/5 mx-auto lg:mx-auto">
      <BottomArrow />
      <h1 className="text-blue-600 font-bold text-2xl text-center ">
        التقدم بطلب بطاقة اموال / النموذج الكامل
      </h1>
      <div className="flex gap-5  justify-between mt-16 mb-6">
        <Link
          to="/noniqlongform"
          className={`px-6 py-2 flex-grow text-center  outline outline-blue-600 rounded-xl outline-2 text-blue-600 ${
            currentUriLocation === "noniqlongform" && "bg-blue-600 text-white "
          }`}
        >
          التقديم لغير العراقيين
        </Link>
        <Link
          to="/iqlongform"
          className={`px-6 py-2 flex-grow text-center outline outline-blue-600 rounded-xl outline-2 text-blue-600 ${
            currentUriLocation === "iqlongform" && "bg-blue-600 text-white "
          }`}
        >
          التقديم للعراقيين
        </Link>
      </div>
      <form
        className="flex flex-col flex-grow-1 "
        dir="rtl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="الاسم الاول :"
          onChange={(e) => setFirstName(e.target.value)}
          required
          name="firstName"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="اسم الاب :"
          onChange={(e) => setFatherName(e.target.value)}
          required
          name="fatherName"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="اسم الجد :"
          onChange={(e) => setGrandFatherName(e.target.value)}
          required
          name="grandFatherName"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder=" اللقب :"
          onChange={(e) => setLastName(e.target.value)}
          required
          name="lastName"
        />
        <input
          type="number"
          placeholder="رقم الهاتف  :"
          pattern="[0-9]"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          name="phoneNumber"
        />
        <input
          type="email"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="البريد الالكتروني :"
          onChange={(e) => setEmail(e.target.value)}
          required
          name="email"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="رقم البطاقة الوطنية : "
          onChange={(e) => setNationalId(e.target.value)}
          required
          name="nationalId"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="تاريخ إصدار البطاقة الوطنية : "
          onChange={(e) => setNationalIdIssueDate(e.target.value)}
          required
          name="nationalIdIssueDate"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="جهة إصدار البطاقة الوطنية :"
          onChange={(e) => setNationalIdIssuePlace(e.target.value)}
          required
          name="nationalIdIssuePlace"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="محل الولادة :"
          onChange={(e) => setPlaceOfBirth(e.target.value)}
          required
          name="placeOfBirth"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="إسم الأم الثلاثي :"
          onChange={(e) => setMotherFullName(e.target.value)}
          required
          name="motherFullName"
        />
        <div className="flex flex-col ">
          <label htmlFor="birthday" className="text-gray-500">
            تاريخ الميلاد :
          </label>
          <input
            type="date"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            id="birthday"
            onChange={(e) => setBirthDate(e.target.value)}
            required
            name="birthDate"
          />
        </div>
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="الدخل الشهري :"
          onChange={(e) => setMonthlyIncome(e.target.value)}
          required
          name="monthlyIncome"
        />
        <input
          type="text"
          className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
          placeholder="المهنة : "
          onChange={(e) => setOccupation(e.target.value)}
          required
          name="occupation"
        />
        <div className="flex flex-col">
          <label htmlFor="city" className="text-gray-500">
            عنوان السكن :
          </label>
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            placeholder="المحافظة : "
            onChange={(e) => setGovernorate(e.target.value)}
            id="city"
            required
            name="governorate"
          />
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5"
            onChange={(e) => setRegion(e.target.value)}
            placeholder="المنطقة : "
            required
            name="region"
          />
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 w-1/2 placeholder:text-neutral-400 rounded-xl my-5"
            onChange={(e) => setNeighborhood(e.target.value)}
            placeholder="محلة : "
            required
            name="neighborhood"
          />
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 w-1/2 placeholder:text-neutral-400 rounded-xl my-5"
            onChange={(e) => setAlley(e.target.value)}
            placeholder="زقاق: "
            required
            name="alley"
          />
          <input
            type="text"
            className="bg-neutral-100 py-2 px-8 w-1/2 placeholder:text-neutral-400 rounded-xl my-5"
            onChange={(e) => setHouse(e.target.value)}
            placeholder="دار:"
            required
            name="house"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg  my-10">الوثائق الرسمية </h1>
          <div>
            <h2 className="text-gray-500 text-xl">
              الصورة الامامية للبطاقة الموحدة :
            </h2>
            <div
              className="h-[250px] overflow-hidden bg-gray-200  w-full border border-dashed cursor-pointer border-gray-400 my-5 border-2 rounded-2xl flex justify-center items-center"
              onClick={() => {
                document.querySelector(".img-input1").click();
              }}
            >
              <input
                type="file"
                accept="image/*"
                name="img1"
                className="file-uploader h-100 w-100 img-input1"
                hidden
                onChange={({ target: { files } }) => {
                  if (files.length > 0) {
                    setFileName1(files[0].name);
                    setImg1(URL.createObjectURL(files[0]));
                  }
                }}
              />
              <div className="flex flex-col gap-5 ">
                <img src={img1 ? img1 : uploadIcon} alt="" />
                {!img1 ? (
                  <p className="text-2xl text-gray-500 ">ارفق الصورة هنا </p>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-gray-500 text-xl">
              الصورة الخلفية للبطاقة الموحدة :
            </h2>
            <div
              className="h-[250px] overflow-hidden bg-gray-200  w-full border border-dashed cursor-pointer border-gray-400 my-5 border-2 rounded-2xl flex justify-center items-center"
              onClick={() => {
                document.querySelector(".img-input2").click();
              }}
            >
              <input
                type="file"
                accept="image/*"
                name="img2"
                className="file-uploader h-100 w-100 img-input2"
                hidden
                onChange={({ target: { files } }) => {
                  if (files.length > 0) {
                    setFileName2(files[0].name);
                    setImg2(URL.createObjectURL(files[0]));
                  }
                }}
              />
              <div className="flex flex-col gap-5 ">
                <img src={img2 ? img2 : uploadIcon} alt="" />
                {!img2 ? (
                  <p className="text-2xl text-gray-500 ">ارفق الصورة هنا </p>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-gray-500 text-xl">
              الصورة الامامية لإثبات السكن ( بطاقة السكن ):
            </h2>
            <div
              className="h-[250px] overflow-hidden bg-gray-200  w-full border border-dashed cursor-pointer border-gray-400 my-5 border-2 rounded-2xl flex justify-center items-center"
              onClick={() => {
                document.querySelector(".img-input3").click();
              }}
            >
              <input
                type="file"
                accept="image/*"
                name="img3"
                className="file-uploader h-100 w-100 img-input3"
                hidden
                onChange={({ target: { files } }) => {
                  if (files.length > 0) {
                    setFileName3(files[0].name);
                    setImg3(URL.createObjectURL(files[0]));
                  }
                }}
              />
              <div className="flex flex-col gap-5 ">
                <img src={img3 ? img3 : uploadIcon} alt="" />
                {!img3 ? (
                  <p className="text-2xl text-gray-500 ">ارفق الصورة هنا </p>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-gray-500 text-xl">
              الصورة الخلفية لإثبات السكن ( بطاقة السكن ):
            </h2>
            <div
              className="h-[250px] overflow-hidden bg-gray-200  w-full border border-dashed cursor-pointer border-gray-400 my-5 border-2 rounded-2xl flex justify-center items-center"
              onClick={() => {
                document.querySelector(".img-input4").click();
              }}
            >
              <input
                type="file"
                accept="image/*"
                name="img4"
                className="file-uploader h-100 w-100 img-input4"
                hidden
                onChange={({ target: { files } }) => {
                  if (files.length > 0) {
                    setFileName4(files[0].name);
                    setImg4(URL.createObjectURL(files[0]));
                  }
                }}
              />
              <div className="flex flex-col gap-5 ">
                <img src={img4 ? img4 : uploadIcon} alt="" />
                {!img4 ? (
                  <p className="text-2xl text-gray-500 ">ارفق الصورة هنا </p>
                ) : null}
              </div>
            </div>
          </div>
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
