"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion"; // tambahkan ini

// Variants untuk animasi
const staggerContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: easeOut, // gunakan fungsi, bukan string
    },
  },
};

const Profile = () => {
  const logoSrc = "/NawayaAssets/AcehNawaya.png";
  const nawayaMobile = "/NawayaAssets/AcehNawayaMobile.png";
  const listProduk1 = "/NawayaAssets/listproduk1.png";
  const listProduk2 = "/NawayaAssets/listproduk2.png";
  const listProduk3 = "/NawayaAssets/listproduk3.png";
  const listProduk4 = "/NawayaAssets/listproduk4.png";

  return (
    <motion.section
      id="our-service"
      className="relative w-full md:w-[87%] p-3 md:p-0 mx-auto flex flex-col md:flex-row items-start justify-between gap-10 py-10 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Kolom kiri */}
      <motion.div
        className="flex flex-col gap-6 text-center md:text-left basis-[40%]"
        variants={staggerContainer}
      >
        <div className="relative flex justify-center items-center w-full">
          <Image
            src={nawayaMobile}
            alt="Logo Nawaya Haromain"
            width={600}
            height={600}
            className="object-contain w-auto max-w-full md:max-w-[95%] h-auto"
            priority
          />
        </div>
      </motion.div>

      {/* Kolom kanan */}
      <motion.div
        className="flex flex-col justify-baseline items-start basis-[60%] md:mb-0"
        variants={staggerContainer}
      >
        <div className="flex flex-col">
          <p className="text-[16px] font-medium -my-2.5">Pasti Berangkat-nya!</p>
          <h2 className="text-[30px] md:text-[45px] font-bold font-teko my-4">
            NAWAYA HAROMAIN
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-3 border-l-3 border-[#d19f4f] p-6 shadow-lg mb-[38px]">
          <p className="text-[16px] font-medium">
            Nawaya Haromain Travel sebagai biro layanan umroh di Kota Banda Aceh,
            memfasilitasi keberangkatan anda beserta keluarga menuju tanah suci
          </p>
          <p className="text-[16px] font-medium">
            Umroh Penuh Kesan dengan Tadabbur Al-Quran
          </p>
        </div>

        {/* Daftar Produk */}
        <div className="flex flex-col md:flex-row justify-start items-center">
          {[
            [
              { src: listProduk4, title: "Umroh" },
              { src: listProduk3, title: "Tour Ziarah" },
            ],
            [
              { src: listProduk2, title: "Pengurusan Visa" },
              { src: listProduk1, title: "Pemesanan Hotel" },
            ],
          ].map((col, i) => (
            <div
              key={i}
              className="flex flex-col justify-start items-center border-l-3 border-dashed border-[#c5913e8e] basis-full md:basis-[50%] gap-[15px] pl-6 p-2"
            >
              {col.map((item, j) => (
                <motion.div
                  key={j}
                  className="flex justify-center items-center gap-4"
                  variants={staggerContainer}
                >
                  <div className="flex justify-center items-center bg-[#edf2fb] rounded-lg basis-[20%] md:basis-[26%]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={600}
                      height={600}
                      className="object-contain w-auto max-w-full md:max-w-[95%] h-auto"
                      priority
                    />
                  </div>
                  <p className="text-[16px] font-medium basis-[70%]">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Profile;
