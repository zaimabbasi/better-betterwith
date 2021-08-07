import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselBrands = (props) => {
    return (
        <Carousel
            autoPlay={true}
            interval={5000}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}>
            {
                props.data.map(brand => {
                    return (
                        <div>
                            <img
                                key={brand._id}
                                className="w-50"
                                src={`images/brands/${brand.img}`}
                                alt={brand.name}
                            />
                        </div>
                    );
                })
            }
        </Carousel>
    );
};

export default CarouselBrands;