import { fetchMovies, createMovie, updateMovie, deleteMovie } from '../services/services'

const createMovieSlice = set => ({
  movies: [],
  currentMovie: null,
  loadMovies: async () => {
    try {
      const movies = await fetchMovies()
      set({ movies })
    } catch (error) {
      console.error('Failed to load movies:', error)
    }
  },
  addMovie: async movie => {
    try {
      const newMovie = await createMovie(movie)
      set(state => ({ movies: [...state.movies, newMovie] }))
    } catch (error) {
      console.error('Failed to create movie:', error)
    }
  },
  updateMovie: async movie => {
    try {
      const updatedMovie = await updateMovie(movie)
      set(state => ({
        movies: state.movies.map(m => (m._id === movie._id ? updatedMovie : m)),
        currentMovie: null
      }))
    } catch (error) {
      console.error('Failed to update movie:', error)
    }
  },
  deleteMovie: async id => {
    try {
      await deleteMovie(id)
      set(state => ({
        movies: state.movies.filter(m => m.id !== id)
      }))
    } catch (error) {
      console.error('Failed to delete movie:', error)
    }
  },
  setCurrentMovie: movie => set({ currentMovie: movie }),
  resetCurrentMovie: () => set({ currentMovie: null })
})

export default createMovieSlice
