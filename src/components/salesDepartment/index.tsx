import callImg from '../../assets/img/call-img.png'

const SalesDepartment = () => (
  <div className='sales-department'>
    <div style={{ textAlign: 'right' }}>
      <p className='header_main-text'>+7 (777) 490-00-91</p>
      <p className='header_secondary-text'>время работы: 9:00-20:00</p>
      <p className='header_underline-text'>Заказать звонок</p>
    </div>
    <img src={callImg} alt="call image" />
  </div>
)

export default SalesDepartment