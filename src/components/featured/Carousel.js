import React from 'react';
import Slider from 'react-slick'
import img1 from '../../resources/images/3.jpeg'
import img2 from '../../resources/images/2.jpeg'
import img3 from '../../resources/images/1.jpeg'
import img4 from '../../resources/images/4.jpeg'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div
            className='carrousel-wrapper'
            style={{
                overflow: 'hidden',
                height: `${window.innerHeight}px`
            }}>

            <Slider {...settings}>
                {[img1, img2, img3, img4].map(img =>
                    <div key={`${Math.random()}`}>
                        <div
                            className='carrousel_image'
                            style={{
                                background: `url(${img})`,
                                height: `${window.innerHeight}px`
                            }}
                        >
                        </div>
                    </div>
                )}

            </Slider>
        </div >
    );
};

export default Carousel;