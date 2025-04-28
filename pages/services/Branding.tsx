import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/branding/Banner'
import BrandOverview from '../../components/main/branding/BrandOverview'
import BrandChoose from '../../components/main/branding/BrandChoose'
import ChooseTestimonials from '../../components/main/odooerpdev/ChooseTestimonials'
import Process from '../../components/main/odooerpdev/Process'
import BrandProject from '../../components/main/branding/BrandProject'
import Enquiry from '../../components/main/Enquiry'

const Branding = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <BrandOverview />
        <BrandChoose />
        <ChooseTestimonials />
        <Process />
        <BrandProject />
        <div className="pt-7 lg:pt-15 xl:pt-30"><Enquiry /></div>
      </main>
      <Footer />
    </>
  )
}

export default Branding