import { create } from 'zustand'
import createMovieSlice from './movieSlice'
import createFilterSlice from './filterSlice'

const useStore = create(set => ({
  ...createMovieSlice(set),
  ...createFilterSlice(set)
}))

export default useStore
