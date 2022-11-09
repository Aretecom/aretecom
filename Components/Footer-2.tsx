import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer-2'>
        <div className='footer_social_div'>
            <h1>Stay connected with on social networks:</h1>
            <ul className='social_icons'>
                <a href='#'><i className="bi bi-instagram"></i></a>
                <a href='#'><i className="bi bi-facebook"></i></a>
                <a href='#'><i className="bi bi-twitter"></i></a>
                <a href='#'><i className="bi bi-whatsapp"></i></a>
                <a href='#'><i className="bi bi-google"></i></a>
                <a href='#'><i className="bi bi-github"></i></a>
            </ul>
        </div>
        <div className='footer_link_div'>
            <div className='company_name'>
                <h4>Aretecom LTD</h4>
                <p>Our interest is largely in delivering innovative, creative and excellence-driven services 
                and products for our customers satisfaction while consistently being transparent and expanding our client base as 
                well as international legacy.</p>
            </div>
            <div className='footer_business_div'>
              <h4>Our Businesses</h4>
              <span>
                <Link href="/our_business/#agribusiness-card"><a className='footer_link'>Agribusiness</a></Link>
                <Link href="/our_business/#real-estate-div"><a className='footer_link'>Real Estate</a></Link>
                <Link href="/our_business/#banking-agency-div"><a className='footer_link'>Agency Banking</a></Link>
                <Link href="/our_business/#transportSystem-div"><a className='footer_link'>Transportation Systems</a></Link>
              </span>
            </div>
            <div className='footer_useful_links_div'>
                <h4>Useful Links</h4>
                <span>
                  <Link href="https://jakesglobal.digitalpress.blog"><a className='footer_link'>Blog</a></Link>
                  <Link href="/services"><a className='footer_link'>Our Services</a></Link>
                  <Link href="/about"><a className='footer_link'>About Us</a></Link>
                  <Link href="#"><a className='footer_link'>Back To Top</a></Link>
                </span>
            </div>
        </div>
        <div className='copy_right'>
          <h1>All Rights Reserved - StarTech Sites</h1>
        </div>
    </div>
  )
}

export default Footer