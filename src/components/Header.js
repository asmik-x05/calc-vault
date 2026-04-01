import config from "@/config/config";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";


const Header = () => {
  return (
    <header className="bg-gray-300 dark:bg-gray-800 py-4 px-6 sticky top-0 z-50 w-full">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium text-gray-900 dark:text-gray-200">
          {config.appName}
        </h1>
        <div className="flex gap-2 items-center text-xl">
          <ThemeSwitch />
          <Link href={config.githubUrl} target="_blank" className="ml-4 text-gray-900 dark:text-gray-200">
          <FaGithub />
          </Link>
          <Link href={config.portfolioUrl} target="_blank" className="ml-4 text-gray-900 dark:text-gray-200">
            <FaGlobe />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
