import React from 'react'
import { IntroSection, ContactSection, DifferentSection, Banner, CarbonSection, GallerySection } from "../components";

function AboutPage() {
  return (
      <>
        <div className='max-h-[32rem] md:max-h-[28rem] bg-banner-sm lg:bg-banner-lg bg-cover bg-no-repeat bg-center'>
          <Banner />
        </div>
        <IntroSection />
        <DifferentSection />
        <CarbonSection />
        <GallerySection />
          <ContactSection />
        </>
  )
}

export default AboutPage