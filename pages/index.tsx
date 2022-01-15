import React from "react";
import style from "src/assets/styles/global.module.scss";
import Carousel from "src/components/carousel";
import Presentation from "src/components/presentation";
import About from "src/components/about";
import Projects from "src/components/projects";
import Header from "src/components/header";
import Footer from "src/components/footer";
import { ThemeProvider } from "styled-components";
import { themes } from "src/assets/styles/themes";
import GlobalStyle from "src/assets/styles/global";
import { connect } from "react-redux";
import { mapStateToProps } from "src/reducer/maps";
import { ReduxType } from "src/reducer/types";

const Home = ({ state }: ReduxType) => {
  const { change } = state;
  const theme = themes[change as number];

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main className={style.main}>
          <Carousel>
            <Presentation />
            <About />
            <Projects />
          </Carousel>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default connect(mapStateToProps)(Home);
