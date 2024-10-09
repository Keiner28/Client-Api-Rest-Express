const createFilterSlice = set => ({
  genres: ['Drama', 'Action', 'Crime', 'Adventure', 'Sci-Fi', 'Romance', 'Animation', 'Biography', 'Fantasy'],
  searchTerm: '',
  selectedGenre: '',
  setSearchTerm: term => set({ searchTerm: term }),
  setSelectedGenre: genre => set({ selectedGenre: genre })
})

export default createFilterSlice
