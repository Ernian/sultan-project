import { useState } from 'react'
import Address from '../address'
import Email from '../email'
import MobileSalesDepartment from '../mobileSalesDepartment'
import NavLinks from '../navLinks'
import PriceList from '../priceList'

import './index.scss'

const MobileMenu = () => {
  const [burger_class, setBurgerClass] = useState<string>("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState<string>("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>
      </div>
      <div className={menu_class}>
        <Address />
        <Email />
        <MobileSalesDepartment />
        <h2
          style={{
            fontWeight: 600,
            fontSize: 20,
            lineHeight: '150%',
            color: '#3F4E65',
            paddingTop: 20,
            borderTop: '1px dashed rgba(63, 78, 101, 0.1)'
          }}
        >Меню сайта:</h2>
        <NavLinks />
        <div style={{ marginTop: 20 }}>

          <PriceList />
        </div>
      </div>
    </>

  )
}

export default MobileMenu