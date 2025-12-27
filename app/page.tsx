import Image from "next/image";
import MyButton from "./components/MyButton";

export default function Home() {
  return (
  <div style={{ backgroundImage: "url('/as5.webp')" }} className="bg-cover bg-center h-screen w-auto">
    <div className=" top-100 relative max-sm:top-70">
     <div className="text-amber-50 text-2xl font-bold text-shadow-md max-sm:text-5xl"> 
      <MyButton />
      </div>
    </div>
  </div>
  );
}
