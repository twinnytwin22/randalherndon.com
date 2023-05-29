import React from 'react';
import Slider from 'react-slick';

function BrandingPortfolio({ visibleItems }: any) {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };


    return (
        <div className='relative max-w-4xl mx-auto rounded-lg w-full'>
            <div className='relative gap-5 p-2.5'>


                {visibleItems.map((item: any) => (
                    <div key={item.title} className='relative mx-5'>
                        <h1>{item.title}</h1>
                        <Slider {...settings} className='relative z-50 w-full '>
                            {item.images.map((image: any, i: any) => (
                                <div key={i}>
                                    <img src={image} alt={item.title} className='p-6 max-h-96 mx-auto' />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default BrandingPortfolio;
