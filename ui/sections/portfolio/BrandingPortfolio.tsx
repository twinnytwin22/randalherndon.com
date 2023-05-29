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
        <div className='relative'>
            <div className='grid grid-cols-5 relative gap-5 p-2.5'>
                <div className='col-span-3'>
                    {visibleItems.map((item: any) => (
                        <div key={item.title} className='relative mx-5'>
                            <Slider {...settings} className='relative z-50 w-full'>
                                {item.images.map((image: any, i: any) => (
                                    <div key={i}>
                                        <img src={image} alt={item.title} className='p-6' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ))}
                </div>
                <div className='m-5 col-span-2'>
                    {visibleItems.map((item: any) => (
                        <div key={item.title}>

                            <h1>{item.title}</h1>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrandingPortfolio;
