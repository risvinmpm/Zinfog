import React from 'react'
import Goldzin from '../../components/main/products/Goldzin'
import Myzili from '../../components/main/products/Myzili'
import Lanoza from '../../components/main/products/Lanoza'
import Zsuite from '../../components/main/products/Zsuite'
import OurProducts from '../../components/main/products/OurProducts'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Enquiry from '../../components/main/Enquiry'

const Product = () => {
  return (
    <>
      <Navbar />
      <main className='mt-20'>
        <OurProducts />
        <Goldzin />
        <Myzili />
        <Lanoza />
        <Zsuite />
        <div className='bg-[#17182b] pt-30'><Enquiry /></div>
      </main>
      <Footer />
    </>
  )
}

export default Product