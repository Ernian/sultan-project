import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks'
import { actionSetFilter } from '../../store/filterSlice'
import { NamesCategories, KeysCategories } from '../../types'

const FilterCategory = ({ category, className, keyCategory }:
  {
    category: NamesCategories,
    className: string,
    keyCategory: KeysCategories
  }) => {
  const dispatch = useAppDispatch()
  const setFilter = () => dispatch(actionSetFilter(keyCategory))

  const filters = useAppSelector(state => state.filters)
  const classNames = filters[keyCategory] ?
    `${className} catalog__filter_active`
    : className

  return (
    <div
      className={classNames}
      onClick={setFilter}
    >
      {category}
    </div>
  )
}
export default FilterCategory