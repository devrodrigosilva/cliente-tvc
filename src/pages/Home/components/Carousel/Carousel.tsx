import React from 'react';
import Slider, { Settings } from 'react-slick';
import { Item, Banner } from './Carousel.styles';

const Carousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Item>
          <Banner src={'https://p4ulo3dson.com/tvc/assets/banner1.jpg'} />
        </Item>
        <Item>
          <Banner src={'https://p4ulo3dson.com/tvc/assets/banner2.jpg'} />
        </Item>
        <Item>
          <Banner src={'https://p4ulo3dson.com/tvc/assets/banner3.jpg'} />
        </Item>
      </Slider>
    </div>
  );
};

export default Carousel;
