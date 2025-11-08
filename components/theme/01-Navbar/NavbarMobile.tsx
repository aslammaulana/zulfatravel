"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  HiHome,
  HiOutlineUser,
  HiOutlinePlus,
  HiMenuAlt3,
  HiX,
  HiFolderOpen,
} from "react-icons/hi";
import Button from "@/components/elements/Button";

export default function NavbarMobile() {
  const [isClick, setIsClick] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  const closeNavbar = (): void => {
    setIsClick(false);
  };

  const logoSrc = "/NawayaAssets/LogoNawaya.svg";

  // Deteksi arah scroll untuk show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll ke bawah, sembunyikan navbar
        setVisible(false);
      } else {
        // Scroll ke atas, tampilkan navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`lg:hidden sticky top-0 inset-x-0 z-20 bg-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 border-b-2 border-[#418064]">
        <Link
          href="/"
          onClick={closeNavbar}
          className="relative flex items-center gap-2 w-[230px] h-12"
        >
          <Image src={logoSrc} alt="Logo" fill className="object-contain" />
        </Link>

        <button
          className="p-2 rounded text-[#2a5341] hover:text-[#2a5341] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2a5341]"
          onClick={toggleNavbar}
        >
          {isClick ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {isClick && (
        <div className="p-3 bg-white shadow-inner">
          <Button
            icon={<HiHome size={15} className="fill-current w-4 h-4 mr-3" />}
            text="Beranda"
            href="/"
            onClick={closeNavbar}
            className="font-medium hover:bg-[#418064] hover:text-white"
          />
          <Button
            icon={
              <HiFolderOpen size={15} className="fill-current w-4 h-4 mr-3" />
            }
            text="Paket Umroh"
            href="/#paket"
            onClick={closeNavbar}
            className="mt-2 font-medium hover:bg-[#418064] hover:text-white"
          />
          <Button
            icon={
              <HiOutlineUser size={15} className="fill-current w-4 h-4 mr-3" />
            }
            text="Galeri Jamaah"
            href="/#galeri"
            onClick={closeNavbar}
            className="mt-2 font-medium hover:bg-[#418064] hover:text-white"
          />
        </div>
      )}
    </div>
  );
}
