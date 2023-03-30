import { Dispatch, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks'
import { setCategory, deleteCategory } from '../../store/filterSlice'
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
  const { selectedCategories } = useAppSelector(state => state.filters)

  const dispatch = useAppDispatch()
  const handlerSetCategory = () => {
    if (selectedCategories.includes(keyCategory)) {
      dispatch(deleteCategory(keyCategory))
    } else {
      dispatch(setCategory(keyCategory))
    }
    setCurrentPage(1)
  }

  const classNames = selectedCategories.includes(keyCategory) ?
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