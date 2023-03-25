import { Link } from 'react-router-dom'
import Address from '../address'
import Email from '../email'
import NavLinks from '../navLinks'
import Logo from '../logo'
import SalesDepartment from '../salesDepartment'
import PriceList from '../priceList'
import CartWidget from '../cartWidget'

import catalogIcon from '../../assets/svg/catalog-icon.svg'
import searchIcon from '../../assets/svg/search-icon.svg'

const DesktopHeader = () => {
  return (
    <>
      <section className='underline'>
        <div className='header-line row'>
          <div className='contacts'>
            <Address />
            <Email />
          </div>
          <NavLinks />
        </div>
      </section>
      <section>
        <div className="header-line row">
          <Logo width={156} height={66} color='#3F4E65' />
          <Link to='/catalog' className='catalog-link'>
            <span>Каталог</span>
            <img src={catalogIcon} alt="catalog icon" />
          </Link>
          <div className="search">
            <input type="text" placeholder='Поиск...' />
            <img src={searchIcon} alt="search icon" />
          </div>
          <SalesDepartment />
          <PriceList />
          <CartWidget widthIcon={41} heightIcon={29} />
        </div>
      </section>
    </>
  )
}

export default DesktopHeader