"use client";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const layout = ({ children }) => {
  return (
    <div className=" bg-gray-500 dark:bg-gray-950 ">
      <Link href={"/"}>
        <button className="dark:text-gray-200 dark:hover:text-gray-300 p-4 cursor-pointer">
          <FaLongArrowAltLeft className="text-2xl" />
        </button>
      </Link>
      <div className="flex justify-center items-center h-[90vh] ">
        {children}
      </div>
    </div>
  );
};

export default layout;
