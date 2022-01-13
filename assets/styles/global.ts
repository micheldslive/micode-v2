import { createGlobalStyle } from "styled-components";

interface Props {
  theme: any;
}

export default createGlobalStyle<Props>`
:root {
  --color-background: ${(props) => props.theme.background};
  --color-secundary-bg: ${(props) => props.theme.secundaryBg};
  --color-main-title: ${(props) => props.theme.mainTitle};
  --color-text: ${(props) => props.theme.text};
  --color-footer: ${(props) => props.theme.footer};
  --color-border: ${(props) => props.theme.border};
  --color-error: ${(props) => props.theme.error};
  --color-github: ${(props) => props.theme.github};
  --color-linkedin: ${(props) => props.theme.linkedin};

  --color-legs: ${(props) => props.theme.legs};
  --color-legs-in: ${(props) => props.theme.legsin};
  --color-notebook: ${(props) => props.theme.notebook};
  --color-milogo: ${(props) => props.theme.milogo};
  --font-title: "Rubik";
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  font-size: 2.8em;
}

h2 {
  color: #fff;
  text-align: center;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  list-style: none;
  text-decoration: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

nav {
    a.logo {
      svg {
        width: 150px;
        margin-left: 1.2em;
        path.mi-code_svg__name {
          fill: var(--color-main-title);
          transition: 0.2s;
        }
      }
    }
}


/* ----------------- COLORS DEV --------------------- */

#path228, #path220 {
  fill: var(--color-legs);
}

#path186 {
  fill: var(--color-legs-in);
}

#path206 {
  fill: var(--color-notebook);
}

#path215 {
  fill: var(--color-milogo);
}
/* ------------------------------------------------- */


::-webkit-scrollbar {
  width: 4px;
  border-radius: 3px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #dad7d72c;
  border-radius: 3px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 3px;
}

::-webkit-scrollbar {
  display: none;
}

/* Animations */

#eyeb {
  transform: translateY(-9px);
  animation: eyeb 5s linear infinite;
}

@keyframes eyeb {
  0% {
    transform: translateY(-10);
    -ms-transform: translateY(-10);
    -moz-transform: translateY(-10);
  }

  25% {
    transform: translateY(0px);
    -ms-transform: translateY(0px);
    -moz-transform: translateY(0px);
  }

  75% {
    transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
  }

  100% {
    transform: translateY(10);
    -moz-transform: translateY(10);
    -ms-transform: translateY(10);
  }
}

#mouth {
  transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  -moz-transform: translateY(-5px);
  animation: mouth 5s linear infinite;
}

@keyframes mouth {
  0% {
    transform: translateY(-10);
    -ms-transform: translateY(-10);
    -moz-transform: translateY(-10);
  }

  25% {
    transform: translateY(0px);
    -ms-transform: translateY(0px);
    -moz-transform: translateY(0px);
  }

  75% {
    transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
  }

  100% {
    transform: translateY(10);
    -moz-transform: translateY(10);
    -ms-transform: translateY(10);
  }
}

#eyey2 {
  transform: translateX(-2px);
  -moz-transform: translateX(-2px);
  -ms-transform: translateX(-2px);
  animation: eyey2 4s linear infinite;
}

@keyframes eyey2 {
  0% {
    transform: translateX(-2);
    -ms-transform: translateX(-2);
    -moz-transform: translateX(-2);
  }

  25% {
    transform: translateX(2px);
    -moz-transform: translateX(2px);
    -ms-transform: translateX(2px);
  }

  75% {
    transform: translateX(-2px);
    -ms-transform: translateX(-2px);
    -moz-transform: translateX(-2px);
  }

  100% {
    transform: translateX(2);
    -ms-transform: translateX(2);
    -moz-transform: translateX(2);
  }
}

#notebook {
  transform: translateY(-4px);
  -moz-transform: translateY(-4px);
  -ms-transform: translateY(-4px);
  animation: notebook 6s linear infinite;
}

@keyframes notebook {
  0% {
    transform: translateY(-4);
  }

  25% {
    transform: translateY(0px);
  }

  75% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(4);
  }
}

#legs {
  transform: translateY(-9px);
  animation: legs 6s infinite;
}

@keyframes legs {
  0% {
    transform: translateY(-10);
    -ms-transform: translateY(-10);
    -moz-transform: translateY(-10);
  }

  25% {
    transform: translateY(0px);
    -ms-transform: translateY(0px);
    -moz-transform: translateY(0px);
  }

  75% {
    transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
  }

  100% {
    transform: translateY(10);
    -moz-transform: translateY(10);
    -ms-transform: translateY(10);
  }
}

#pe {
  animation: pe 6s infinite;
}

@keyframes pe {
  0% {
    transform: rotateX(2deg);
    -ms-transform: rotateX(2deg);
    -moz-transform: rotateX(2deg);
  }
}

#shirt {
  transform: translateY(-9px);
  -ms-transform: translateY(-9px);
  -moz-transform: translateY(-9px);
  animation: shirt 6s infinite;
}

@keyframes shirt {
  0% {
    transform: translateY(-10);
    -ms-transform: translateY(-10);
    -moz-transform: translateY(-10);
  }

  25% {
    transform: translateY(0px);
    -ms-transform: translateY(0px);
    -moz-transform: translateY(0px);
  }

  75% {
    transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
  }

  100% {
    transform: translateY(10);
    -moz-transform: translateY(10);
    -ms-transform: translateY(10);
  }
}

#tshirt {
  transform: translateY(-9px);
  -ms-transform: translateY(-9px);
  -moz-transform: translateY(-9px);
  animation: tshirt 6s infinite;
}

@keyframes tshirt {
  0% {
    transform: translateY(-10);
    -ms-transform: translateY(-10);
    -moz-transform: translateY(-10);
  }

  25% {
    transform: translateY(0px);
    -ms-transform: translateY(0px);
    -moz-transform: translateY(0px);
  }

  75% {
    transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
  }

  100% {
    transform: translateY(10);
    -moz-transform: translateY(10);
    -ms-transform: translateY(10);
  }
}

#head {
  transform: translateY(-9px);
  -ms-transform: translateY(-9px);
  -moz-transform: translateY(-9px);
  animation: head 6s infinite;
}

@keyframes head {
  0% {
    transform: translateY(-8);
  }

  25% {
    transform: translateY(0px);
  }

  75% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(8);
  }
}

#ears {
  animation: ears 6s linear infinite;
}

@keyframes ears {
  0% {
    transform: translateY(-10);
    -ms-transform: translateY(-10);
    -moz-transform: translateY(-10);
  }

  25% {
    transform: translateY(0px);
    -ms-transform: translateY(0px);
    -moz-transform: translateY(0px);
  }

  75% {
    transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
  }

  100% {
    transform: translateY(10);
    -moz-transform: translateY(10);
    -ms-transform: translateY(10);
  }
}

#brows {
  animation: brows 6.1s linear infinite;
}

@keyframes brows {
  0% {
    transform: scale(0.96);
  }

  25% {
    transform: scale(1);
  }

  75% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.96);
  }
}
`;
