import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react/effector-react.mjs'
import { $menuIsOpen, closeMenu } from '@/context/madals'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyerList, setShowBuyerList] = useState(false)
  const [showContctsList, setShowContctsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations} = useLang()

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
      <h1>Menu</h1>
    </nav>
  )
}

export default Menu
