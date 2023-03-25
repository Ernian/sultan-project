import { Link } from 'react-router-dom'
import Logo from '../logo'
import PriceList from '../priceList'

import './index.scss'
import arrowRight from '../../assets/svg/arrow-right-icon.svg'
import visa from '../../assets/svg/visa.svg'
import masterCard from '../../assets/svg/master-card.svg'
import whatsApp from '../../assets/svg/whats-app.svg'
import telegram from '../../assets/svg/telegram.svg'

const Footer = () => (
  <footer className=''>
    <div className='footer row'>
      <div
        style={{
          maxWidth: 300,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo width={97} height={41} color='#FFF' />
          <div className='footer__price'>
            <PriceList />
          </div>
        </div>
        <p
          style={{
            marginTop: 15,
            fontSize: 16,
            lineHeight: '24px',
          }}
        >
          Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве
          и Акмолинской области
        </p>
        <p style={{ marginTop: 15 }}>Подпишись на скидки и акции</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#FFF',
            borderRadius: '50px',
            marginTop: 15
          }}
        >
          <input type="text" placeholder='Введите ваш E-mail' />
          <img src={arrowRight} alt="arrow" className='pointer' />
        </div>
      </div>
      <div className='footer__menu-category'>
        <div>
          <h2>Меню сайта:</h2>
          <Link to='#' className='footer__link'>О компании</Link>
          <Link to='#' className='footer__link'>Доставка и оплата</Link>
          <Link to='#' className='footer__link'>Возврат</Link>
          <Link to='#' className='footer__link'>Контакты</Link>
        </div>
        <div>
          <h2>Категории:</h2>
          <Link to='#' className='footer__link'>Бытовая химия</Link>
          <Link to='#' className='footer__link'>Косметика и гигиена</Link>
          <Link to='#' className='footer__link'>Товары для дома</Link>
          <Link to='#' className='footer__link'>Товары для детей и мам</Link>
          <Link to='#' className='footer__link'>Посуда</Link>
        </div>
      </div>
      <div className='footer__contacts-price'>
        <div className='footer__contacts'>
          <h2>Контакты:</h2>
          <div
            style={{
              margin: '25px 0'
            }}
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '21px',
                marginTop: 5,
              }}
            >
              +7 (777) 490-00-91
            </p>
            <p
              style={{
                fontWeight: 300,
                marginTop: 5,
              }}
            >
              время работы: 9:00-20:00
            </p>
            <p
              style={{
                fontSize: 10,
                lineHeight: '15px',
                textDecorationLine: 'underline',
                marginTop: 5,
              }}
            >
              Заказать звонок
            </p>
          </div>
          <div
            style={{
              marginTop: 5,
            }}
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '21px',
              }}
            >
              opt.sultan@mail.ru
            </p>
            <p
              style={{
                fontWeight: 300,
              }}
            >
              На связи в любое время
            </p>
            <div
              style={{
                marginTop: 10,
                display: 'flex',
                gap: 5,
              }}
            >
              <img src={visa} alt="visa" />
              <img src={masterCard} alt="master card" />
            </div>
          </div>
        </div>
        <div>
          <div className='footer__header-price'>
            <h2 style={{ marginBottom: 20 }}>Скачать прайс-лист:</h2>
            <PriceList />
          </div>
          <p style={{ marginBottom: 10, fontSize: 14, lineHeight: '21px' }}>Связь в мессенджерах:</p>
          <div
            style={{
              display: 'flex',
              gap: 10,
            }}
          >
            <img src={whatsApp} alt="whatsapp" style={{ cursor: 'pointer' }} />
            <img src={telegram} alt="telegram" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer