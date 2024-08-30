'use client'
import { useLang } from '@/hooks/useLang'

const Header = () => {
  const { lang, translations } = useLang()
  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          {translations[lang].header.menu_btn}
        </button>
      </div>
    </header>
  )
}

export default Header
