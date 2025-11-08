"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import UmrohCard from "./UmrohCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Inisialisasi Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type UmrohPackage = {
  id: number;
  title: string;
  price: number;
  date: string;
  duration: string;
  airline: string;
  imageSrc: string;
  link: string;
};

const PaketUmroh = () => {
  const [data, setData] = useState<UmrohPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<any>(null);

  // Ambil data dari Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("paket_umroh")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Gagal mengambil data:", error);
      } else if (data) {
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          date: item.date,
          duration: item.duration,
          airline: item.airline,
          imageSrc: item.imagesrc,
          link: item.link,
        }));
        setData(formatted);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Carousel tracking
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => api.off("select", onSelect);
  }, [api]);

  if (loading)
    return (
      <main className="w-full bg-[#f6f8fd] pt-[70px] pb-[70px] text-center">
        <p>Memuat data paket umroh...</p>
      </main>
    );

  if (!data.length)
    return (
      <main className="w-full bg-[#f6f8fd] pt-[70px] pb-[70px] text-center">
        <p>Tidak ada paket umroh tersedia.</p>
      </main>
    );

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
              {data.map((item, i) => (
                <CarouselItem
                  key={item.id || i}
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
            {data.map((_, index) => (
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
