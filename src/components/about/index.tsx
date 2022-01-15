import React from "react";
import Parser from "html-react-parser";
import { skills } from "src/services/skills";
import style from "src/assets/styles/about.module.scss";
import HTML from "src/assets/skills/html.svg";

const About = () => {

  console.log(HTML);

  return (
    <section className={style.about}>
      <h1>Sobre</h1>
      <div className={style.content}>
        <div className={style.block}>
          <div className={style.line}>
            <p>
              Iniciei no DevWorld com PHP em 2015, e desde então sigo nessa
              estrada como Desenvolvedor. No início de 2021, comecei a trabalhar
              com Javascript, então surgiu a paixão por essa linguagem e seus
              Frameworks. Meu foco é Desenvolvimento Front-end, mas também
              possuo uma ótima facilidade com Desenvolvimento Back-end.
            </p>
          </div>
        </div>
        <div className={style.block}>
          <div className={style.lineskill}>
            {skills.map(({ id, name, Icon }) => (
              <span key={id} title={name}>
                <Icon />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
