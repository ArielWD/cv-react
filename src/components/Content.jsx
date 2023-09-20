import piccolowood from '../assets/piccolowood.webp'
import suculentas from '../assets/suculentasymas.webp'
export function Content () {
  return (
    <div className='content'>
      <section className='content-card home' id='welcome-section'>
        <h1>Hello, I am Ariel Hernandez</h1>
      </section>
      <section className='content-card about' id='about'>
        <h1>About me</h1>
        <div className='about-item about-me'>
          <p>I am a programmer with a strong academic background. I consider myself a highly motivated individual with a passion for programation and a consistent focus on achieving exceptional results. My goal is to make a significant and positive contribution to the growth and success of the organization through my skills and knowledge.
          </p>
        </div>
        <div className='col-2'>
          <div className='about-item'>
            <h1>Skills</h1>
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
            <h1>Languages</h1>
            <div className='language'>
              <p>Spanish</p>
              <span className='bar'><span className='spanish' /></span>
            </div>
            <div className='language'>
              <p>English</p>
              <span className='bar'><span className='english' /></span>
            </div>
          </div>
        </div>
      </section>

      <section className='content-card projects' id='projects'>
        <h1>Projects</h1>
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
                  Responsive Page inspired by an Architecture company, Includes: Html, CSS (Sass), JS
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
                  Responsive page inspired by a succulent nursery, Includes: Html, CSS (Sass)
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href='https://github.com/arielWD' target='_blank' rel='noreferrer'>See More...</a>
      </section>

      <section className='content-card contact' id='contact'>
        <h1>Contact</h1>
        <div className='socials'>
          <a href='https://www.linkedin.com/in/ariel-andres-hernandez-ahwd/' target='_blank' className='fa-brands fa-linkedin-in' id='profile-link' rel='noreferrer'><span>Ariel Hernandez</span></a>
          <a href='https://github.com/ArielWD' target='_blank' className='fa-brands fa-github' rel='noreferrer'><span>ArielWD</span></a>
          <a href='https://wa.me/584127672176' target='_blank' className='fa-brands fa-whatsapp' rel='noreferrer'><span>Send Message</span></a>
          <a href='mailto:andreshernandez94.ah@gmail.com' className='fa-solid fa-inbox'><span>Send Mail</span></a>
        </div>
      </section>
    </div>
  )
}
