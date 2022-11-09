import React from 'react'
import CountUp from "react-countup";
import Image from 'next/image';

function HomeCounter() {

   
  return (
    <div className='countup-div'>
        <div>
            <p className='countup-top-text m-0'>ARETECOM LIMITED is the leading multisectoral 
                conglomerate in Africa with the <i> Corparate Affairs Commission</i> with a drive to compete effectively through innovation and 
                creativity in all sectors of business interest.
            </p>
            <p className='countup-top-text m-0'><span>Sp</span>Our interest is largely in delivering innovative, creative and excellence-driven services 
                and products for our customers satisfaction while consistently being transparent and expanding our client base as 
                well as international legacy.
            </p>
        </div>
        <div className='scrollTrigger-div'>
            <div className='countup'>
                <div className="svg-img">
                    <Image
                        src='/agriculture.svg'
                        alt="svg image"
                        objectFit='fill'
                        layout="fill"
                    />
                </div>
                <div className='countup-numb text-center'>
                  <CountUp start={0} end={3000} duration={6} delay={0} enableScrollSpy={true}/>
                    +
                </div>
                <p className='text-center counter-text'>Agricultural Produce Per Annum</p>
            </div>
            <div className='countup'>
               <div className="svg-img">
                <Image      
                    src='/handshake-deal-svgrepo-com.svg'
                    alt="svg image"
                    objectFit='fill'
                    layout="fill"
                    />
               </div>
            <div className='countup-numb text-center'>
                    <CountUp start={0} end={3000} duration={6} delay={0} enableScrollSpy={true} />
                    +
                </div>
                <p className='text-center counter-text'>Houses Built</p>
            </div>
            <div className='countup'>
                <div className="svg-img">
                    <Image
                        src="/happy-svgrepo-com.svg"
                        alt="svg image"
                        objectFit='fill'
                        layout="fill"
                    />
                </div>
                <div className='countup-numb text-center'>
                    <CountUp start={0} end={2500} duration={6} delay={0} enableScrollSpy={true}/>
                    +
                </div>
                <p className='text-center counter-text'>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default HomeCounter