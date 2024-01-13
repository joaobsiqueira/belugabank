import React from "react";
import Image from "next/image";
import Arrow from "@/app/assets/arrow-down.svg";

type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-bone-white font-bold">{name}</span>
      <Image src={Arrow} alt="Arrow down" />
    </button>
  );
}
