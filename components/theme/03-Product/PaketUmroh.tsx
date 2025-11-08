import React from "react";
import { umrohList } from "./data";
import UmrohCard from "./UmrohCard";
import { FaChevronRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PaketUmroh = () => {
  return (
    
    <main className="w-full bg-[#f6f8fd] pt-[70px] pb-[50px]"
    id="paket">
      <div className="w-full md:w-[87%] p-2 md:p-0 m-auto bg-[#f6f8fd] relative">
        <p className="text-[16px] font-medium my-[-10px] text-center">
          Rencanakan Umroh Anda Segera!
        </p>
        <h2 className="text-[30px] text-center md:text-[45px] font-bold font-teko my-4">
          PAKET UMROH TERSEDIA
        </h2>

        {/* Carousel Umroh */}
        <div className="relative px-7 md:px-[45px]">
          <Carousel
            opts={{
              align: "start",          // mulai dari kiri, tidak center
              containScroll: "keepSnaps", // selalu “snap” ke posisi card utuh
              loop: true,
              skipSnaps: false,
              duration: 15,           // animasi smooth
            }}
            className="w-full"
          >
            <CarouselContent>
              {umrohList.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full md:basis-1/2 lg:basis-1/4  flex justify-center items-center"
                >
                  <UmrohCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Tombol navigasi, diatur posisi dan ukuran */}
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 bg-[#418064ec] text-white hover:bg-[#2b5844] w-10 h-10 rounded-full flex items-center justify-center shadow-md -left-[25px] md:-left-[55px]" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 bg-[#418064ec] text-white hover:text-white  hover:bg-[#2b5844] w-10 h-10 rounded-full flex items-center justify-center shadow-md -right-[25px] md:-right-[55px]" />
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default PaketUmroh;
