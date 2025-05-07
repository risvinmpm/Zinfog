import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/career/Banner'
import Methods from '../../components/main/career/Methods'
import Role from '../../components/main/career/Role'
import Enquiry from '../../components/main/Enquiry'

const Career = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Methods />
        <Role />
       <div className='py-10 lg:py-20 xl:py-30'><Enquiry /></div>
      </main>
      <Footer />
    </>
  )
}

export default Career