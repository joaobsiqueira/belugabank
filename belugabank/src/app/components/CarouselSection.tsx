"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Background from "@/app/assets/blurry-gradient-haikei.svg";
import CarouselItem from "./CarouselItem";

const CarouselSection = () => {
  return (
    <div>
      <section id="sobre">
        <h1 className="text-[92px] text-primary-blue flex items-center justify-center">
          Sobre
        </h1>
        <Swiper
          height={600}
          width={600}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="w-full h-11 flex items-center justify-center">
            <SwiperSlide className="bg-rich-black p-5 border rounded-md text-bone-white">
              <CarouselItem
                title="Praticidade"
                description="O Beluga Bank é um banco digital que oferece uma experiência prática e conveniente para seus clientes. Com um aplicativo intuitivo e fácil de usar, os clientes podem realizar todas as suas operações bancárias de forma rápida e segura, a qualquer hora e em qualquer lugar."
              />
            </SwiperSlide>
            <SwiperSlide className="bg-rich-black flex  p-5 border rounded-md text-bone-white">
              <CarouselItem
                title="Honestidade"
                description="O Beluga Bank também é honesto em suas práticas comerciais. A empresa não cobra taxas abusivas ou esconde custos dos clientes. Além disso, o Beluga Bank é comprometido com a segurança dos dados dos clientes, garantindo que eles estejam protegidos contra fraudes e outros crimes."
              />
            </SwiperSlide>
            <SwiperSlide className="bg-rich-black flex p-5 border rounded-md text-bone-white ">
              <CarouselItem
                title="Confiança"
                description="O Beluga Bank é um banco digital que oferece uma experiência confiável para seus clientes. Com um forte compromisso com a segurança e a privacidade dos dados, o Beluga Bank garante que os clientes possam confiar em seus fundos e informações."
              />
            </SwiperSlide>
            <SwiperSlide className="bg-rich-black flex  p-5 border rounded-md text-bone-white ">
              <CarouselItem
                title="Lucro"
                description="O Beluga Bank é um banco digital que oferece uma experiência prática e conveniente para seus clientes, e ainda gera lucro. Com um aplicativo intuitivo e fácil de usar, os clientes podem realizar todas as suas operações bancárias de forma rápida e segura, a qualquer hora e em qualquer lugar."
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </section>
    </div>
  );
};

export default CarouselSection;
