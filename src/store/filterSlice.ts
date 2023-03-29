import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { KeysCategories, Producers, Brands } from './../types'

const initialState = {
  selectedCategories: {
    bodyCare: false,
    armCare: false,
    legCare: false,
    faceCare: false,
    hairCare: false,
    forTan: false,
    forShaving: false,
    giftSets: false,
    hygieneProducts: false,
    oralHygiene: false,
    paperProducts: false,
  },
  priceRange: {
    min: 0,
    max: 10000,
  },
  selectedProducers: [] as Producers[],
  selectedBrands: [] as Brands[],
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, { payload }: PayloadAction<KeysCategories>) {
      state.selectedCategories[payload] = !state.selectedCategories[payload]
    },
    setPriceRange(state, { payload: { key, value } }: PayloadAction<{ key: 'min' | 'max', value: number }>) {
      state.priceRange[key] = value
    }
  }
})

export const { setCategory, setPriceRange } = filterSlice.actions
export default filterSlice.reducer