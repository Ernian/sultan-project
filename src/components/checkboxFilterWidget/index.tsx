import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks'
import {
  setSelectedProducer,
  setSelectedBrand,
  deleteSelectedProducer,
  deleteSelectedBrand
} from '../../store/filterSlice'
import { Producers, Brands, IProduct } from '../../types'
import searchIcon from '../../assets/svg/search-icon.svg'
import './index.scss'

const CheckboxFilterWidget = ({
  title,
  list,
  products,
  type,
  setCurrentPage
}: {
  title: string,
  list: string[],
  products: IProduct[],
  type: 'brand' | 'producer',
  setCurrentPage: Dispatch<SetStateAction<number>>
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const { selectedProducers, selectedBrands } = useAppSelector(state => state.filters)
  const dispatch = useAppDispatch()

  const searchHandler: ChangeEventHandler<HTMLInputElement> = event => {
    setSearchQuery(event.target.value)
  }

  const checkboxChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
    if (type === 'producer') {
      const producer = event.target.name as Producers
      if (selectedProducers.includes(producer)) {
        dispatch(deleteSelectedProducer(producer))
      } else {
        dispatch(setSelectedProducer(producer))
      }
    }

    if (type === 'brand') {
      const brand = event.target.name as Brands
      if (selectedBrands.includes(brand)) {
        dispatch(deleteSelectedBrand(brand))
      } else {
        dispatch(setSelectedBrand(brand))
      }
    }
    setCurrentPage(1)
  }

  // подсчет товаров, соответствующих выбранному производителю/бренду
  const amount = list.reduce((result, item) => {
    for (let product of products) {
      if (item === product[type]) {
        result[item] = result[item] ? result[item] + 1 : 1
      }
    }
    return result
  }, {} as any)

  //поиск по списку чекбоксов
  const visibleList = list.reduce((arr, item, i) => {
    if (!searchQuery) {
      const checkbox = (
        <label htmlFor={`${type + i}`} key={`${item + i}`}>
          <input
            type="checkbox"
            name={item}
            id={`${type + i}`}
            onChange={checkboxChangeHandler} />
          {item}&nbsp;({amount[item]})
        </label>
      )
      arr.push(checkbox)
      return arr
    } else if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
      const checkbox = (
        <label htmlFor={`${type + i}`} key={`${item + i}`}>
          <input
            type="checkbox"
            name={item}
            id={`${type + i}`}
            onChange={checkboxChangeHandler} />
          {item}
        </label>
      )
      arr.push(checkbox)
      return arr
    }
    return arr
  }, [] as JSX.Element[])

  return (
    <div className='filter-widget'>
      <h4 className='filter-widget__title'>{title}</h4>
      <div className="search-input">
        <input
          type="text"
          placeholder='Поиск...'
          value={searchQuery}
          onChange={searchHandler}
        />
        <img src={searchIcon} alt="search icon" />
      </div>
      <div className={`filter-widget__container ${isOpen || searchQuery ? 'show' : 'hide'}`}>
        {
          !visibleList.length ? <span>Ничего не найдено</span> : visibleList
        }
      </div>
      <div
        className='filter-widget__show-all'
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        {searchQuery ? null :
          isOpen ? <span>Скрыть&nbsp;&uarr;</span> :
            <span> Показать все&nbsp;&darr;</span>
        }
      </div>
    </div >
  )
}

export default CheckboxFilterWidget