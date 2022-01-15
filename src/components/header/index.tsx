import React from "react";
import { ReduxType } from "src/reducer/types";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "src/reducer/maps";
import Logo from "src/assets/images/mi-code.svg";
import Github from "src/assets/images/github.svg";
import Linkedin from "src/assets/images/linkedin.svg";
import Sun from "src/assets/images/sun.svg";
import Moon from "src/assets/images/moon.svg";
import cx from "classnames";
import style from "src/assets/styles/header.module.scss";

const Header = ({ state, setChange, setMenu }: ReduxType) => {
  const { change, menu } = state,
    handleClickMenu = (event: { preventDefault: () => void }) => {
      event.preventDefault();
      setMenu({ menu: !menu });
    };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav>
          <a href="/" className="logo">
            <Logo />
          </a>
          <ul>
            <li>
              <a href="https://github.com/micheldslive" target="_blank" aria-label="github" rel="">
                <Github />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/micheldslive/" target="_blank" aria-label="linkedin" rel="">
                <Linkedin />
              </a>
            </li>
          </ul>
          <div className={style.menu}>
            <a
              className={style.theme}
              href="#"
              onClick={() => setChange({ change: Number(!change) })}
            >
              {change ? (
                <Moon />
              ) : (
                <Sun />
              )}
            </a>
            <a href="#" onClick={handleClickMenu} aria-label="Menu">
              <span className={cx(style.icomn, { [style.active]: menu })} />
            </a>
            <div className={cx(style.dropmn, { [style.active]: menu })}>
              <ul>
                <li>
                  <a href="https://github.com/micheldslive/micode-v2/raw/master/download/Michel-Domingos.pdf" download rel="">
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
