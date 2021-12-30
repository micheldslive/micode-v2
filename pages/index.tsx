import React, { useState } from "react";
import type { NextPage } from "next";
import style from "assets/styles/global.module.scss";
import Carousel from "components/carousel";
import Presentation from "components/presentation";
import About from "components/about";
import Projects from "components/projects";
import Header from "components/header";
import Footer from "components/footer";
import { ThemeProvider } from "styled-components";
import { themes } from "assets/styles/theme";
import GlobalStyle from "assets/styles/global";


const Home: NextPage = function Home() {
  const [page, setPage] = useState<any>(0);
  const [change, setChange] = useState<any>(0);
  const theme = themes[change];

  return (
    <>
    <Header change={change} setChange={setChange} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main className={style.main}>
          <Carousel position={-page}>
            <Presentation />
            <About />
            <Projects />
          </Carousel>
        </main>
        <Footer page={page} setPage={setPage} />
      </ThemeProvider>
    </>
  );
};

export default Home;
