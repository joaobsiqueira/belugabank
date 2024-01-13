import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import LoginSection from "./components/LoginSection";
import CarouselSection from "./components/CarouselSection";

export default function Home() {
  return (
    <>
      <body>
        <HeroSection />
        <ServicesSection />
        <LoginSection />
        <CarouselSection />
      </body>
    </>
  );
}
