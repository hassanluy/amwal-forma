import React from "react";

const Input = ({ type, placeholder, styles, inputName, pattern }) => {
  return (
    <input
      pattern={pattern || null}
      required
      type={type}
      placeholder={placeholder}
      className={`bg-neutral-100 py-2 px-8 placeholder:text-neutral-400 rounded-xl my-5 ${styles}`}
    />
  );
};

export default Input;
