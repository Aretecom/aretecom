import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import agricTwo from "../public/agric-2.jpg";

function Agribusiness() {
  return (
    <div>
      <div className='agribusiness-card' id='agribusiness-card'>
        <div className='card-1'>
          <h1>Agribusinesses</h1>
          <div className='agri-images-div'>
            <div className='agri-image'>
              <div className="agric-img">
                <Image
                  src="/photo-2.jfif"
                  alt="image"
                  width="300"
                  height="300"
                  className='img'
                />
              </div>
              <h2>Cultivation</h2>
              <Link href='#'><a className='link'>Read More</a></Link>
            </div>
            <div className='agri-image'>
              <div className="agric-img">
                <Image
                  src="/agric-1.webp"
                  alt="image"
                  objectFit='contain'
                  layout='fill'
                  className='img'
                />
              </div>
              <h2>Warehouse</h2>
              <Link href='#'><a className='link'>Read More</a></Link>
            </div>
            <div className='agri-image'>
              <div className="agric-img">
                <Image
                  src={agricTwo}
                  alt="image"
                  objectFit='fill'
                  layout='fill'
                  className='img'
                  />
              </div>
              <h2>Produce Delivery</h2>
              <Link href='#'><a className='link'>Read More</a></Link>
            </div>
          </div>
        </div>
        <div className='card-2'></div>
      </div>
    </div>
  )
}

export default Agribusiness