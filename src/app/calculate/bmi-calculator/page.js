"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const calculateBMI = (setResult, setShowModal, setMessage) => {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const heightUnit = document.getElementById("selectHeightUnit").value;
  const weightUnit = document.getElementById("selectWeightUnit").value;

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    toast.error("Please enter valid positive numbers for height and weight.");
    return;
  }

  if (heightUnit === "cm") {
    height /= 100;
  } else if (heightUnit === "in") {
    height *= 0.0254;
  } else if (heightUnit === "ft") {
    height *= 0.3048;
  }

  if (weightUnit === "lb") {
    weight *= 0.453592;
  }

  const bmi = weight / (height * height);
  setResult(`Your BMI is ${bmi.toFixed(2)}`);
  getBMIMessage(bmi, setShowModal, setMessage);
};
const getBMIMessage = (bmi, setShowModal, setMessage) => {
  const selectedMsg = Math.floor(Math.random() * 3);

  const underWeightMsg = [
    "You are underweight. Consider a nutritious, calorie-rich diet.",
    "Your BMI is low — focus on healthy weight gain.",
    "Try adding balanced meals and strength training.",
  ];

  const normalWeightMsg = [
    "Great! You have a healthy BMI. Keep it up.",
    "Your weight is in the normal range — stay active and eat well.",
    "Good job maintaining a balanced lifestyle.",
  ];

  const overweightMsg = [
    "You are slightly above the healthy range.",
    "Consider regular exercise and mindful eating.",
    "Small lifestyle changes can help you get back on track.",
  ];

  const obeseMsg = [
    "Your BMI is high — consider consulting a health professional.",
    "Focus on gradual weight loss with healthy habits.",
    "A structured diet and exercise plan can help improve your health.",
  ];

  if (bmi < 18.5) {
    setShowModal(true);
    setMessage(underWeightMsg[selectedMsg]);
  } else if (bmi < 25) {
    setShowModal(true);
    setMessage(normalWeightMsg[selectedMsg]);
  } else if (bmi < 30) {
    setShowModal(true);
    setMessage(overweightMsg[selectedMsg]);
  } else {
    setShowModal(true);
    setMessage(obeseMsg[selectedMsg]);
  }
};

const bmiCalculator = () => {
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-2">
          <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">
            BMI Calculator
          </h1>
          <p className="text-gray-700 mb-4 text-center dark:text-gray-300">
            Calculate your Body Mass Index (BMI) <br /> based on your height and
            weight.
          </p>

          <div className="grid gap-4 mb-4 font-medium">
            <div className="flex gap-4 items-center">
              <input
                placeholder="Enter Height"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
                id="height"
              />
              <select
                id="selectHeightUnit"
                defaultValue={"m"}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>

            <div className="flex gap-4 items-center ">
              <input
                placeholder="Enter Weight"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 font-medium"
                id="weight"
              />
              <select
                id="selectWeightUnit"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              >
                <option value="kg">Kg</option>
                <option value="lb">Lb</option>
              </select>
            </div>
          </div>

          <div className="text-center my-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full active:scale-95 transition-transform duration-150"
              onClick={() => calculateBMI(setResult, setShowModal, setMessage)}
            >
              Calculate
            </button>
          </div>

          <div>
            <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">
              {result !== ""
                ? `Result: ${result}`
                : "Enter values and click Calculate."}
            </p>
          </div>
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-80 text-center">
            <p className="text-gray-800 dark:text-gray-100 mb-4">{message}</p>

            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default bmiCalculator;
