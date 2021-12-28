import React from 'react';
import Image from 'next/image';
import style from 'assets/styles/projects.module.scss';

type CardProps = {
  number: number | string;
  name: string;
  url: any;
  link: string;
  desc: string;
};

const Card = function Card({ number, name, url, link, desc }: CardProps) {
  return (
    <a href={ link } target="_blank" rel="" className={ style.cardproject }>
      <div>
        <p className={ style.desc }>{ desc }</p>
        <span>{ name }</span>
        <h2>{ number }</h2>
      </div>
      <div>
        <picture>
          <Image quality={ 100 }  src={ url } width={ 300 } height={ 190 } layout="responsive" objectFit="cover" alt={ name } />
        </picture>
      </div>
    </a>
  );
};

export default Card;
