import Hero from '@/components/theme/02-HeroSection/Hero'
import Navbar from '@/components/theme/01-Navbar/Navbar'
import React from 'react'
import PaketUmroh from '@/components/theme/03-Product/PaketUmroh'
import GoldBorder from '@/components/theme/00-Border/GoldBorder'
import BlankDiv from '@/components/theme/00-Border/BlankDiv'
import Profile from '@/components/theme/04-Profile/Profile'
import ChooseUs from '@/components/theme/05-Choose/ChooseUs'
import Gallery from '@/components/theme/06-Gallery/Gallery'
import Footer from '@/components/theme/Footer/Footer'
import Link from 'next/link'
import { FaHeadset } from 'react-icons/fa6'

const page = () => {
  const contactUrl = "https://wa.me/6281234567890";

  return (
    <>
      <Navbar />
      <Hero />
      <GoldBorder />
      <PaketUmroh />
      <GoldBorder />
      <Profile />
      <GoldBorder />
      <ChooseUs />
      <Gallery />
      <Footer />

      {/* Tombol Sticky */}
      <Link
        href={contactUrl}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center rounded-full p-4 text-[#ffffff] font-semibold  bg-[#418064] hover:bg-[#2b5844] transition-colors shadow-lg"
      >
        <FaHeadset className="text-[22px]" />
      </Link>
      
    </>
  )
}

export default page
