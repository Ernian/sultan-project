import locationIcon from './../../assets/svg/location-icon.svg'

const Address = () => (
  <div className='address'>
    <img src={locationIcon} alt="location-icon" />
    <div>
      <p className='header_main-text'>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
      <p className='header_secondary-text'>(Рынок Восточный)</p>
    </div>
  </div>
)

export default Address