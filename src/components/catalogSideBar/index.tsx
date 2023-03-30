import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useState
} from 'react'
import FilterPrice from '../filterPrice'
import CheckboxFilterWidget from '../checkboxFilterWidget'
import FilterCategory from '../filterCategory'
import { useAppSelector } from '../../hooks/rtkHooks'
import {
  Brands,
  Producers,
  KeysCategories,
  NamesCategories,
  IProduct
} from '../../types'
import arrow from '../../assets/svg/back-arrow-icon.svg'
import './index.scss'

const CatalogSideBar = ({
  producers,
  brands,
  setCurrentPage,
  allCategories,
  products,
  selectHandler
}: {
  producers: Producers[],
  brands: Brands[],
  setCurrentPage: Dispatch<SetStateAction<number>>,
  allCategories: [KeysCategories, NamesCategories][],
  products: IProduct[],
  selectHandler: ChangeEventHandler<HTMLSelectElement>
}) => {

  const [isOpenFilters, setIsOpenFilters] = useState(false)
  const { width } = useAppSelector(state => state.screenWidth)
  const classNames = isOpenFilters ? 'side-bar__filters_open' : 'side-bar__filters_close'

  return (
    <aside className='side-bar'>
      <div className='side-bar__header'>
        <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
        <img
          src={arrow}
          alt="arrow"
          className={isOpenFilters ?
            'side-bar__show-filters-arrow deg270' :
            'side-bar__show-filters-arrow deg90'
          }
          onClick={() => setIsOpenFilters(isOpenFilters => !isOpenFilters)}
        />
      </div>
      <div className={width > 950 ? '' : classNames}>
        <FilterPrice
          setCurrentPage={setCurrentPage}
        />
        <CheckboxFilterWidget
          title='Производитель'
          list={producers}
          products={products}
          type='producer'
          setCurrentPage={setCurrentPage}
        />
        <CheckboxFilterWidget
          title='Бренд'
          list={brands}
          products={products}
          type='brand'
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div style={{ marginTop: isOpenFilters || width > 950 ? 40 : 80 }}>
        {
          allCategories.map(([keyCategory, nameCategory]) => (
            <FilterCategory
              category={nameCategory}
              keyCategory={keyCategory}
              key={keyCategory}
              setCurrentPage={setCurrentPage}
              className='catalog__filter_left'
            />
          ))
        }
      </div>
      <div className='catalog__sort-block_mob'>
        <label htmlFor='fieldSort' >Сортировка:
          <select name='fieldSort' onChange={selectHandler}>
            <option value='title'>Название</option>
            <option value='price'>Цена</option>
          </select>
        </label>
        <label htmlFor='orderSort'>Порядок:
          <select name='orderSort' onChange={selectHandler}>
            <option value='asc'>По возростанию</option>
            <option value='desc'>По убыванию</option>
          </select>
        </label>
      </div>
    </aside>
  )
}

export default CatalogSideBar