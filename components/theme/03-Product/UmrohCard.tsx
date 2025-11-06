// components/UmrohCard.tsx
import React from "react";
import Image from "next/image";
import { CiPlane } from "react-icons/ci";
import { CgLock } from "react-icons/cg";
import { BiCalendar } from "react-icons/bi";
import { FaCalendarCheck, FaPlaneDeparture } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

type UmrohCardProps = {
    title: string;
    price: number;
    date: string;
    duration: string;
    airline: string;
    imageSrc: string;
    link: string;
};

const UmrohCard: React.FC<UmrohCardProps> = ({
    title,
    price,
    date,
    duration,
    airline,
    imageSrc,
    link,
}) => {
    return (
        <div className="flex flex-col border-2 pt-1 px-1 border-[#c9c9c994] rounded-[8px] shadow-sm overflow-hidden bg-white w-[260px] h-full ">
            <div className="relative w-full h-[170px]  ">
                {/* Gambar */}
                <div className="m-2">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover rounded-tr-[5px] rounded-tl-[5px]"
                        priority
                    />
                </div>
            </div>

            {/* Konten */}
            <div className="flex flex-col justify-between grow p-4">
                {/* Bagian atas: teks dan info */}
                <div>
                    <h3 className="font-medium tracking-[0em] mb-2 leading-normal">
                        {title}
                    </h3>


                </div>

                <div className="">
                    <p className="text-red-600 font-bold text-sm mb-3">
                        Rp {price.toLocaleString("id-ID")},-
                    </p>

                    <div className="space-y-1 text-sm text-gray-600 mb-3">
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
                    {/* Tombol di bawah */}
                    <a
                        href={link}
                        className="block text-center font-semibold  bg-[#418064] hover:bg-[#2b5844]  text-white py-2 rounded-[5px] text-sm font-medium transition"
                    >
                        Lihat Detail
                    </a>
                </div>

            </div>
        </div>
    );
};

export default UmrohCard;
