"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const getInterest = (setResult, compound, setGetAmount) => {
  const principal = parseFloat(document.getElementById("principal").value);
  const time = parseFloat(document.getElementById("time").value);
  const rate = parseFloat(document.getElementById("rate").value);

  if (isNaN(principal) || isNaN(time) || isNaN(rate)) {
    toast.error("Please enter valid numbers for all fields.");
    return;
  }

  if (!compound) {
    const interest = (principal * time * rate) / 100;
    setResult(interest.toFixed(2));
    setGetAmount((principal + interest).toFixed(2));
    return;
  }
  if (compound) {
    const n = parseFloat(document.getElementById("selectFrequency").value);
    const r = rate / 100;
    const amount = principal * Math.pow(1 + r / n, n * time);
    const interest = amount - principal;
    setResult(interest.toFixed(2));
    setGetAmount(amount.toFixed(2));
    return;
  }
};

const interestCalculator = () => {
  const [result, setResult] = useState("");
  const [compound, setCompound] = useState(false);
  const [getAmount, setGetAmount] = useState("");

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-2">
          <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">
            Interest Calculator
          </h1>
          <p className="text-gray-700 mb-4 text-center dark:text-gray-300">
            Calculate Simple and Compound Interest.
          </p>
          <div className="flex gap-2 justify-around items-center text-xl md:text-2xl  dark:text-gray-200">
            <input
              type="button"
              value="Simple"
              className={`cursor-pointer rounded-lg px-2 py-1 ${!compound ? "bg-blue-500" : ""}`}
              id="simple"
              onClick={() => setCompound(false)}
            />
            <span>/</span>
            <input
              type="button"
              value="Compound"
              className={`cursor-pointer rounded-lg px-2 py-1 ${compound ? "bg-blue-500" : ""}`}
              id="compound"
              onClick={() => setCompound(true)}
            />
          </div>

          <div>
            <input
              placeholder="Enter Principal"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
              id="principal"
            />
          </div>
          {compound && (
            <div className="grid grid-cols-2 items-center">
              <label
                htmlFor="selectFrequency"
                className="border-0  py-2 px-4 focus:outline-none dark:text-gray-200 font-medium"
              >
                Frequency:
              </label>
              <select
                id="selectFrequency"
                defaultValue={"1"}
                className="border border-gray-300 rounded-md p-2 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="1">Annually</option>
                <option value="2">Semi-Annually</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
              </select>
            </div>
          )}
          <div>
            <input
              placeholder="Enter Time in years"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
              id="time"
            />
          </div>
          <div>
            <input
              placeholder="Enter Rate"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
              id="rate"
            />
          </div>

          <div className="text-center my-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full active:scale-95 transition-transform duration-150"
              onClick={() => getInterest(setResult, compound, setGetAmount)}
            >
              Calculate
            </button>
          </div>

          <div>
            <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">
              {result !== ""
                ? `Interest: ${result} and final amount is ${getAmount}`
                : "Enter values and click Calculate."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default interestCalculator;
