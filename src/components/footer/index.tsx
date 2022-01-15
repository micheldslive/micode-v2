import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "src/reducer/maps";
import { ReduxType } from "src/reducer/types";
import cx from "classnames";
import style from "src/assets/styles/footer.module.scss";

const Footer = ({ state, setPage }: ReduxType) => {
  const { page } = state;

  return (
    <footer className={style.footer}>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={ () => setPage({page: 0}) } className={ cx(style.section, { [style.active]: page === 0, }) } >
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={ () => setPage({page: 100}) } className={ cx(style.section, { [style.active]: page === 100, }) } >
              Sobre
            </a>
          </li>
          <li>
            <a href="#" onClick={ () => setPage({page: 200}) } className={ cx(style.section, { [style.active]: page === 200, }) } >
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Footer);