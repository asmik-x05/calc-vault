"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const convertLength = (setResult, category) => {
  const numInput = parseFloat(document.getElementById("num").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (fromUnit === toUnit) {
    toast.error("Please select different units for conversion.");
    return;
  }
  if (isNaN(numInput)) {
    toast.error("Please enter a valid number.");
    return;
  }
  if (numInput < 0) {
    toast.error("Please enter a non-negative number.");
    return;
  }

  const lengthFactors = {
    cm: 1,
    m: 100,
    in: 2.54,
    ft: 30.48,
  };
  if (category === "l") {
    const valueInCm = numInput * lengthFactors[fromUnit];
    const convertedValue = valueInCm / lengthFactors[toUnit];
    setResult(`${convertedValue.toFixed(4)} ${toUnit}`);
  } else if (category === "a") {
    const valueInCm2 = numInput * Math.pow(lengthFactors[fromUnit], 2);
    const convertedValue = valueInCm2 / Math.pow(lengthFactors[toUnit], 2);
    setResult(`${convertedValue.toFixed(4)} ${toUnit}`);
  } else if (category === "v") {
    const valueInCm3 = numInput * Math.pow(lengthFactors[fromUnit], 3);
    const convertedValue = valueInCm3 / Math.pow(lengthFactors[toUnit], 3);
    setResult(`${convertedValue.toFixed(4)} ${toUnit}`);
  }
};

const weightConverter = () => {
  const [category, setCategory] = useState("l");
  const [result, setResult] = useState("");

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-2">
          <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">
            Length Converter
          </h1>
          <p className="text-gray-700 mb-4 text-center dark:text-gray-300">
            Convert lengths between different units <br />
            (Centimeters, Meters, Inches, Feet).
          </p>
          <div className="flex items-center ">
            <label
              htmlFor="category"
              className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
            >
              convert:
            </label>
            <select
              id="cat"
              className="border w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="l">length</option>
              <option value="a">Area</option>
              <option value="v">Volume</option>
            </select>
          </div>
          <div className="grid gap-4 mb-4 font-medium">
            <div className="grid grid-cols-2 items-center ">
              <label
                htmlFor="fromUnit"
                className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
              >
                From :
              </label>
              <select
                id="fromUnit"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="cm">
                  {category === "l" ? "cm" : category === "a" ? "cm²" : "cm³"}
                </option>
                <option value="m">
                  {category === "l" ? "m" : category === "a" ? "m²" : "m³"}
                </option>
                <option value="in">
                  {category === "l" ? "in" : category === "a" ? "in²" : "in³"}
                </option>
                <option value="ft">
                  {category === "l" ? "ft" : category === "a" ? "ft²" : "ft³"}
                </option>
              </select>
            </div>

            <div className="grid grid-cols-2 items-center ">
              <label
                htmlFor="toUnit"
                className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
              >
                To:
              </label>
              <select
                id="toUnit"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="cm">
                  {category === "l" ? "cm" : category === "a" ? "cm²" : "cm³"}
                </option>
                <option value="m">
                  {category === "l" ? "m" : category === "a" ? "m²" : "m³"}
                </option>
                <option value="in">
                  {category === "l" ? "in" : category === "a" ? "in²" : "in³"}
                </option>
                <option value="ft">
                  {category === "l" ? "ft" : category === "a" ? "ft²" : "ft³"}
                </option>
              </select>
            </div>
          </div>

          <div>
            <input
              placeholder={`Enter value in ${category === "l" ? "length" : category === "a" ? "area" : "volume"}`}
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
              id="num"
              onKeyDown={(e) =>
                e.key === "Enter" && convertLength(setResult, category)
              }
            />
          </div>

          <div className="text-center my-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full active:scale-95 transition-transform duration-150"
              onClick={() => convertLength(setResult, category)}
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

export default weightConverter;
