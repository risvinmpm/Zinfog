import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/mobappdev/Banner'
import MobOverview from '../../components/main/mobappdev/MobOverview'
import Mobchoose from '../../components/main/mobappdev/Mobchoose'
import ChooseTestimonials from '../../components/main/odooerpdev/ChooseTestimonials'
import Process from '../../components/main/odooerpdev/Process'
import MobProject from '../../components/main/mobappdev/MobProject'
import Enquiry from '../../components/main/Enquiry'

const MobileAppDevelopment = () => {
  return (
    <>
    <Navbar />
    <main>
      <Banner />
      <MobOverview />
      <Mobchoose />
      <ChooseTestimonials />
      <Process />
      <MobProject />
      <div className="pt-7 lg:pt-15 xl:pt-30"><Enquiry /></div>
    </main>
    <Footer />
    </>
  )
}

export default MobileAppDevelopment