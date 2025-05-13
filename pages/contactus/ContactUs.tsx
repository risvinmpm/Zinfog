import React from 'react'
import { Navbar } from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ContactForm from '../../components/main/contactus/ContactForm'

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default ContactUs
