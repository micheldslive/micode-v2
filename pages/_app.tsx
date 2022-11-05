import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/reducer/store'
import '@/assets/styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Michel Domingos</title>
        <meta name='description' content='Portfólio <mi/code>' />
        <meta property='og:title' content='Michel' />
        <meta property='og:description' content='Portfólio micheldslive' />
        <meta property='og:url' content='https://mi-code.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://mi-code.vercel.app/ogimage.svg'
        />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:title'
          content='micode'
        />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:type'
          content='Portfolio'
        />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:image'
          content='https://mi-code.vercel.app/ogimage.svg'
        />
        <meta
          prefix='og: http://ogp.me/ns#'
          property='og:url'
          content='https://mi-code.vercel.app/'
        />
        <meta
          name='linkedin:url'
          content='https://www.linkedin.com/in/micheldslive/'
        />
        <meta name='github:url' content='https://github.com/micheldslive/' />
        <meta name='author' content='Michel' />
        <meta name='title' content='Michel' />
        <meta
          name='keywords'
          content='Michel, michel, micheldslive, michelds, Michel Domingos'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
