import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer'>
        <div className='waves'>
            <div className='wave' id='wave1'></div>
            <div className='wave' id='wave2'></div>
            <div className='wave' id='wave3'></div>
            <div className='wave' id='wave4'></div>
        </div>
        <div className='footer_link_div'>
            <div className='footer_business_div'>
              <h4>Our Businesses</h4>
              <span>
                <Link href="#action0"><a className='footer_link'>Agribusiness</a></Link>
                <Link href="#action0"><a className='footer_link'>Real Estate</a></Link>
                <Link href="#action0"><a className='footer_link'>Agency Banking</a></Link>
                <Link href="#action0"><a className='footer_link'>Transportation Systems</a></Link>
              </span>
            </div>
            <div className='footer_services_div'>
                <h4>Our Services</h4>
                <span>
                  <Link href="#action0"><a className='footer_link'>Training Programs</a></Link>
                  <Link href="#action0"><a className='footer_link'>Business Consultation</a></Link>
                  <Link href="#action0"><a className='footer_link'>Advisory Roles To Business On Our Portfolio</a></Link>
                  <Link href="#action0"><a className='footer_link'>Partnership with Crowd and Angel investors to incubate Business</a></Link>
                </span>
            </div>
            <div className='footer_social_div'>
              <h4>Contact Us</h4>
              <ul className='social_icons'>
                <a href='#'><i className="bi bi-instagram"></i></a>
                <a href='#'><i className="bi bi-facebook"></i></a>
                <a href='#'><i className="bi bi-twitter"></i></a>
                <a href='#'><i className="bi bi-envelope"></i></a>
              </ul>
            </div>
        </div>
        <div className='copy_right'>
          <h1>All Rights Reserved - StarTech Sites</h1>
        </div>
    </div>
  )
}

export default Footer