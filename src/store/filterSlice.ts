import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { KeysCategories, Producers, Brands } from './../types'

const initialState = {
  selectedCategories: [] as KeysCategories[],
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
      state.selectedCategories.push(payload)
    },
    deleteCategory(state, { payload }: PayloadAction<KeysCategories>) {
      state.selectedCategories = state.selectedCategories.filter(category => category !== payload)
    },
    setPriceRange(state, { payload: { key, value } }: PayloadAction<{ key: 'min' | 'max', value: number }>) {
      state.priceRange[key] = value
    },
    setSelectedProducer(state, { payload }: PayloadAction<Producers>) {
      state.selectedProducers.push(payload)
    },
    deleteSelectedProducer(state, { payload }: PayloadAction<Producers>) {
      state.selectedProducers = state.selectedProducers.filter(producer => producer !== payload)
    },
    setSelectedBrand(state, { payload }: PayloadAction<Brands>) {
      state.selectedBrands.push(payload)
    },
    deleteSelectedBrand(state, { payload }: PayloadAction<Brands>) {
      state.selectedBrands = state.selectedBrands.filter(brand => brand !== payload)
    }
  }
})

export const {
  setCategory,
  deleteCategory,
  setPriceRange,
  setSelectedProducer,
  setSelectedBrand,
  deleteSelectedProducer,
  deleteSelectedBrand
} = filterSlice.actions
export default filterSlice.reducer