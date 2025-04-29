import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/ecommerce/Banner'
import TopBrands from '../../components/main/ecommerce/TopBrands'

const Ecommerce = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <TopBrands />
      </main>
      <Footer />
    </>
  )
}

export default Ecommerce