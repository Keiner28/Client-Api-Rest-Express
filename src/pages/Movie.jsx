import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieForm from '../components/form/MovieForm'
import useStore from '../store/store'

const Movie = () => {
  const { _id } = useParams()
  const { getMovieById, setCurrentMovie, resetCurrentMovie } = useStore()

  useEffect(() => {
    if (_id) {
      const movie = getMovieById(_id)
      if (movie) {
        setCurrentMovie(movie)
      } else {
        console.error(`Movie with id ${_id} not found`)
      }
    } else {
      resetCurrentMovie()
    }

    return () => resetCurrentMovie()
  }, [_id, getMovieById, setCurrentMovie, resetCurrentMovie])

  return (
    <div className='container mx-auto p-6 bg-white'>
      <MovieForm />
    </div>
  )
}

export default Movie
