import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/webdev/Banner'
import WebOverview from '../../components/main/webdev/WebOverview'
import WebChoose from '../../components/main/webdev/WebChoose'
import ChooseTestimonials from '../../components/main/odooerpdev/ChooseTestimonials'
import Process from '../../components/main/odooerpdev/Process'
import WebProject from '../../components/main/webdev/WebProject'
import Enquiry from '../../components/main/Enquiry'

const WebsiteDevelopment = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <WebOverview />
        <WebChoose />
        <ChooseTestimonials />
        <Process />
        <WebProject />
        <div className="pt-7 lg:pt-15 xl:pt-30"><Enquiry /></div>
      </main>
      <Footer />
    </>
  )
}

export default WebsiteDevelopment
