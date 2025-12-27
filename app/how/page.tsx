import React from "react";
import Image from "next/image";
import MyButton from "../components/MyButton";
import "./how.css";
import FloatingHearts from "../components/heart";

export default function aboutpage() {
  return (
    
    <div style={{ backgroundImage: "url('/as4.webp')" }} className="bg-cover bg-center h-screen w-auto">
      <div className="flex justify-center items-center h-full   flex-col  ">
        <p className=" text-center relative text-6xl text-white font-bold text-shadow-lg  lg:text-9xl">HAPPY BAIRTHDAY</p>
        <p className=" text-center relative text-6xl text-white font-bold  text-shadow-lg  p-5 lg:text-4xl max-sm:text-2xl">i wish u แข็งแรง 
        มีความสุขมากๆ ทุกอย่างที่หวังสมปรารถนา สุขสันต์วันเกิดnakab(☞ﾟヮﾟ)☞
        </p>
      </div>
    </div>
  );
}