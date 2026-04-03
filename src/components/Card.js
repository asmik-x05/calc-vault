import Link from "next/link";
import React from "react";

const Card = ({ title, path, description, thumbnail }) => {
  return (
    <div className="rounded-2xl shadow-md dark:border-gray-700 border-2 border-gray-300">
      <div className="w-full h-60 rounded-t-2xl  bg-gray-400 dark:bg-gray-700 relative flex items-center justify-center">
        <p className="dark:text-gray-300 text-2xl transform rotate-45 font-semibold">
          {title}
        </p>
      </div>

      <div className="h-40 rounded-b-2xl space-y-2 px-4 border-t-2 border-gray-300 ">
        <h3 className="text-xl dark:text-gray-200 font-medium">{title}</h3>

        <p className="dark:text-gray-300">{description}</p>
        <div>
          <Link href={path}>
            <button className="bg-blue-500 text-gray-100 px-2 py-1 rounded-lg w-full text-xl hover:bg-blue-600 cursor-pointer active:scale-95 transition duration-150 ease-in-out focus:outline-none">
              Calculate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
