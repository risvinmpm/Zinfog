import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/portfolio/Banner'
import OurPortfolio from '../../components/main/portfolio/OurPortfolio'
import Enquiry from '../../components/main/Enquiry'

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <main className='mt-20'>
        <Banner />
        <OurPortfolio />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}

export default Portfolio
