import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bankingImg from '../public/pos-terminal-3.png'

function BankingAgency() {
  return (
    <div className='banking-agency-div' id="banking-agency-div">
      <div className='banking-agency-text'>
        <h1>Secure your financial future with ARETECOM LTD</h1>
        <p>Enroll in our Agency Banking today and get a POS machine delivered to your chosen location to start your business</p>
        <Link href=""><a className="enrol-btn">Entroll Now...</a></Link>
      </div>
      <div className='banking-agency-picture'>
        <Image
            className=""
            src={bankingImg}
            layout="responsive"
            alt="image"
        />
      </div>
    </div>
  )
}

export default BankingAgency