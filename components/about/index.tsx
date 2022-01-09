import React from "react";
import Parser from "html-react-parser";
import { skills } from "services/skills";
import style from "assets/styles/about.module.scss";

const About: React.FC = () => {
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
            {skills.map(({ id, name, icon }) => (
              <span key={id} title={name}>
                {Parser(icon)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
