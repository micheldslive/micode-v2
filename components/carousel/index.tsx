import React from 'react';
import style from 'assets/styles/carousel.module.scss';

type CarouselProps = {
  position: number;
  children: any;
};

const Carousel: React.FC<CarouselProps> = ({ position, children }) => {
  return (
    <div className={ style.carousel }>
      <div className={ style.controller } style={ { transform: `translateX(${position}vw)` } }>
        {Array.isArray(children) ? (
          children.map((element: any) => (
            <div className={ style.panel } key={ element.type.name }>
              { element }
            </div>
          ))
        ) : (
          <div className={ style.panel }>{ children }</div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
