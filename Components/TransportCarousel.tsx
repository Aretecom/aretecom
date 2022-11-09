import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

function IndividualIntervalsExample() {
  return (
    <Carousel className="transport-carousel"> 
      <Carousel.Item interval={2000} className="carousel-Item">
        <div className='img'>
          <Image
            src="/transport-4.jpg"
            alt="last slide"
            layout='fill'
            objectFit='fill'
            className='tp-img'
          />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1500}  className="carousel-Item">
        <div className='img'>
          <Image
            src="/transport-3.jpg"
            alt="last slide"
            layout='fill'
            objectFit='fill'
            className='tp-img'
          />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000} className="carousel-Item">
        <div className='img'>
          <Image
            src="/transport-2.jpg"
            alt="last slide"
            layout='fill'
            objectFit='fill'
            className='tp-img'
          />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}  className="carousel-Item">
        <div className='img'>
          <Image
            src="/transport-1.jpg"
            alt="last slide"
            layout='fill'
            objectFit='fill'
            className='tp-img'
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;