import React from 'react'
import { connect } from 'react-redux'
import style from '@/assets/styles/global.module.scss'
import Carousel from '@/components/carousel'
import Presentation from '@/components/presentation'
import About from '@/components/about'
import Projects from '@/components/projects'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from 'styled-components'
import { themes } from '@/assets/styles/themes'
import GlobalStyle from '@/assets/styles/global'
import { mapStateToProps } from '@/reducer/maps'
import { ReduxType } from '@/reducer/types'

function Home({ state }: ReduxType) {
  const { change } = state
  const theme = themes[change as number]

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
  )
}

export default connect(mapStateToProps)(Home)
