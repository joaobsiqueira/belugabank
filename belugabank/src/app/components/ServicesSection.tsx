import React, { ReactNode } from "react";
import { Container } from "@/app/components/Container";
import PhoneIcon from "@/app/assets/icon-phone.svg";
import Image from "next/image";
import SoluctionItem from "@/app/assets/icon-solutions.svg";
import OptionsIcon from "@/app/assets/icon-options.svg";
import CardIcon from "@/app/assets/icon-card.svg";
import ImagePhone from "@/app/assets/Home@1x.png";
import Background from "@/app/assets/blurry-gradient-haikei.svg";

interface Props {
  children: ReactNode;
}

const ServicesSection = () => {
  return (
    <section id="services" className="relative w-full h-full">
      <div className="absolute -z-10 w-full">
        <Image
          src={Background}
          alt="background"
          className="w-full"
          height={1040}
        />
      </div>
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="text-primary-blue font-bold text-md uppercase mb-9">
            Serviços exclusivos
          </span>
          <h2 className="text-bone-white text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-16 text-bone-white">
            Veja como você pode cuidar das suas finanças pelo app Beluga Bank de
            forma segura e rápida, no conforto da sua casa
          </p>
          <ul className="flex flex-col items-start gap-9">
            <li className="text-bone-white flex items-center gap-9 pb-9 ">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={PhoneIcon} alt="Phone" />
              </div>
              <p className="flex-1 pr-2">
                Acompanhar sua conta, fazer transferências e pagamentos de onde
                estiver
              </p>
            </li>
            <li className="text-bone-white flex items-center gap-9 pb-9 ">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={SoluctionItem} alt="Soluction" />
              </div>
              <p className="flex-1 pr-2">
                Soluções de empréstimos e renegociação para organizr suas
                finanças
              </p>
            </li>
            <li className="text-bone-white flex items-center gap-9 pb-9 ">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={OptionsIcon} alt="Option" />
              </div>
              <p className="flex-1 pr-2">
                Diversas opções de investimentos, de acordo com seu perfil de
                investidor
              </p>
            </li>
            <li className="text-bone-white flex items-center gap-9 pb-9">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={CardIcon} alt="Card" />
              </div>
              <p className="flex-1 pr-2">
                Acompanhe a fatura do seu cartão de crédito e faça compras
                online com seu cartão virtual
              </p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="absolute top-28 right-20 flex items-center justify-center w-[32%] h-full">
        <Image src={ImagePhone} alt="Beluga Bank App" />
      </div>
    </section>
  );
};

export default ServicesSection;
