import { Dispatch, SetStateAction } from 'react'
import FilterPrice from '../filterPrice'
import CheckboxFilterWidget from '../checkboxFilterWidget'

import { Brands, Producers } from '../../types'

const CatalogSideBar = ({
  producers,
  brands,
  setCurrentPage
}: {
  producers: Producers[],
  brands: Brands[],
  setCurrentPage: Dispatch<SetStateAction<number>>
}) => {
  return (
    <aside className='side-bar'>
      <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
      <FilterPrice />
      <CheckboxFilterWidget
        title='Производитель'
        list={producers}
        type='producer'
        setCurrentPage={setCurrentPage}
      />
      <CheckboxFilterWidget
        title='Бренд'
        list={brands}
        type='brand'
        setCurrentPage={setCurrentPage}
      />
    </aside>
  )
}

export default CatalogSideBar