"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCalendarCheck, FaPlaneDeparture } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

type UmrohCardProps = {

  id: number;
  title: string;
  price: number;
  date: string;
  duration: string;
  airline: string;
  imageSrc: string;
  link: string;
};

const UmrohCard: React.FC<UmrohCardProps> = ({
  id,
  title,
  price,
  date,
  duration,
  airline,
  imageSrc,
  link,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="flex flex-col border-2 pt-1 px-1 border-[#e3e3e3] rounded-[15px] overflow-hidden bg-white w-full h-full">
      <div className="relative w-full h-[170px]">
        {/* Skeleton loading */}
        {!isImageLoaded && (
          <div className="absolute inset-0 m-2 rounded-[10px] bg-gray-200 animate-pulse"></div>
        )}

        {/* Gambar */}
        <div className=" relative w-full h-full rounded-[10px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            className={`object-cover rounded-[10px] transition-opacity duration-500 ${isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>

      {/* Konten */}
      <div className="flex flex-col justify-between grow p-4">
        <div>
          <p className="font-semibold mb-1 leading-normal">{title}</p>
        </div>

        <div>
          <p className="text-[#c72a2a] font-bold">
            Rp {price.toLocaleString("id-ID")},-
          </p>

          <div className="border-t-2 border-[#d1d1d1] border-dashed my-5"></div>

          <div className="space-y-2 text-sm text-[#6e6e6e] mb-5">
            <div className="flex items-center gap-2">
              <FaCalendarCheck size={14} /> <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoTimeSharp size={14} /> <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPlaneDeparture size={14} /> <span>{airline}</span>
            </div>
          </div>

          {/* Tombol */}
          <a
            href={`/umroh/${id}`} 
            className="block text-center font-semibold bg-[#418064] hover:bg-[#2b5844] text-white py-2 rounded-full text-sm transition-colors -mx-1"
          >
            Lihat Detail
          </a>

        </div>
      </div>
    </div>
  );
};

export default UmrohCard;
