import { Dispatch, SetStateAction } from 'react'
import FilterPrice from '../filterPrice'
import CheckboxFilterWidget from '../checkboxFilterWidget'
import FilterCategory from '../filterCategory'
import {
  Brands,
  Producers,
  KeysCategories,
  NamesCategories,
  IProduct
} from '../../types'

const CatalogSideBar = ({
  producers,
  brands,
  setCurrentPage,
  allCategories,
  products
}: {
  producers: Producers[],
  brands: Brands[],
  setCurrentPage: Dispatch<SetStateAction<number>>,
  allCategories: [KeysCategories, NamesCategories][],
  products: IProduct[]
}) => {
  return (
    <aside className='side-bar'>
      <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
      <FilterPrice />
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
      <div style={{ marginTop: 40 }}>
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
    </aside>
  )
}

export default CatalogSideBar