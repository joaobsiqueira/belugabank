import React, { Children, ReactNode } from "react";
import Background from "@/app/assets/blurry-gradient-haikei.svg";
import Image from "next/image";
import { Container } from "@/app/components/Container";
import ImageAppSotre from "@/app/assets/btn-apple-store.svg";
import ImageGooglelay from "@/app/assets/btn-google-play.svg";
import Arrow from "@/app/assets/arrow-explorer.svg";
import WomanImage from "@/app/assets/woman.png";

interface Props {
  children: ReactNode;
}

const HeroSection = () => {
  return (
    <section className="w-full h-[704px]">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image
            src={Background}
            alt="background"
            className="w-full"
            height={1040}
          />
        </div>
        <Container>
          <div className="flex-1 max-w-[500px]">
            <h1 className="text-bone-white text-7xl font-bold mb-4">
              Um banco na palma da sua mão
            </h1>
            <p className="text-xl text-bone-white max-w-[408px] mb-8">
              Tudo que você precisa de em um só lugar. Simples, completo e
              pronto para você
            </p>
            <div className="flex gap-4 mb-24">
              <button>
                <Image src={ImageAppSotre} alt="app store" />
              </button>
              <button>
                <Image src={ImageGooglelay} alt="Google Play" />
              </button>
            </div>
            <button className="flex items-center gap-3">
              <Image src={Arrow} alt="arrow down" />
              <span className="text-bone-white text-sm font-bold">
                Continue explorando
              </span>
            </button>
          </div>
          <Image src={WomanImage} alt="woman" className="mr-[-41px] flex " />
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
