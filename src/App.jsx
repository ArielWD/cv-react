import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Portfolio } from './components/Portfolio'
import { Background } from './components/Background'
function App () {
  const [lang, setLang] = useState('en')

  const handleLangEn = () => {
    if (lang === 'es') {
      setLang('en')
    }
  }
  const handleLangEs = () => {
    if (lang === 'en') {
      setLang('es')
    }
  }
  return (
    <>
      <div className='container'>
        <div className='menu__language'>
          <button><img onClick={handleLangEn} src='/src/assets/english.svg' alt='english flag' /></button>
          <button><img onClick={handleLangEs} src='/src/assets/spanish.svg' alt='spanish flag' /></button>
        </div>
        <NavBar />
        <Portfolio lang={lang} />
      </div>
      <Background />
    </>
  )
}
export default App
