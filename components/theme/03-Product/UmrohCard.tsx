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
        <div className="flex flex-col border-2 pt-1 px-1 border-[#e3e3e3] rounded-[15px]  overflow-hidden bg-white w-full h-full ">
            <div className="relative w-full h-[170px]  ">
                {/* Gambar */}
                <div className="m-2">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover rounded-tr-[10px] rounded-tl-[10px]"
                        priority
                    />
                </div>
            </div>

            {/* Konten */}
            <div className="flex flex-col justify-between grow p-4">
                {/* Bagian atas: teks dan info */}
                <div>
                    <p className="font-semibold mb-1 leading-normal">
                        {title}
                    </p>


                </div>

                <div className="">
                    <p className="text-[#c72a2a] font-bold ">
                        Rp {price.toLocaleString("id-ID")},-
                    </p>

                    <div className="border-t-2 border-[#d1d1d1] border-dashed my-5">

                    </div>
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
                    {/* Tombol di bawah */}
                    <a
                        href={link}
                        className="block text-center font-semibold  bg-[#418064] hover:bg-[#2b5844]  text-white py-2 rounded-full text-sm font-medium transition -mx-1"
                    >
                        Lihat Detail
                    </a>
                </div>

            </div>
        </div>
    );
};

export default UmrohCard;
