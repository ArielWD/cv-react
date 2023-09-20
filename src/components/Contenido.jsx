import piccolowood from '../assets/piccolowood.webp'
import suculentas from '../assets/suculentasymas.webp'
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
          <div className='project-tile'>
            <img
              src={piccolowood}
              alt='Pagina Piccolo Wodd'
            />
            <div className='overlay'>
              <div className='project-description'>
                <h3>Piccolo Wood</h3>
                <p>
                  Pagina Responsive inspirados en una empresa de Arquitectura, Incluye: Html, Css(Sass),JS
                </p>
              </div>
            </div>
          </div>
          <div className='project-tile'>
            <img
              src={suculentas}
              alt='Pagina Piccolo Wodd'
            />
            <div className='overlay'>
              <div className='project-description'>
                <h3>Suculentas</h3>
                <p>
                  Pagina Responsive inspirados en un vivero de suculentas, Incluye: Html, Css(Sass)
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href='https://github.com/arielWD' target='_blank' rel='noreferrer'>Ver Mas...</a>
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
