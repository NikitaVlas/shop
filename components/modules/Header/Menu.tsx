import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react/effector-react.mjs'
import { $menuIsOpen, closeMenu } from '@/context/madals'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { AllowedLangs } from '@/constants/lang'
import { setLang } from '@/context/lang'
import Logo from '@/components/elements/logo/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import Accordion from '@/components/modules/Accordion/Accordion'
import { usePathname } from 'next/navigation'
import MenuLinkItem from '@/components/modules/Header/MenuLinkItem'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyerList, setShowBuyerList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations } = useLang()
  const pathname = usePathname()

  const handelSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handelSwitchLang('ru')
  const handleSwitchLangToEn = () => handelSwitchLang('en')

  const handleShowCatalogList = () => {
    setShowCatalogList(true)
    setShowBuyerList(false)
    setShowContactsList(false)
  }

  const handelCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  const handleRedirectToCatalog = (path: string) => {
    if (pathname.includes('/catalog')) {
      window.history.pushState({ path }, '', path)
      window.localStorage.reload()
    }

    handelCloseMenu()
  }

  const clothLinks = [
    {
      id: 1,
      text: translations[lang].comparison['t-shirts'],
      href: '/catalog/cloth?offset=0&type=t-shirts',
    },
    {
      id: 2,
      text: translations[lang].comparison['long-sleeves'],
      href: '/catalog/cloth?offset=0&type=long-sleeves',
    },
    {
      id: 3,
      text: translations[lang].comparison.hoodie,
      href: '/catalog/cloth?offset=0&type=hoodie',
    },
    {
      id: 4,
      text: translations[lang].comparison.outerwear,
      href: '/catalog/cloth?offset=0&type=outerwear',
    },
  ]

  const accessoriesLinks = [
    {
      id: 1,
      text: translations[lang].comparison.bags,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: translations[lang].comparison.headdress,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
    {
      id: 3,
      text: translations[lang].comparison.umbrella,
      href: '/catalog/accessories?offset=0&type=umbrella',
    },
  ]

  const souvenirsLinks = [
    {
      id: 1,
      text: translations[lang].comparison['business-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
    },
    {
      id: 2,
      text: translations[lang].comparison['promotional-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
    },
  ]

  const officeLinks = [
    {
      id: 1,
      text: translations[lang].comparison.notebook,
      href: '/catalog/office?offset=0&type=notebook',
    },
    {
      id: 2,
      text: translations[lang].comparison.pen,
      href: '/catalog/office?offset=0&type=pen',
    },
  ]

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container nav-menu__container'>
        <div className={`nav-menu__logo ${menuIsOpen ? 'open' : ''}`}>
          <Logo />
        </div>
        <img
          className={`nav-menu__bg ${menuIsOpen ? 'open' : ''}`}
          src='/img/menu-bg.png'
          alt='menu background'
        />
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
          <ul
            className={`list-reset nav-menu__list ${menuIsOpen ? 'open' : ''}`}
          >
            <li className='nav-menu__list__item'>
              <button
                className='btn-reset nav-menu__list__item__btn'
                onMouseEnter={handleShowCatalogList}
              >
                {translations[lang].main_menu.catalog}
              </button>
              <AnimatePresence>
                {showCatalogList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.cloth}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {clothLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className='nav-menu__list__item' />
            <li className='nav-menu__list__item' />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
