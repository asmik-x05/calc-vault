"use client";

import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { toast } from "react-toastify";

const appendInput = (value, setInput) => {
  setInput((prevInput) => prevInput + value);
};

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleKeyDown = (e) => {
    const key = e.key;
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
      appendInput(key, setInput);
    }
    if (key === "Enter" || key === "=") {
      if (eval(input)) {
        setResult(eval(input));
      } else {
        toast.error("Invalid Expression");
      }
    }
    if (key === "Backspace") {
      setInput(input.slice(0, -1));
    }
    if (key === "Escape") {
      setInput("");
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 shadow-md space-y-2">
          <div>
            <div className="bg-gray-500 dark:bg-gray-950 h-28 rounded-lg p-2 flex flex-col justify-end items-end">
              <p className="text-gray-300 dark:text-gray-400">
                {input ? input : ""}
              </p>
              <p className="text-2xl font-bold text-gray-100">
                = {result ? result : "0"}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4 ">
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => setInput("")}
              >
                Ac
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2 flex justify-center items-center"
                onClick={() => setInput(input.slice(0, -1))}
              >
                <FiDelete />
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("/", setInput)}
              >
                /
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("*", setInput)}
              >
                *
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("7", setInput)}
              >
                7
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("8", setInput)}
              >
                8
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("9", setInput)}
              >
                9
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("-", setInput)}
              >
                -
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("4", setInput)}
              >
                4
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("5", setInput)}
              >
                5
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("6", setInput)}
              >
                6
              </button>
              <div className="row-span-3 grid gap-1">
                <button
                  className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2 "
                  onClick={() => appendInput("+", setInput)}
                >
                  +
                </button>
                <button
                  className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2 "
                  onClick={() =>
                    eval(input)
                      ? setResult(eval(input))
                      : toast.error("Invalid Expression")
                  }
                >
                  =
                </button>
              </div>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("1", setInput)}
              >
                1
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("2", setInput)}
              >
                2
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput("3", setInput)}
              >
                3
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2 col-span-2"
                onClick={() => appendInput("0", setInput)}
              >
                0
              </button>
              <button
                className="cursor-pointer outline-0 space-x-1  space-y-1 active:scale-95 transition-all ease-in-out dark:bg-gray-950 text-blue-600 font-medium text-2xl rounded-lg p-2"
                onClick={() => appendInput(".", setInput)}
              >
                .
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Calculator;
