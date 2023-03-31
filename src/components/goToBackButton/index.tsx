import { useNavigate } from 'react-router-dom'
import './index.scss'
import arrow from '../../assets/svg/back-arrow-icon.svg'

const GoToBackButton = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div
      style={{
        fontWeight: 600,
        fontSize: 10,
        lineHeight: '12px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#3F4E65',
        alignItems: 'center',
        gap: 5,
        cursor: 'pointer'
      }}
      className='back-button'
      onClick={goBack}
    >
      <img
        src={arrow}
        alt="go back"
        style={{
          transform: 'rotate(180deg)'
        }}
      />
      Назад
    </div >
  )
}

export default GoToBackButton