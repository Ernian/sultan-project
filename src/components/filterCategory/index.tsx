import { ValueCategories } from '../../types'

const FilterCategory = ({ category, className }:
  { category: ValueCategories, className: string }) => (
  <div className={className}>{category}</div>
)

export default FilterCategory