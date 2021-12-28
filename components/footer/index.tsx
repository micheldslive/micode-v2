import React from 'react';
import cx from 'classnames';
import style from 'assets/styles/footer.module.scss';

interface pageProps {
  page: number;
  setPage: any;
}

const Footer = function Footer({ page, setPage } : pageProps) {
    return (
      <>
        <footer className={ style.footer }>
          <nav>
            <ul>
              <li>
                <a href="#" onClick={ () => setPage(0) } className={ cx(style.section, { [style.active]: page === 0, }) } >
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={ () => setPage(100) } className={ cx(style.section, { [style.active]: page === 100, }) } >
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" onClick={ () => setPage(200) } className={ cx(style.section, { [style.active]: page === 200, }) } >
                  Projetos
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </>
    );
  };

  export default Footer;