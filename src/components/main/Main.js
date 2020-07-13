import React from 'react'
import Product from './products/Product'
import OurTeam from './our-team/OurTeam'
import ContactUs from './ContactUs'

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className = "container container--main">
        <Product />
        <OurTeam />
        <ContactUs />
      </div>
    </div>
  )
}

export default Main
