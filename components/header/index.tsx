import React, { useState, useRef } from 'react';
import cx from 'classnames';
import style from 'assets/styles/header.module.scss';
import OutSideClick from 'hooks/OutSideClick';

const Header = function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const ref = useRef(null);

  OutSideClick(ref, () => setMenuStatus(false));

  function handleClickMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setMenuStatus(!menuStatus);
  }

  return (
    <header className={ style.header }>
      <nav>
        <a href="/">
          <svg className={ style.logo } version="1.1" x="0px" y="0px" viewBox="-849 974 300 53">
            <g>
              <path fill="#fff" d="M-579.2,997.6c-1.2-3.3-3.8-6-7.1-7.1c-1.2-0.4-2.5-0.7-3.9-0.7h-7.8c-1.4,0-2.7,0.2-3.9,0.7
                c-3.3,1.2-6,3.8-7.1,7.1c-0.4,1.2-0.7,2.5-0.7,3.9v11.7c0,1.4,0.2,2.7,0.7,3.9c1.2,3.3,3.8,6,7.1,7.1c1.2,0.4,2.5,0.7,3.9,0.7h11.7
                c2.2,0,3.9-1.7,3.9-3.9s-1.7-3.9-3.9-3.9c-0.2,0-0.5,0-0.7,0.1c0,0,0,0,0-0.1h-11c-2.2,0-3.9-1.7-3.9-3.9h11.7
                c1.4,0,2.7-0.2,3.9-0.7l0,0c3.3-1.2,6-3.8,7.1-7.1c0.4-1.2,0.7-2.5,0.7-3.9S-578.7,998.8-579.2,997.6z M-589.3,1005.3
                C-589.3,1005.3-589.3,1005.4-589.3,1005.3l-8.6,0.1c-1.9,0-3.5-1.4-3.8-3.3l0,0l0,0v-0.7c0-2.2,1.7-3.9,3.9-3.9h7.8
                c2.2,0,3.9,1.7,3.9,3.9C-586.3,1003.4-587.6,1004.9-589.3,1005.3z"/>
              <path fill="#fff" d="M-619.2,974.2c-2.2,0-3.9,1.7-3.9,3.9v12.4c-1.2-0.4-2.5-0.7-3.9-0.7h-7.8
                c-1.4,0-2.7,0.2-3.9,0.7c-3.3,1.2-6,3.8-7.1,7.1c-0.4,1.2-0.7,2.5-0.7,3.9v11.7c0,1.4,0.2,2.7,0.7,3.9c1.2,3.3,3.8,6,7.1,7.1
                c1.2,0.4,2.5,0.7,3.9,0.7h7.8c1.4,0,2.7-0.2,3.9-0.7c3.3-1.2,6-3.8,7.1-7.1c0.4-1.2,0.7-2.5,0.7-3.9v-35.1
                C-615.3,975.9-617,974.2-619.2,974.2z M-623.1,1013.2c0,2.2-1.7,3.9-3.9,3.9h-7.8c-2.2,0-3.9-1.7-3.9-3.9v-11.7
                c0-2.2,1.7-3.9,3.9-3.9h7.8c2.2,0,3.9,1.7,3.9,3.9V1013.2z"/>
              <path fill="#fff" d="M-652.7,997.6c-1.2-3.3-3.8-6-7.1-7.1c-1.2-0.4-2.5-0.7-3.9-0.7h-7.8c-1.4,0-2.7,0.2-3.9,0.7
                c-3.3,1.2-6,3.8-7.1,7.1c-0.4,1.2-0.7,2.5-0.7,3.9v11.7c0,1.4,0.2,2.7,0.7,3.9c1.2,3.3,3.8,6,7.1,7.1c1.2,0.4,2.5,0.7,3.9,0.7h7.8
                c1.4,0,2.7-0.2,3.9-0.7c3.3-1.2,6-3.8,7.1-7.1c0.4-1.2,0.7-2.5,0.7-3.9v-11.7C-652,1000.1-652.3,998.8-652.7,997.6z M-659.8,1013.2
                c0,2.2-1.7,3.9-3.9,3.9h-7.8c-2.2,0-3.9-1.7-3.9-3.9v-11.7c0-2.2,1.7-3.9,3.9-3.9h7.8c2.2,0,3.9,1.7,3.9,3.9V1013.2z"/>
              <path fill="#fff" d="M-688.8,1021c0,2.2-1.7,3.9-3.9,3.9h-15.6c-1.4,0-2.7-0.2-3.9-0.7c-3.3-1.2-6-3.8-7.1-7.1
                c-0.4-1.2-0.7-2.5-0.7-3.9v-11.7c0-1.4,0.2-2.7,0.7-3.9c1.2-3.3,3.8-6,7.1-7.1c1.2-0.4,2.5-0.7,3.9-0.7h15.6c2.2,0,3.9,1.7,3.9,3.9
                s-1.7,3.9-3.9,3.9h-15.6c-2.2,0-3.9,1.7-3.9,3.9v11.7c0,2.2,1.7,3.9,3.9,3.9h15.6C-690.6,1017.1-688.8,1018.8-688.8,1021z"/>
              <path fill="#fff" d="M-764.8,1001.5v19.5c0,2.2-1.7,3.9-3.9,3.9s-3.9-1.7-3.9-3.9v-19.5c0-2.2-1.7-3.9-3.9-3.9
                h-7.8c-2.2,0-3.9,1.7-3.9,3.9v19.5c0,2.2-1.7,3.9-3.9,3.9c-2.2,0-3.9-1.7-3.9-3.9v-19.5c0-2.2-1.7-3.9-3.9-3.9h-7.8
                c-2.2,0-3.9,1.7-3.9,3.9v19.5c0,2.2-1.7,3.9-3.9,3.9c-2.2,0-3.9-1.7-3.9-3.9v-19.5c0-1.4,0.2-2.7,0.7-3.9c1.2-3.3,3.8-6,7.1-7.1
                c1.2-0.4,2.5-0.7,3.9-0.7h7.8c1.4,0,2.7,0.2,3.9,0.7c1.5,0.5,2.8,1.3,3.9,2.3c1.1-1,2.4-1.8,3.9-2.3c1.2-0.4,2.5-0.7,3.9-0.7h7.8
                c1.4,0,2.7,0.2,3.9,0.7c3.3,1.2,6,3.8,7.1,7.1C-765,998.8-764.8,1000.1-764.8,1001.5z"/>
              <path fill="#fff" d="M-751.4,993.7v27.3c0,2.2-1.7,3.9-3.9,3.9s-3.9-1.7-3.9-3.9v-27.3c0-2.2,1.7-3.9,3.9-3.9
                S-751.4,991.5-751.4,993.7z"/>
              <path fill="#30BE00" d="M-738.7,1025.6l13.7-35.1c0.4-1-0.1-2.1-1.1-2.5l0,0c-1-0.4-2.1,0.1-2.5,1.1l-13.7,35.1
                c-0.4,1,0.1,2.1,1.1,2.5l0,0C-740.2,1027.1-739.1,1026.6-738.7,1025.6z"/>
              <path fill="#30BE00" d="M-844.4,1007.5l15.9-15.9c0.8-0.8,0.8-2,0-2.7c-0.8-0.8-2-0.8-2.7,0l-17.2,17.2c-0.4,0.4-0.6,0.9-0.6,1.5
                c0,0.5,0.2,1,0.6,1.5l17.2,17.1c0.7,0.8,1.9,0.8,2.7,0c0.8-0.7,0.8-1.9,0-2.7L-844.4,1007.5z"/>
              <path fill="#30BE00" d="M-549.6,1006.1l-17.2-17.2c-0.7-0.8-1.9-0.8-2.7,0c-0.8,0.7-0.8,1.9,0,2.7l15.9,15.9l-15.9,15.9
                c-0.8,0.8-0.8,2,0,2.7c0.8,0.8,2,0.8,2.7,0l17.2-17.1c0.4-0.4,0.6-0.9,0.6-1.5C-549,1007-549.2,1006.5-549.6,1006.1z"/>
              <circle fill="#30BE00" cx="-755.3" cy="978.1" r="3.9"/>
            </g>
          </svg>
        </a>
        <ul>
          <li>
            <a href="https://github.com/micheldslive" target="_blank" aria-label="github" rel="">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/micheldslive/" target="_blank" aria-label="linkedin" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 21 20" color="white" role="img">
                <title>LinkedIn</title>
                <path fillRule="evenodd" clipRule="evenodd" d="M.936 2.184C.5 3.04.5 4.16.5 6.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 001.748 1.748C3.54 20 4.66 20 6.9 20h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 001.748-1.748c.436-.856.436-1.976.436-4.216V6.4c0-2.24 0-3.36-.436-4.216A4 4 0 0018.316.436C17.46 0 16.34 0 14.1 0H6.9C4.66 0 3.54 0 2.684.436A4 4 0 00.936 2.184zm3.73 4.483v9.166h2.5V6.667h-2.5zM4.459 4.14c0 .812.654 1.47 1.459 1.47.806 0 1.458-.658 1.458-1.47 0-.812-.653-1.47-1.458-1.47-.805 0-1.458.658-1.458 1.47zm10.209 11.693h2.5v-5.632c0-4.378-4.67-4.219-5.834-2.064v-1.47h-2.5v9.166h2.5v-4.67c0-2.594 3.334-2.806 3.334 0v4.67z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className={ style.menu }>
          <a href="#" onClick={ handleClickMenu } ref={ ref } aria-label="Menu">
            <span className={ cx(style.icomn, { [style.active]: menuStatus, }) } />
          </a>
          <div className={ cx(style.dropmn, { [style.active]: menuStatus, }) }>
            <ul>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                </svg>
                <a href="https://github.com/micheldslive/micode-v2/raw/master/download/Michel-Domingos.pdf" download rel="">Download CV</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
