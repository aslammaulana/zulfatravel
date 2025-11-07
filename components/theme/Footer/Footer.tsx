import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    const logoSrc = "/NawayaAssets/LogoNawaya.svg";
    const contactUrl = "https://wa.me/6281234567890";

    return (
        <div className='w-full bg-[#2c2c2c] pt-[70px] pb-[40px]'>
            <div className="w-full md:w-[87%] p-4 md:p-0 m-auto flex flex-col md:flex-row mb-2 gap-6 md:gap-0">

                {/* A1 */}
                <div className="flex flex-col justify-start items-center md:items-start basis-1/2 text-center md:text-left">
                    <Link href="/" className="relative w-[300px] md:-[350px] h-12 mb-4">
                        <Image
                            src={logoSrc}
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>
                    <p className="text-[15px] leading-relaxed font-medium text-[#ffffffee] max-w-[500px]">
                        Nawaya Haromain Travel sebagai biro layanan umroh di Kota Banda Aceh, memfasilitasi keberangkatan anda beserta keluarga menuju tanah suci. Umroh Penuh Kesan dengan Tadabbur Al-Quran
                    </p>
                </div>

                {/* A2 */}
                <div className="flex flex-col justify-end items-center md:items-end basis-1/2 text-center md:text-right gap-4">
                    <div className="flex justify-center md:justify-end items-center gap-3 mt-[30px] md:mt-[0px]">
                        <Link
                            href={contactUrl}
                            target="_blank"
                            className="flex items-center justify-center rounded-full bg-[#ffffff2a] p-3 text-[#fdfdfd] text-[22px] hover:bg-[#418064] hover:text-white transition-colors"
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            href={contactUrl}
                            target="_blank"
                            className="flex items-center justify-center rounded-full  bg-[#ffffff2a] p-3 text-[#fdfdfd] text-[22px] hover:bg-[#418064] hover:text-white transition-colors"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href={contactUrl}
                            target="_blank"
                            className="flex items-center justify-center rounded-full  bg-[#ffffff2a] p-3 text-[#fdfdfd] text-[22px] hover:bg-[#418064] hover:text-white transition-colors"
                        >
                            <FaTiktok />
                        </Link>
                    </div>
                    <p className="text-[15px] leading-relaxed font-medium text-[#ffffffee] max-w-[400px]">
                        Jl. AMD Manunggal XLI, Landom, Kec. Lueng Bata, Kota Banda Aceh, Aceh 23122, Indonesia
                    </p>
                </div>
            </div>
            <div className="w-full md:w-[87%] p-4 md:p-0 m-auto flex flex-col gap-6 md:gap-0  justify-start items-center md:items-start ">
                <div className="bg-gradient-to-r from-[#b17d29] via-[#d8cd7f] to-[#b17d29]  w-full h-[2px] my-[10px] md:my-[30px]"></div>
                <p className="text-[15px] font-medium text-[#ffffffee] max-w-[400px]">
                    Copyright @2025 Nawaya Haromain
                </p>
            </div>
        </div>
    )
}
