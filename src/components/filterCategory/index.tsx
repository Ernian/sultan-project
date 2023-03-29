import { Dispatch, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks'
import { setCategory } from '../../store/filterSlice'
import { NamesCategories, KeysCategories } from '../../types'

const FilterCategory = ({
  category,
  className,
  keyCategory,
  setCurrentPage
}:
  {
    category: NamesCategories,
    className: string,
    keyCategory: KeysCategories,
    setCurrentPage: Dispatch<SetStateAction<number>>
  }) => {
  const dispatch = useAppDispatch()
  const handlerSetCategory = () => {
    dispatch(setCategory(keyCategory))
    setCurrentPage(1)
  }

  const { selectedCategories } = useAppSelector(state => state.filters)
  const classNames = selectedCategories[keyCategory] ?
    `${className} catalog__filter_active`
    : className

  return (
    <div
      className={classNames}
      onClick={handlerSetCategory}
    >
      {category}
    </div>
  )
}
export default FilterCategory