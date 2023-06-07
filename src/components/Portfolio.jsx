import { Content } from './Content'
import { Contenido } from './Contenido'
import foto from '../assets/foto.webp'
export function Portfolio (lang) {
  return (
    <div className='portfolio'>
      <section className='header'>
        <img className='header-img' src={foto} alt='Foto perfil' />
        <h1>Ariel Hernandez</h1>
        <h2>Frontend Developer</h2>
      </section>
      {lang.lang === 'en' ? <Content /> : <Contenido />}
    </div>
  )
}
