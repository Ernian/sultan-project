import { Link } from 'react-router-dom'
import MobileMenu from '../mobileMenu'
import Logo from '../logo'
import CartWidget from '../cartWidget'

import mobileCatalogIcon from '../../assets/svg/mobile-catalog-icon.svg'
import mobileSearchIcon from '../../assets/svg/mobile-search-icon.svg'

const MobileHeader = () => {
  return (
    <>
      <section>
        <div className='header-line row'>
          <MobileMenu />
          <Logo width={97} height={41} color='#3F4E65' />
          <CartWidget widthIcon={32} heightIcon={24} />
        </div>
      </section>
      <section className='upper-under-line'>
        <div className="header__links row dashed">
          <Link to='catalog' className='header__link'>
            <img src={mobileCatalogIcon} alt="catalog icon" />
            <span>Каталог</span>
          </Link>
          <Link to='/' className='header__link'>
            <img src={mobileSearchIcon} alt="search icon" />
            <span>Поиск</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default MobileHeader