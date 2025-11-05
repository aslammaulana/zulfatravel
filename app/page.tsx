import Hero from '@/components/theme/02-HeroSection/Hero'
import Navbar from '@/components/theme/01-Navbar/Navbar'
import React from 'react'
import HeroTest from '@/components/theme/02-HeroSection/HeroTest'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HeroTest/>
    </>
  )
}

export default page