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
          {/* <div className="project-tile">
                        <img src="https://shots.codepen.io/nietoperq/pen/BaPJqGW-512.webp?version=1674304822"
                            alt="" />
                        <div className="overlay">
                            <div className="project-description">
                                <h3>Project 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nisi aperiam voluptate accusamus velit omnis.
                                </p>
                            </div>
                        </div>
                      </div>  */}
          <h2 className='coming-soon'>Coming soon</h2>
          {/* <a href="https://github.com/arielWD">see more...</a> */}
        </div>
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
