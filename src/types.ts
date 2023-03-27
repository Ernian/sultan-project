export interface IScreenWidth {
  width: number
}

export interface IProduct {
  url: string,
  title: string,
  typeOfMeasure: TypesOfMeasure,
  valueOfMeasure: number,
  barcode: string,
  producer: Producers,
  brand: Brands,
  description: string,
  price: number,
  category: ValueCategories[]
}

export type Producers = 'Grifon' |
  'Boyscout' |
  'Paclan' |
  'Булгари Грин' |
  'Нэфис'


export interface ICategories {
  bodyCare: 'Уход за телом',
  armCare: 'Уход за руками',
  legCare: 'Уход за ногами',
  faceCare: 'Уход за лицом',
  hairCare: 'Уход за волосами',
  forTan: 'Средства для загара',
  forShaving: 'Средства для бритья',
  giftSets: 'Подарочные наборы',
  hygieneProducts: 'Гигиеническая продукция',
  oralHygiene: 'Гигиена полости рта',
  paperProducts: 'Бумажная продукция'
}

export type KeysCategories = keyof ICategories
export type ValueCategories = ICategories[KeysCategories]


export type Brands = 'Nivea' |
  'GRIFON' |
  'Домашний сундук' |
  'HELP' |
  'AOS'

export type TypesOfMeasure = 'volume' | 'weight'

export interface IData {
  producers: Producers[],
  categories: ICategories,
  brands: Brands[],
  typesOfMeasure: TypesOfMeasure[],
  products: IProduct[]
}