import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link'
import Image from 'next/image'

function CarouselFadeExample() {
  return (
    <>
      <Carousel fade className='carousel-large d-md-block pt-3'>
        <Carousel.Item className=''>
          <div className="d-block w-100 carousel-1">
            <Image
              priority
              src="/carousel-1.jpg"
              objectFit='fill'
              layout='fill'
              alt="First slide"
              />
          </div>
          <Carousel.Caption className="carousel-captions-1">
            <h3>Agribusiness</h3>
            <p className="">Discover More About Our Agricultural Strategies, Outsource, 
                Storage Options, Distribution Of Agricultural Products & More...</p>
            <Link href="/our_business/#agribusiness-card">
              <a className='learn-btn'>Learn More...</a>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className=''>
          <div className="d-block w-100 carousel-2">
            <Image
              src="/carousel-2.jpg"
              objectFit='fill'
              layout='fill'
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className="carousel-captions-2">
            <h3>Teamwork</h3>
            <p className='text-start'>We communicate and collaborate effectively with one another and with our partners to
               ensure maximum customers/clients satisfaction.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className=''>
          <div className="d-block w-100 carousel-3">
            <Image
              priority
              src="/advert-36.jpg"
              objectFit='fill'
              layout='fill'
              alt="Third slide"
            />
          </div>
          <Carousel.Caption className="carousel-captions-3">
            <h3>Excellence</h3>
            <p className='text-start'>We are excellence driven individuals who are thrilled and always inspired to produce excellent results.
              We maintain high level of excellence by providing our clients/customers with exceptional services that will guarantee 
              100% satisfaction and comfort.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className=''>
         <div className="d-block w-100 carousel-3">
          <Image
              src="/carousel-3.jpg"
              objectFit='fill'
              layout='fill'
              alt="Fort slide"
            />
         </div>
          <Carousel.Caption className="carousel-captions-3">
            <h3>Competence</h3>
            <p className="text-start">We are highly skilled, dedicated and diverse workforce that is empowered to achieve outstanding results.
              Introducing our modern warehouses and delivary options, Our clients can now rest assured of their produce 
              in the perfect hands.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className=''>
          <div className="d-block w-100 carousel-2">
            <Image
              src="/carousel-4.jpg"
              objectFit='fill'
              layout='fill'
              alt="Fift slide"
            />
          </div>
          <Carousel.Caption className="carousel-captions-5">
            <h3>Choose Your Dream Home With Our Specialists</h3>
            <p>
              We communicate with our clients, understand them and assist them own their dream homes with comfort and budget friedly because
               we at <b>Aretecom LTD</b> adhere apparently on 90-100% produtivity.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel fade className='carousel-small d-md-none'>
      <Carousel.Item className='carousel-res'>
        <div className="carousel-smal">
          <Image
            priority
            src="/carousel-5.png"
            objectFit='fill'
            layout='fill'
            alt="First slide"
            
          />
        </div>
        <Carousel.Caption className="carousel-captions-1">
          <h3 className="text-start">Agribusiness</h3>
          <p className="text-start">Discover More About Our Agricultural Strategies, Outsource, 
              Storage Options, Distribution Of Agricultural Products & More...</p>
          <Link href="#action">
            <a className='learn-btn'>Learn More...</a>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-res'>
        <div className="carousel-smal">
          <Image
            priority
            src="/carousel-7.jpg"
            objectFit='fill'
            layout='fill'
            alt="First slide"
          />
        </div>  
        <Carousel.Caption  className="carousel-captions-2">
          <h3>Teamwork</h3>
          <p className='text-start'>We communicate and collaborate effectively with one another and with our partners to
              ensure maximum customers/clients satisfaction.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-res'>
        <div className="carousel-smal">
          <Image
            priority
            src="/carousel-8.webp"
            objectFit='fill'
            layout='fill'
            alt="First slide"
          />
        </div> 
        <Carousel.Caption className="carousel-captions-3">
          <h3 className="">Choose Your Dream Home With Our Specialists</h3>
          <p className="text-start">
            We communicate with our clients, understand them and assist them own their dream homes with comfort and budget friedly because
              we at <b>Aretecom LTD</b> adhere apparently on 90-100% produtivity.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-res'>
        <div className="d-block carousel-smal">
          <Image
            src="/advert-36.jpg"
            objectFit='fill'
            layout='fill'
            alt="First slide"
          />
        </div> 
        <Carousel.Caption className="carousel-captions-4">
          <h3 className='text-start'>Excellence</h3>
          <p className='text-start'>We are excellence driven individuals who are thrilled and always inspired to produce excellent results.
            We maintain high level of excellence by providing our clients/customers with exceptional services that will guarantee 
            100% satisfaction and comfort.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}

export default CarouselFadeExample;