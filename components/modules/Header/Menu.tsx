import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react/effector-react.mjs'
import { $menuIsOpen } from '@/context/madals'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyerList, setShowBuyerList] = useState(false)
  const [showContctsList, setShowContctsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations} = useLang()

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <h1>Menu</h1>
    </nav>
  )
}

export default Menu
