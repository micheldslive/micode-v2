import React from 'react'
import style from '@/assets/styles/projects.module.scss'
import { projects } from '@/services/projects'
import Card from './card'

function Projects() {
  return (
    <section className={style.projects}>
      <div className={style.titlesection}>
        <h1>Projetos.</h1>
      </div>
      <div className={style.mural}>
        {projects.map(({ id, name, href, text, url }) => (
          <Card
            key={id}
            link={href}
            url={url}
            number={id}
            name={name}
            desc={text}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
