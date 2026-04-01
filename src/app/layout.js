import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "calc-vault",
  description:
    "A simple calculator collections built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col dark">
        <Header />
        {children}
        <ToastContainer autoClose={3000} />

        <Footer />
      </body>
    </html>
  );
}
