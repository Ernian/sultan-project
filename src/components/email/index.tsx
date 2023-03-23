import envelopeIcon from './../../assets/svg/envelope-icon.svg'

const Email = () => (
  <div className='email'>
    <img src={envelopeIcon} alt="location-icon" />
    <div>
      <p className='header_main-text'>opt.sultan@mail.ru </p>
      <p className='header_secondary-text'>На связи в любое время</p>
    </div>
  </div>
)

export default Email