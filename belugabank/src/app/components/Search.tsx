import IconSearch from "@/app/assets/icon-search.svg";
import Image from "next/image";

export function Search() {
  return (
    <div className="flex items-center gap-4 ml-12">
      <Image src={IconSearch} alt="search" />
      <input
        type="text"
        className="bg-transparent outline-none text-bone-white placeholder:text-text-gray"
        placeholder="Buscar"
      />
    </div>
  );
}
