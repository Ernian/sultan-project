import phoneIcon from '../../assets/svg/phone-icon.svg'
import callOrderIcon from '../../assets/svg/call-order-icon.svg'

const MobileSalesDepartment = () => (
  <div>
    <div
      style={{
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }}
    >
      <img
        style={{
          marginTop: 8
        }}
        src={phoneIcon} alt="phone"
      />
      <div>
        <p className='header_main-text'>Отдел продаж</p>
        <p className='header_secondary-text'>+7 (777) 490-00-91</p>
        <p
          className='header_secondary-text'
          style={{
            marginTop: 5
          }}
        >
          время работы: 9:00-20:00
        </p>
      </div>

    </div>
    <div
      style={{
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        margin: '15px 0',
      }}
    >
      <img src={callOrderIcon} alt="call order" />
      <p className='header_underline-text'>Заказать звонок</p>
    </div>
  </div>
)

export default MobileSalesDepartment