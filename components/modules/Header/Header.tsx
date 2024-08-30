'use client'
import { useLang } from '@/hooks/useLang'
import Logo from '@/components/elements/logo/Logo'
import Link from 'next/link'
import Menu from '@/components/modules/Header/Menu'

const Header = () => {
  const { lang, translations } = useLang()
  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn header__links__item__btn--search' />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              className='header__links__item__btn header__links__item__btn--compare'
              href='/comparison'
            />
          </li>
          <li className='header__links__item'>
            <Link
              className='header__links__item__btn header__links__item__btn--cart'
              href='/cart'
            />
          </li>
          <li className='header__links__item header__links__item--profile'>
            <Link
              className='btn-reset header__links__item__btn header__links__item__btn--profile'
              href='/profile'
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
