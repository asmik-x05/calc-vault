"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const getTemperatureConversion = (setResult) => {
  const numInput = document.getElementById("num");
  const fromBaseSelect = document.getElementById("fromTmp").value;
  const toBaseSelect = document.getElementById("toTmp").value;

  const number = numInput.value.trim();

  if (fromBaseSelect === toBaseSelect) {
    toast.error("Please select different units for conversion.");
    return;
  }

  if (isNaN(number)) {
    toast.error("Please enter a valid number.");
    return;
  }

  let kelvin;

  if (fromBaseSelect === "C") {
    kelvin = parseFloat(number) + 273.15;
  } else if (fromBaseSelect === "F") {
    kelvin = (parseFloat(number) + 459.67) * (5 / 9);
  } else if (fromBaseSelect === "R") {
    kelvin = parseFloat(number) * (5 / 9);
  }

  let result;

  if (toBaseSelect === "C") {
    result = kelvin - 273.15;
    setResult(result.toFixed(2) + " °C");
  } else if (toBaseSelect === "F") {
    result = kelvin * (9 / 5) - 459.67;
    setResult(result.toFixed(2) + " °F");
  } else if (toBaseSelect === "R") {
    result = kelvin * (9 / 5);
    setResult(result.toFixed(2) + " °R");
  } else if (toBaseSelect === "K") {
    result = kelvin;
    setResult(result.toFixed(2) + " K");
  }
};

const temperatureConverter = () => {
  const [result, setResult] = useState("");
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-2">
          <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">
            Temperature Converter
          </h1>
          <p className="text-gray-700 mb-4 text-center dark:text-gray-300">
            Convert temperatures between different units <br />
            (Celsius, Fahrenheit, Kelvin,Rankine).
          </p>

          <div className="grid gap-4 mb-4 font-medium">
            <div className="grid grid-cols-2 items-center ">
              <label
                htmlFor="fromTmp"
                className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
              >
                From :
              </label>
              <select
                id="fromTmp"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="K">Kelvin</option>
                <option value="R">Rankine</option>
              </select>
            </div>

            <div className="grid grid-cols-2 items-center ">
              <label
                htmlFor="toTmp"
                className=" text-gray-700 mb-2 mx-2 dark:text-gray-300"
              >
                To:
              </label>
              <select
                id="toTmp"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="K">Kelvin</option>
                <option value="R">Rankine</option>
              </select>
            </div>
          </div>

          <div>
            <input
              placeholder="Enter Temperature"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
              id="num"
              onKeyDown={(e) =>
                e.key === "Enter" && getTemperatureConversion(setResult)
              }
            />
          </div>

          <div className="text-center my-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full active:scale-95 transition-transform duration-150"
              onClick={() => getTemperatureConversion(setResult)}
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

export default temperatureConverter;
