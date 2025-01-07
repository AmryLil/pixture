"use client"

import { useEffect, useState } from "react";

const Input = (props) => {
  const { title, value, type, onChange, name,disable } = props;


  return (
    <div className="flex flex-col sm:flex-row  sm:w-[65%] sm:ml-80 sm:items-center sm:justify-between sm:gap-10">
      <label className="font-bold mt-5 sm:mt-0 sm:text-lg">{title}</label>
      <input
        disabled={disable}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className="font-semibold text-sm pl-3 sm:px-2 py-1 sm:w-[80%] sm:border-2 w-full dark:text-black"
      />
    </div>
  );
};
export default Input;
