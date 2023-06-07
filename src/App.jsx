import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Portfolio } from './components/Portfolio'
import { Background } from './components/Background'
import spanish from './assets/spanish.svg'
import english from './assets/english.svg'
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
          <button onClick={handleLangEn}><img src={english} alt='english flag' /></button>
          <button onClick={handleLangEs}><img src={spanish} alt='spanish flag' /></button>
        </div>
        <NavBar />
        <Portfolio lang={lang} />
      </div>
      <Background />
    </>
  )
}
export default App
