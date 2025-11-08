"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeadset } from "react-icons/fa";
import { heroBackground } from "@/data/images/heroImages";

const Hero = () => {
  const contactUrl = "https://wa.me/6281234567890";
  const logoSrc = "/NawayaAssets/Ibad-Image.webp";

  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section className="relative w-full px-5 py-[22px] text-white overflow-hidden">
      {/* Background Wrapper */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Skeleton Loading */}
        {!bgLoaded && (
          <div className="absolute inset-0 bg-[#57876d] animate-pulse" />
        )}

        {/* Background Image */}
        <Image
          src={heroBackground}
          alt="Hero Background"
          fill
          className={`object-cover mix-blend-lighten transition-opacity duration-700 ${
            bgLoaded ? "opacity-100" : "opacity-100"
          }`}
          priority
          onLoad={() => setBgLoaded(true)}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative w-[100%] md:w-[87%] p-2 md:p-0 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 md:py-20">
        {/* Kolom kiri */}
        <div className="flex flex-col gap-6 text-center md:text-left basis-1/2">
          <h1 className="text-[30px] md:text-[55px] font-bold font-teko leading-tight mb-[-30px]">
            NAWAYA HAROMAIN
          </h1>
          <p className="leading-relaxed text-gray-200">
            Biro Perjalanan Umrah dan Tour Islami terpercaya. Memberikan
            pengalaman ibadah yang berkesan dan aman bagi setiap jamaah.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Link
              href={contactUrl}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-[#ffffff] px-6 py-3 text-[#418064] font-semibold text-[14px] hover:bg-[#418064] hover:text-white transition-colors"
            >
              <FaHeadset />
              Hubungi Kami
            </Link>

            <Link
              href="/paket"
              className="flex items-center gap-2 rounded-full bg-[#ffffff28] px-6 py-3 text-white font-semibold text-[14px] hover:bg-white hover:text-[#418064] transition-colors"
            >
              <FaHeadset />
              Lihat Paket
            </Link>
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="flex justify-center items-center basis-1/2 mt-[-90px] md:mt-[-170px] mb-[-20px] md:mb-0">
          <div className="relative flex justify-center items-center w-full">
            <Image
              src={logoSrc}
              alt="Logo Nawaya Haromain"
              width={600}
              height={600}
              className="object-contain w-auto max-w-[100%] md:max-w-[95%] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
