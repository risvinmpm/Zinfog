import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/uiux/Banner'
import UiuxOverview from '../../components/main/uiux/UiuxOverview'
import UiuxChoose from '../../components/main/uiux/UiuxChoose'
import ChooseTestimonials from '../../components/main/odooerpdev/ChooseTestimonials'
import Process from '../../components/main/odooerpdev/Process'
import UiuxProject from '../../components/main/uiux/UiuxProject'
import Enquiry from '../../components/main/Enquiry'

const UiUxDesign = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <UiuxOverview />
        <UiuxChoose />
        <ChooseTestimonials />
        <Process />
        <UiuxProject />
        <div className="pt-7 lg:pt-15 xl:pt-30"><Enquiry /></div>
      </main>
      <Footer />
    </>
  )
}

export default UiUxDesign