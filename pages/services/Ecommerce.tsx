import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/ecommerce/Banner'
import TopBrands from '../../components/main/ecommerce/TopBrands'
import WayOfWorking from '../../components/main/ecommerce/WayOfWorking'
import BestMobApp from '../../components/main/ecommerce/BestMobApp'

const Ecommerce = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <TopBrands />
        <WayOfWorking />
        <BestMobApp />
      </main>
      <Footer />
    </>
  )
}

export default Ecommerce