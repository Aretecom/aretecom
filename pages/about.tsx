import React from 'react'
import Footer from '../Components/Footer-2'
import Image from 'next/image'
import aboutImg from '../public/about-1.jpg'
function about() {
  return (
    <>
        <div className='about-page'>
            <div className='about-top-div'>
                <div className='about-img-div'>
                    <Image
                        className="about-img"
                        src={aboutImg}
                        layout="responsive"
                        alt="svg image"
                    />
                </div>
                <div className='about-top-text-div'>
                    <h2>About Us</h2>
                    <p>
                        Jakes Global Ltd is the leading multisectoral conglomerate in Africa with a drive to 
                        compete effectively through innovation and creativity in all sectors of business interest.
                    </p>
                    <p>    
                        Our interest is largely in delivering innovative, creative and excellence-driven services
                        and products for customers satisfaction while consistently being transparent and 
                        expanding our client base as well as international legacy.
                    </p>
                </div>
                <div className='card-1-div'>
                    <div className='vission-card'>
                        <h3>Our Vision</h3>
                        <p>To be the leading multisectoral conglomerate in Africa and beyond through the delivery of innovative,
                            creative and excellence aproach in service and product delivery across diffrent sectors
                        </p>
                    </div>
                </div>
                <div className='card-2-div'>
                    <div className='core-div'>
                        <h2>Our Core Values</h2>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Creativity</li>
                        <li>Excellence</li>
                    </div>
                </div>
            </div>
            <div className='resp-card'>
                <div className='vission-card'>
                    <h3>Our Vision</h3>
                    <p>To be the leading multisectoral conglomerate in Africa and beyond through the delivery of innovative,
                        creative and excellence aproach in service and product delivery across diffrent sectors
                    </p>
                </div>
            </div>
            <div className='about-second-div'>
                <h1>Our Mission</h1>
                <div className='mission-card-div'>
                    <div className='cards'>
                        <p>
                            To compete effectively through innovation and creativity in all sectors of business
                            interest.
                        </p>
                    </div>
                    <div className='cards'>
                        <p>
                        To build a strong value chain system that will crystallize all present and future  
                        businesses within the conglomerate portfolios. 
                        </p>
                    </div>
                    <div className='cards'>
                        <p>
                            To dominate and decide the future of each business sector 
                            through the recruitment and retention of a highly qualified and dynamic workforce.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default about