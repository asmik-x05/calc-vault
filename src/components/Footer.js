import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="space-y-8 py-4 bg-gray-800">
      <hr className=" w-2/3 mx-auto text-gray-100" />
      <p className="text-center text-gray-300">
        &copy; 2025-{currentYear} Asmik Lamichhane. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
