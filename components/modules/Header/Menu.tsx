import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react/effector-react.mjs'
import { $menuIsOpen, closeMenu } from '@/context/madals'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { AllowedLangs } from '@/constants/lang'
import { setLang } from '@/context/lang'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyerList, setShowBuyerList] = useState(false)
  const [showContctsList, setShowContctsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations} = useLang()

  const handelSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handelSwitchLang('ru')
  const handleSwitchLangToEn = () => handelSwitchLang('en')

  const handelCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <button
        className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
        onClick={handelCloseMenu}
      />
      <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
        <button
          className={`btn-reset nav-menu__lang__btn ${
            lang === 'ru' ? 'lang-active' : ''
          }`}
          onClick={handleSwitchLangToRu}
        >
          RU
        </button>
        <button
          className={`btn-reset nav-menu__lang__btn ${
            lang === 'en' ? 'lang-active' : ''
          }`}
          onClick={handleSwitchLangToEn}
        >
          EN
        </button>
      </div>
      <h1>Menu</h1>
    </nav>
  )
}

export default Menu
