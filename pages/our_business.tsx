import React from 'react'
import Link from 'next/link'
import Agribusiness from '../Components/Agribusiness'
import RealEstate from '../Components/RealEstate'
import BankingAgency from "../Components/BankingAgency"
import TransportSystem from "../Components/TransportSystem"
import Footer from '../Components/Footer-2'

function our_business() {
  return (
    <>
      <div className='video_div'>
        <video src='/Agriculture-vid.mp4' autoPlay loop muted/>
        <span>
          <h1>Our Businesses</h1>
          <div className='bussinesses-links-div'>
            <Link href="#agribusiness-card"><a className='bussinesses-links'>Agribusiness</a></Link>
            <Link href="#action1"><a className='bussinesses-links'>Real Estate</a></Link>
            <Link href="#action2"><a className='bussinesses-links'>Agency Banking</a></Link>
            <Link href="#action2"><a className='bussinesses-links'>Transportation Systems</a></Link>
          </div>
        </span>
      </div>
      <Agribusiness />
      <RealEstate />
      <BankingAgency />
      <TransportSystem />
      <Footer />
    </>
  )
}

export default our_business