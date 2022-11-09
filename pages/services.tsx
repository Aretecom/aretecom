import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import serviceOne from '../public/services-1.jpg'
import consultingTwo from '../public/Consulting-2.png'
import CountUp from 'react-countup'
import Footer from '../Components/Footer-2'

function services() {
  return (
    <div className="services-div">
        <div className='partnership-div'>
           <div className="partnership-img-div">
                <Image
                    priority
                    className="partnership-img"
                    src={serviceOne}
                    layout="fill"
                    objectFit='fill'
                    alt="svg image"
                />
                <div className='partnership-text'>
                    <h1>Partnership with crowd and angel investors to incubate businesses</h1>
                    <p> Ace your business journey with a team of high-performers.Unique program designed to improve the chances of exceptional returns for angel investors.
                        Fund curated startups that are trained and investment-ready & ride on their growth.
                    </p>
                </div>
           </div>
        </div>
        <div className='services-top'>
            <div className='services-image row m-0'>
                <div className='services-image-text-div col-5 p-0'>
                    <div className='services-image-text'>
                        <h2>An Independent Consulting Company In Nigeria</h2>
                        <p> Our focus is to build a strong value chain system that will
                            crystallize all present and future businesses within the conglomerate portfolios.
                        </p>
                        <Link href='#'><a className='services-link'>Contact Us</a></Link>
                    </div>
                </div>
                <div className="img">
                    <Image
                        src={consultingTwo}
                        layout="fill"
                        objectFit='fill'
                        alt="image"
                    />
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="services-svg" viewBox="0 0 1440 320">
                <path fill="whitesmoke" fill-opacity="1" d="M0,128L40,160C80,192,160,256,240,256C320,256,400,192,480
                    ,165.3C560,139,640,149,720,170.7C800,192,880,224,960,224C1040,224,1120,192,1200,202.7C1280,213,
                    1360,267,1400,293.3L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,
                    320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,
                    320L0,320Z">
                </path>
            </svg>
        </div>
        <div className="services-scrollTrigger-div">
            <div className='services-countup '>
                <div className="services-svg-img">
                    <Image
                        src="/consulting-4.png"
                        layout='fill'
                        objectFit='fill'
                        alt="svg image"
                    />
                </div>
                <div className='services-countup-numb text-center'>
                    <CountUp start={0} end={5000} duration={5} delay={0} enableScrollSpy={true} />
                </div>
                <p className='text-center services-counter-text'>Businesses Developed</p>
            </div>
            <div className='services-countup '>
               <div className="services-svg-img">
                <Image
                    src="/consulting-6.png"
                    layout='fill'
                    objectFit='fill'
                    alt="svg image"
                    />
               </div>
            <div className='services-countup-numb text-center'>
                    <CountUp start={0} end={4230} duration={5} delay={0} enableScrollSpy={true} />
                </div>
                <p className='text-center services-counter-text'>Cups Of Coffee</p>
            </div>
            <div className='services-countup '>
                <div className="services-svg-img">
                    <Image
                        src="/happy-svgrepo-com.svg"
                        layout='fill'
                        objectFit='fill'
                        alt="svg image"
                    />
                </div>
                <div className='services-countup-numb text-center'>
                    <CountUp start={0} end={4950} duration={5} delay={0} enableScrollSpy={true} />
                </div>
                <p className='text-center services-counter-text'>Happy Clients</p>
            </div>
        </div>
        <div className='responsive-image-text'>
            <h2>An Independent Consulting Company In Nigeria</h2>
            <p> Our focus is to build a strong value chain system that will
                crystallize all present and future businesses within the conglomerate portfolios.
            </p>
            <Link href='#'><a className='services-link'>Contact Us</a></Link>
        </div>
        <div className='training-div'>
            <h1>Training Programs</h1>
            <div className='training-img-div'>
                <div className="training-svg-img">
                <Image
                    src="/trainingImg.webp"
                    objectFit='fill'
                    layout='fill'
                    alt="svg image"
                />
                </div>
                <div className='training-text'>
                    <h2>The authentic guide that helps you reach your destination faster</h2>
                    <p>
                        Are you a small scale business entrepreneur, confident of your prototype?<br></br>
                        Receive intensive grooming from leading mentors, get funded & break into your market.
                    </p>
                    <Link href='#'><a className='training-btn'>Enroll Now...</a></Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default services