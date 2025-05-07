import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/main/career/Banner'
import Methods from '../../components/main/career/Methods'

const Career = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Methods />
      </main>
      <Footer />
    </>
  )
}

export default Career