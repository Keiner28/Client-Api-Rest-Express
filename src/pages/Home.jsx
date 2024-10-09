import Header from '../components/layout/Header.jsx'
import MovieGrid from '../components/common/MovieGrid.jsx'
import useStore from '../store/store.js'

const Home = () => {
  const { movies, searchTerm, selectedGenre } = useStore()

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === '' || movie.genre.includes(selectedGenre))
    )
  })

  return (
    <div className='container mx-auto p-4'>
      <Header />
      <MovieGrid movies={filteredMovies} />
    </div>
  )
}

export default Home
