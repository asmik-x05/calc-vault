"use client";
import { toggleTheme } from "@/redux/userPreferences/userPreferenceSlice";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.userPreferences.theme);
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="border-0 rounded-lg  cursor-pointer"
    >
      {theme === "dark" ? <FaSun className='text-gray-200 outline-0 border-0'/> : <FaMoon className="outline-0 border-0" />}
    </button>
  );
};
export default ThemeSwitch;
