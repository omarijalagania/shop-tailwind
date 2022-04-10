import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { images } from '../utils/navigation'

function Header() {
  return (
    <>
      {/* Mobile menu */}

      <header className='overflow-hidden'>
        {/* Top navigation */}
        {/* <Nav /> */}

        {/* Hero section */}

        {/* Decorative image grid */}
        <div className='flex justify-center mt-16'>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            dynamicHeight={true}
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  style={{ height: '604px' }}
                  className='object-cover aspect-square'
                  src={image.url}
                />
              </div>
            ))}
          </Carousel>
        </div>
        {/* Slider */}
      </header>
    </>
  )
}

export default Header
