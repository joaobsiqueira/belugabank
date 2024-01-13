"use client";

import React, { Children, useState } from "react";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";
import IconUser from "@/app/assets/icon-user.svg";
import Image from "next/image";
import { Container } from "./Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center w-full h-20 bg-rich-black">
        <div className="flex w-full max-w-[1246px] px-[15px] mx-auto  ">
          <div className="flex flex-1 items-center justify-between">
            <Container>
              <div className="flex items-center gap-14">
                <div className="font-bold text-2xl text-primary-blue">
                  Beluga Bank
                </div>

                <ul className="flex items-center gap-12 ">
                  <li>
                    <Link href="/">
                      <ItemMenu name="Pra você" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <ItemMenu name="Para empresas" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" scroll={true}>
                      <ItemMenu name="Serviços" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#sobre" scroll={true}>
                      <ItemMenu name="Sobre" />
                    </Link>
                  </li>
                </ul>
                <Search />
              </div>
              <Link href="#register" scroll={true}>
                <button className="flex items-center gap-4">
                  <Image src={IconUser} alt="User" />
                  <span className="text-bone-white">Acessar Conta</span>
                </button>
              </Link>
            </Container>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
