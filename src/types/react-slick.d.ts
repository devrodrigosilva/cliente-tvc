declare module 'react-slick' {
  import * as React from 'react';

  interface ResponsiveObject {
    breakpoint: number;
    settings: 'unslick' | Settings;
  }

  export interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    className?: string;
    dots?: boolean;
    draggable?: boolean;
    easing?: string;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: 'ondemand' | 'progressive';
    rtl?: boolean;
    slide?: string;
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    afterChange?: (currentSlide: number) => void;
    responsive?: ResponsiveObject[];
  }

  export default class Slider extends React.Component<Settings> {}
}
