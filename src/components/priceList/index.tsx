import { Link } from 'react-router-dom'
import downloadIcon from '../../assets/svg/download-icon.svg'

const PriceList = () => (
  <Link to='#' className='price-list'>
    <span>Прайс-лист</span>
    <img src={downloadIcon} alt="download icon" />
  </Link>
)

export default PriceList