"use client";

import React, { useEffect, useState } from "react";
import { umrohList } from "./data";
import UmrohCard from "./UmrohCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PaketUmroh = () => {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<any>(null);

  // Saat carousel aktif, simpan instance API
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <main className="w-full bg-[#f6f8fd] pt-[70px] pb-[70px]" id="paket">
      <div className="w-full md:w-[87%] p-2 md:p-0 m-auto bg-[#f6f8fd] relative">
        <p className="text-[16px] font-medium my-[-10px] text-center">
          Rencanakan Umroh Anda Segera!
        </p>
        <h2 className="text-[30px] text-center md:text-[45px] font-bold font-teko my-4">
          PAKET UMROH TERSEDIA
        </h2>

        <div className="relative px-7 md:px-[45px]">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              containScroll: "keepSnaps",
            }}
            className="w-full"
          >
            <CarouselContent>
              {umrohList.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full md:basis-1/2 lg:basis-1/4 flex justify-center items-center"
                >
                  <UmrohCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 bg-[#418064ec] text-white hover:bg-[#2b5844] w-10 h-10 rounded-full flex items-center justify-center shadow-md -left-[25px] md:-left-[55px]" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 bg-[#418064ec] text-white hover:bg-[#2b5844] w-10 h-10 rounded-full flex items-center justify-center shadow-md -right-[25px] md:-right-[55px]" />
          </Carousel>

          {/* Pagination dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {umrohList.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-[#418064] scale-110" : "bg-[#cfd6d3]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaketUmroh;
