import { useNavigate } from 'react-router-dom'
import useStore from '../store/store.js'
import { toast } from 'sonner'
import { useCallback } from 'react'

const useMovieCard = ({ movie }) => {
  const { _id, title, year, genre, director, poster, rate, duration } = movie
  const navigate = useNavigate()
  const { setCurrentMovie, deleteMovie, loadMovies } = useStore()

  const handleEditClick = useCallback(() => {
    setCurrentMovie({ _id, title, year, genre, director, poster, rate, duration })
    navigate(`/edit/${_id}`)
  }, [_id, title, year, genre, director, poster, rate, duration, setCurrentMovie, navigate])

  const handleDeleteClick = useCallback(async () => {
    try {
      await deleteMovie(_id)
      await loadMovies()
      toast.success('Película borrada exitosamente.')
    } catch (error) {
      console.error('Error al borrar la película:', error)
      toast.error('Hubo un error al borrar la película.')
    }
  }, [_id, deleteMovie, loadMovies])

  return {
    handleEditClick,
    handleDeleteClick
  }
}

export default useMovieCard
