"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const hexToRgb = (setResult) => {
  const hexInput = document.getElementById("hex").value.trim();
  let hex = hexInput.replace("#", "");
  if (!/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex)) {
    toast.error("Invalid hex color format");
    return;
  }
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const rgb = `rgb(${r}, ${g}, ${b})`;
  setResult(rgb);
};

const colorConverter = () => {
  const [result, setResult] = useState("");
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-2">
          <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">
            Color Converter
          </h1>
          <p className="text-gray-700 mb-4 text-center dark:text-gray-300">
            Convert hex colors to RGB values.
          </p>

          <div className="flex gap-4 mb-4">
            <input
              placeholder="Enter hex value"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-3/5 bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
              id="hex"
              onKeyDown={(e) => e.key === "Enter" && hexToRgb(setResult)}
            />
            <div
              className="border  border-gray-300 rounded-md py-2 px-4 w-2/5 focus:outline-none dark:border-gray-600"
              style={{ backgroundColor: result }}
            ></div>
          </div>

          <div className="text-center my-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full active:scale-95 transition-transform duration-150"
              onClick={() => hexToRgb(setResult)}
            >
              Convert
            </button>
          </div>

          <div>
            <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">
              {result !== ""
                ? `Result: ${result}`
                : "Enter values and click Convert."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default colorConverter;
