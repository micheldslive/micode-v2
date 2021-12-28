import React, { useState } from 'react';
import type { NextPage } from 'next';
import style from 'assets/styles/global.module.scss';
import Carousel from 'components/carousel';
import Presentation from 'components/presentation';
import About from 'components/about';
import Projects from 'components/projects';
import Footer from 'components/footer';

const Home: NextPage = function Home() {
  const [page, setPage] = useState(0);

  return (
    <>
      <main className={ style.main }>
        <Carousel position={ -page }>
          <Presentation />
          <About />
          <Projects />
        </Carousel>
      </main>
      <Footer page={ page } setPage={ setPage } />
    </>
  );
};

export default Home;
