export function Contenido () {
  return (
    <div className='content'>
      <section className='content-card home' id='welcome-section'>
        <h1>Hola, soy Ariel Hernandez</h1>
      </section>
      <section className='content-card about' id='about'>
        <h1>Sobre Mi</h1>
        <div className='about-item about-me'>
          <p>
            Soy un programador con una sólida formación académica. Me considero una persona altamente motivada con pasión por la programación y un enfoque constante en lograr resultados excepcionales. Mi objetivo es hacer una contribución significativa y positiva al crecimiento y éxito de la organización a través de mis habilidades y conocimientos.
          </p>
        </div>
        <div className='col-2'>
          <div className='about-item '>
            <h1>Habilidades</h1>
            <div className='skills'>
              <span className='skill'>HTML</span>
              <span className='skill'>CSS</span>
              <span className='skill'>JavaScript</span>
              <span className='skill'>SASS</span>
              <span className='skill'>SQL</span>
              <span className='skill'>PHP</span>
            </div>
          </div>

          <div className='about-item languages'>
            <h1>Idiomas</h1>
            <div className='language'>
              <p>Español</p>
              <span className='bar'><span className='spanish' /></span>
            </div>
            <div className='language'>
              <p>Ingles</p>
              <span className='bar'><span className='english' /></span>
            </div>
          </div>
        </div>
      </section>

      <section className='content-card projects' id='projects'>
        <h1>Proyectos</h1>
        <div className='project-list'>
          {/* <div className='project-tile'>
                        <img src='https://shots.codepen.io/nietoperq/pen/BaPJqGW-512.webp?version=1674304822'
                            alt=' />
                        <div className='overlay'>
                            <div className='project-description'>
                                <h3>Project 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nisi aperiam voluptate accusamus velit omnis.
                                </p>
                            </div>
                        </div>
                      </div>  */}
          <h2 className='coming-soon'>Pronto</h2>
          {/* <a href='https://github.com/arielWD'>see more...</a> */}
        </div>
      </section>

      <section className='content-card contact' id='contact'>
        <h1>Contacto</h1>
        <div className='socials'>
          <a href='https://www.linkedin.com/in/ariel-andres-hernandez-ahwd/' target='_blank' className='fa-brands fa-linkedin-in' id='profile-link' rel='noreferrer'><span>Ariel Hernandez</span></a>
          <a href='https://github.com/ArielWD' target='_blank' className='fa-brands fa-github' rel='noreferrer'><span>ArielWD</span></a>
          <a href='https://wa.me/584127672176' target='_blank' className='fa-brands fa-whatsapp' rel='noreferrer'><span>Enviar un Mensaje</span></a>
          <a href='mailto:andreshernandez94.ah@gmail.com' className='fa-solid fa-inbox'><span>Enviar Correo</span></a>
        </div>
      </section>
    </div>
  )
}
