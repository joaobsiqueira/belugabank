import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex items-center w-full justify-between max-w-[1246px] px-[15px] mx-auto py-28">
      {children}
    </div>
  );
};

export { Container };
