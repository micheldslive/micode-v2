import React from "react";
import style from "assets/styles/carousel.module.scss";
import { useSelector } from "react-redux";
import { States } from "reducer/types";

type CarouselProps = {
  children: any;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const position = useSelector((state): States => state);

  return (
    <div className={style.carousel}>
      <div className={style.controller} style={{ transform: `translateX(-${position.page}vw)` }} >
        {Array.isArray(children) ? (
          children.map((element: any) => (
            <div className={style.panel} key={element.type.name}>
              {element}
            </div>
          ))
        ) : (
          <div className={style.panel}>{children}</div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
