import React from 'react'
import OdooErpDevelopment from './OdooErpDevelopment'
import MobileAppDevelopment from './MobileAppDevelopment'
import WebsiteDevelopment from './WebsiteDevelopment'
import Branding from './Branding'
import UiUxDesign from './UiUxDesign'
import Ecommerce from './Ecommerce'
import Index from './Index'

const Service = () => {
  return (
    <div className='main-padding'>
        <Index />
        <OdooErpDevelopment />
        <MobileAppDevelopment />
        <WebsiteDevelopment />
        <Branding />
        <UiUxDesign />
        <Ecommerce />   
    </div>
  )
}

export default Service