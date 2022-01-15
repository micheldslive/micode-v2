import React, { ReactNode } from "react";
import style from "src/assets/styles/carousel.module.scss";
import { connect } from "react-redux";
import { State } from "src/reducer/types";
import { mapDispatchToProps, mapStateToProps } from "src/reducer/maps";

type CarouselProps = {
  children: ReactNode;
  state: State;
};

const Carousel = ({ children, state }: CarouselProps) => {
  const { page } = state;
  
  return (
    <div className={style.carousel}>
      <div className={style.controller} style={{ transform: `translateX(-${page}vw)` }} >
        {Array.isArray(children) ? (
          children.map((element) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
