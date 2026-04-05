"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const getConvertedWeight = (setResult) => {
  const fromUnit = document.getElementById("fromWt").value;
  const toUnit = document.getElementById("toWt").value;
  const weight = parseFloat(document.getElementById("num").value);

  if (fromUnit === toUnit) {
    toast.error("Please select different units for conversion.");
    return;
  }

  if (isNaN(weight)) {
    toast.error("Please enter a valid number.");
    return;
  }
  if (weight < 0) {
    toast.error("Please enter a non-negative weight.");
    return;
  }

  const toGram = {
    g: 1,
    kg: 1000,
    lb: 453.592,
    oz: 28.3495,
  };
  const weightInGrams = weight * toGram[fromUnit];
  const convertedWeight = weightInGrams / toGram[toUnit];
  setResult(`${convertedWeight.toFixed(4)} ${toUnit}`);
};

const weightConverter = () => {
  const [result, setResult] = useState("");
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-2">
          <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">
            Weight Converter
          </h1>
          <p className="text-gray-700 mb-4 text-center dark:text-gray-300">
            Convert weights between different units <br />
            (Grams, Kilograms, Pounds, Ounces).
          </p>

          <div className="grid gap-4 mb-4 font-medium">
            <div className="grid grid-cols-2 items-center ">
              <label
                htmlFor="fromWt"
                className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
              >
                From :
              </label>
              <select
                id="fromWt"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="g">Grams</option>
                <option value="kg">Kilograms</option>
                <option value="lb">Pounds</option>
                <option value="oz">Ounces</option>
              </select>
            </div>

            <div className="grid grid-cols-2 items-center ">
              <label
                htmlFor="toWt"
                className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
              >
                To:
              </label>
              <select
                id="toWt"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="g">Grams</option>
                <option value="kg">Kilograms</option>
                <option value="lb">Pounds</option>
                <option value="oz">Ounces</option>
              </select>
            </div>
          </div>

          <div>
            <input
              placeholder="Enter Weight"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
              id="num"
              onKeyDown={(e) =>
                e.key === "Enter" && getConvertedWeight(setResult)
              }
            />
          </div>

          <div className="text-center my-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full active:scale-95 transition-transform duration-150"
              onClick={() => getConvertedWeight(setResult)}
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
