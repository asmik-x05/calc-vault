import React from "react";

const Card = ({ tittle, description }) => {
  return (
    <div className="rounded-2xl shadow-md min-w-lg">
      <div className="w-full h-60 rounded-t-2xl">this will contain img</div>

      <div className="h-40 rounded-b-2xl space-y-2 px-4">
        <h3>{tittle}</h3>

        <p>{description}</p>
        <div>
          <button className="bg-blue-500 text-gray-100 px-2 py-1 rounded-lg w-full text-xl hover:bg-blue-600 cursor-pointer active:scale-95 transition duration-150 ease-in-out focus:outline-none">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
