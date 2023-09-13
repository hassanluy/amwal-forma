import React, { useState } from "react";
import uploadIcon from "../assest/imgs/upload-icon.svg";
const ImageContainer = ({ label }) => {
  const [img, setimg] = useState(null);
  const [filename, setFilename] = useState("اسحب او ارفق هنا");
  return (
    <div>
      <h2 className="text-gray-500 text-xl">{label}</h2>
      <form
        className="h-[250px] overflow-hidden bg-gray-200  w-full border border-dashed cursor-pointer border-gray-400 my-5 border-2 rounded-2xl flex justify-center items-center"
        onClick={() => {
          document.querySelector(".img-input").click();
        }}
      >
        <img src="" alt="" />
        <input
          type="file"
          accept="image/*"
          name="fileupload"
          className="file-uploader h-100 w-100 img-input"
          hidden
          onChange={({ target: { files } }) => {
            if (files.length > 0) {
              setFilename(files[0].name);
              setimg(URL.createObjectURL(files[0]));
            }
          }}
        />
        <div className="flex flex-col gap-5 ">
          <img src={img ? img : uploadIcon} alt="" />
          {!img ? (
            <p className="text-2xl text-gray-500 ">ارفق الصورة هنا </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default ImageContainer;
