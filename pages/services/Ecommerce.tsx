import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/ecommerce/Banner'

const Ecommerce = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default Ecommerce