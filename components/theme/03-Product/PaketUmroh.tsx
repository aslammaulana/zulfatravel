import React from "react";
import { umrohList } from "./data";
import UmrohCard from "./UmrohCard";

const PaketUmroh = () => {
  return (
    <main className="w-full bg-[#f6f8fd] pt-[70px] pb-[50px]">
      <div className="w-full md:w-[87%] p-2 md:p-0 m-auto bg-[#f6f8fd]">
        <p className="text-[16px] font-medium  my-[-10px]">Rencanakan Umroh Anda Segera!</p>
        <h2 className="text-[30px] md:text-[45px] font-bold font-teko my-4">PAKET UMROH TERSEDIA</h2>



        {/* Carc Umroh */}
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {umrohList.map((item, i) => (
            <UmrohCard key={i} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PaketUmroh;
