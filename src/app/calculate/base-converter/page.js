"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const getNumbers = (setResult) => {
  const numInput = document.getElementById("num");
  const fromBaseSelect = document.getElementById("fromBase");
  const toBaseSelect = document.getElementById("toBase");

  const number = numInput.value.trim();
  const fromBase = parseInt(fromBaseSelect.value);
  const toBase = parseInt(toBaseSelect.value);

  if (fromBase === toBase) {
    toast.error("Please select different bases for conversion.");

    return;
  }
  if (fromBase == 2 && !/^[01]+$/.test(number)) {
    toast.error("Invalid binary number.");
    return;
  }
  if (fromBase == 8 && !/^[0-7]+$/.test(number)) {
    toast.error("Invalid octal number.");
    return;
  }
  if (fromBase == 10 && !/^\d+$/.test(number)) {
    toast.error("Invalid decimal number.");
    return;
  }
  if (fromBase == 16 && !/^[0-9a-fA-F]+$/.test(number)) {
    toast.error("Invalid hexadecimal number.");
    return;
  }
  convertBase(number, fromBase, toBase, setResult);
};

const convertBase = (number, fromBase, toBase, setResult) => {
  if (!number) {
    toast.error("Please enter a number to convert.");
    return;
  }

  const decimalNumber = parseInt(number, fromBase);

  if (isNaN(decimalNumber)) {
    toast.error("Invalid number for the selected base.");
    return;
  }

  const converted = decimalNumber.toString(toBase).toUpperCase();
  setResult(converted);
};

const page = () => {
  const [result, setResult] = useState("");
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-2">
          <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">
            Base Converter
          </h1>
          <p className="text-gray-700 mb-4 text-center dark:text-gray-300">
            Convert numbers between different bases <br />
            (binary, octal, decimal, hexadecimal).
          </p>
          <div className="flex gap-4 mb-4 justify-center font-medium">
            <div>
              <label
                htmlFor="base"
                className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
              >
                From :
              </label>
              <select
                id="fromBase"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="2">Binary</option>
                <option value="8">Octal</option>
                <option value="10">Decimal</option>
                <option value="16">Hexadecimal</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="toBase"
                className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
              >
                To:
              </label>
              <select
                id="toBase"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="2">Binary</option>
                <option value="8">Octal</option>
                <option value="10">Decimal</option>
                <option value="16">Hexadecimal</option>
              </select>
            </div>
          </div>

          <div>
            <input
              placeholder="Enter number"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
              id="num"
              onKeyDown={(e) => e.key === "Enter" && getNumbers(setResult)}
            />
          </div>

          <div className="text-center my-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full active:scale-95 transition-transform duration-150"
              onClick={() => getNumbers(setResult)}
            >
              Convert
            </button>
          </div>

          <div>
            <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">
              {result
                ? `Result: ${result}`
                : "Conversion result will appear here."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
