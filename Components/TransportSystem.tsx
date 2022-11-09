import React from 'react'
import Link from 'next/link'
import TransportCarousel from "../Components/TransportCarousel"

function TransportSystem() {
  return (
    <div className='transportSystem-div' id="transportSystem-div">
        <h1>Transportation Systems</h1>
        <p className='text-center'>We give out road transport assests like (Cars, Buses, Tricycles And Motorcycles ) on hire purchase to drivers.</p>
        <div className='transportsystem-card'>
            <div className='card-1'>
                <h1>Comprehensive Services</h1>
                <Link href="#"><a className='card-1-links'>Cars</a></Link>
                <Link href="#"><a className='card-1-links'>Buses</a></Link>
                <Link href="#"><a className='card-1-links'>Tricycles</a></Link>
                <Link href="#"><a className='card-1-links'>Motorcycles</a></Link>
            </div>
            <div className='card-2'>
                <TransportCarousel />
            </div>
        </div>
    </div>
  )
}

export default TransportSystem