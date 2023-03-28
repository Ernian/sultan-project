import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { KeysCategories } from './../types'

const initialState = {
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
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    actionSetFilter(state, action: PayloadAction<KeysCategories>) {
      state[action.payload] = !state[action.payload]
    }
  }
})

export const { actionSetFilter } = filterSlice.actions
export default filterSlice.reducer