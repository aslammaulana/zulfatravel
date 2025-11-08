import React from 'react'
import GalleryGrid from './GalleryGrid'
import Link from 'next/link'
import { FaHeadset } from 'react-icons/fa6';
import { FaGoogleDrive } from 'react-icons/fa';

const Gallery = () => {
    const contactUrl = "https://wa.me/6281234567890";

    return (
        <main className="w-full bg-[#f6f8fd] pt-[20px] pb-[50px] " id='galeri'>
            <div className="w-full md:w-[87%] p-2 md:p-0 m-auto bg-[#f6f8fd] relative">
                {/* Title */}
                <div className="mb-5">
                    <h2 className="text-[30px] text-center md:text-[45px] font-bold font-teko my-4">
                        GALERI DOKUMENTASI JAMAAH
                    </h2>
                </div>
                <GalleryGrid />
                <div className="flex justify-center items-center mt-[50px] ">
                    <Link
                        href={contactUrl}
                        target="_blank"
                        className="flex items-center gap-2 rounded-full bg-[#ffffff] px-6 py-3 text-[#418064] font-semibold text-[14px] hover:bg-[#418064] hover:text-white transition-colors shadow-lg"
                    >
                        <FaGoogleDrive />
                        Google Drive
                    </Link>
                </div>
            </div>
        </main >
    )
}

export default Gallery