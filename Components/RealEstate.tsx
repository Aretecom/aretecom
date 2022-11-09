import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import realEstate from '../public/real-estate.jpg'

function RealEstate() {
  return (
    <div className='real-estate-div' id ="real-estate-div">
        <h1>Real Estate</h1>
        <div className='real-estate-picture'>
          <Image
              className=""
              src={realEstate}
              objectFit='fill'
              layout='fill'
              alt="image"
          />
          <div className='real-estate-picture-text'>
            <h1>Choose Your Dream Home With Our Specialists</h1>
            <p className='text-center'>Take the first step in the ownership of your dream home today. Checkout our ownership options below.</p>
          </div>
        </div>
        <div className='real-estate-cards-div'>
          <div className='real-estate-cards'>
           <Image
              className=''
              src="/house.png"
              alt="lease plan"
              width="85px"
              height="80px"
            /> 
            <Link href='#'><a className='real-estate-cards-link'>Lease Plan</a></Link>
          </div>
          <div className='real-estate-cards'>
            <Image
              className=''
              src="/agreement.png"
              alt="flip plan"
              width="85px"
              height="80px"
            /> 
            <Link href='#'><a className='real-estate-cards-link'>Flip Plan</a></Link>
          </div>
          <div className='real-estate-cards'>
            <Image
              className=''
              src="/dollar-sign.png"
              alt="sell plan"
              width="85px"
              height="80px"
            /> 
            <Link href='#'><a className='real-estate-cards-link'>Houses Sells</a></Link>
          </div>
          <div className='real-estate-cards'>
            <Image
              className=''
              src="/plot.png"
              alt="plot sells"
              width="85px"
              height="80px"
            />
            <Link href='#'><a className='real-estate-cards-link'>Land sells</a></Link>
          </div>
        </div>
    </div>
  )
}

export default RealEstate