import React from "react";

interface Props {
  title: string;
  description: string;
}

const CarouselItem = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-lg">{title}</h1>
      <br />
      <p>{description}</p>
    </div>
  );
};

export default CarouselItem;
