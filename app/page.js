import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

//Internal import

export default function Home() {
  return (
    <div className="bg-red color-green">
      <Hero />
      <About />
    </div>
  );
}
