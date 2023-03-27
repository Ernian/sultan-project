import {
  Producers,
  Brands,
  ICategories,
  IProduct,
  TypesOfMeasure
} from '../../../types'

const MobileCatalogPage = ({
  producers,
  categories,
  brands,
  typesOfMeasure,
  products
}: {
  producers: Producers[],
  categories: ICategories,
  brands: Brands[],
  typesOfMeasure: TypesOfMeasure[],
  products: IProduct[]
}) => {

  return (
    <div>MobileCatalogPage</div>
  )
}

export default MobileCatalogPage