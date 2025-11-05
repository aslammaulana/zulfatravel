import Image from "next/image";
import React from "react";

const HeroTest = () => {
  const logoSrc = "/NawayaAssets/Latar-01.png";

  return (
    <section className="flex w-full h-[400px]">
      {/* Kolom 1: 30% */}
      <div className="relative basis-[30%] bg-gray-100">
        <Image
          src={logoSrc}
          alt="Logo Nawaya Haromain"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Kolom 2: 70% */}
      <div className="basis-[70%] bg-white flex items-center justify-center">
        <h2 className="text-xl font-semibold">Konten di Sini</h2>
      </div>
    </section>
  );
};

export default HeroTest;
