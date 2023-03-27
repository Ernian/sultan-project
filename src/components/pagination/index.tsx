import { Dispatch, SetStateAction } from 'react'

import './index.scss'
import leftArrow from '../../assets/svg/pagination-left-arrow.svg'
import rightArrow from '../../assets/svg/pagination-right-arrow.svg'

const Pagination = ({ currentPage, totalPages, setCurrentPage }:
  {
    currentPage: number,
    totalPages: number,
    setCurrentPage: Dispatch<SetStateAction<number>>
  }) => {
  const dots: JSX.Element[] = []
  for (let i = 1; i <= totalPages; i++) {
    const classCSS = currentPage === i ?
      'pagination__dot pagination__dot_active'
      : 'pagination__dot'
    const dot = <div
      className={classCSS}
      onClick={() => setCurrentPage(i)}
      key={i}>
      {i}
    </div>
    dots.push(dot)
  }

  const next = () => {
    if (currentPage === totalPages) return
    setCurrentPage(currentPage => ++currentPage)
  }
  const prev = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage => --currentPage)
  }

  return (
    <div className='pagination'>
      <img
        src={leftArrow}
        alt="prev"
        onClick={prev}
        style={{ cursor: currentPage === 1 ? 'auto' : 'pointer' }}
      />
      {dots}
      <img
        src={rightArrow}
        alt="next"
        onClick={next}
        style={{ cursor: currentPage === totalPages ? 'auto' : 'pointer' }}
      />
    </div>
  )
}

export default Pagination