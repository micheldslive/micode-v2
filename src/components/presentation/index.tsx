import React from 'react';
import Typed from 'react-typed';
import Dev from 'src/components/devImage';
import style from 'src/assets/styles/presentation.module.scss';

const Presentation = () => {
  const positions = [
    "Front End Developer",
    "Back End Developer",
    "Software Developer",
  ];
  return (
    <section className={style.presentation}>
      <div className={style.me}>
        <p></p>
        <div>
          <span>Olá, sou o </span>
          <span>Michel</span>
          <span>!</span>
        </div>
        <p>
          <Typed strings={ positions } typeSpeed={ 80 } backDelay={ 1100 } backSpeed={ 30 } loop />
        </p>
      </div>
      <picture>
        <Dev />
      </picture>
    </section>
  );
};

export default Presentation;
