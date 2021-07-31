import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CarouselBrands = () => {

    const [brands, setBrands] = React.useState([]);

    React.useEffect(() => {

        const fetchBrands = async () => {
            const response = await fetch("/brands");
            const data = await response.json();
    
            setBrands(data);
        }

        fetchBrands();
    }, []);


    return (
        <Carousel
        autoPlay={true}
        interval={5000}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}>
        {
            brands.map(brand => {
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