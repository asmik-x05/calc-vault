import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500 dark:bg-gray-950">
      {children}
    </div>
  );
};

export default layout;
