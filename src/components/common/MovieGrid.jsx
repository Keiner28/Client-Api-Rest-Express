// MovieGrid.jsx
import MovieCard from './MovieCard'

function MovieGrid({ movies }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
        />
      ))}
    </div>
  )
}

export default MovieGrid
