import Hero from '@/components/theme/02-HeroSection/Hero'
import Navbar from '@/components/theme/01-Navbar/Navbar'
import React from 'react'
import HeroTest from '@/components/theme/02-HeroSection/HeroTest'
import PaketUmroh from '@/components/theme/03-Product/PaketUmroh'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <PaketUmroh/>
      <div className="p-24"></div>
    </>
  )
}

export default page