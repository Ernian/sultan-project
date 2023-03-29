import FilterPrice from '../filterPrice'

const CatalogSideBar = () => {
  return (
    <aside className='catalog__aside'>
      <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
      <FilterPrice />
    </aside>
  )
}

export default CatalogSideBar