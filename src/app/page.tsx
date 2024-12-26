import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Work from "./components/Work";
import Sponsers from "./components/Sponsers";

export default function Home() {
  return (
    <div>
     <Hero/>
     
     <Work/>
     <Sponsers/>
    </div>
  );
}
