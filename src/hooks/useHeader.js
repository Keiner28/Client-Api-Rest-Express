import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import debounce from 'just-debounce-it'
import useStore from '../store/store.js'

const useHeaderLogic = () => {
  const navigate = useNavigate()
  const { setSearchTerm, setSelectedGenre, resetCurrentMovie, genres } = useStore()

  const debouncedSearchChange = useCallback(
    debounce(value => {
      setSearchTerm(value)
    }, 500),
    [setSearchTerm]
  )

  const handleSearchChange = useCallback(
    e => {
      debouncedSearchChange(e.target.value)
    },
    [debouncedSearchChange]
  )

  const handleGenreChange = useCallback(
    e => {
      setSelectedGenre(e.target.value)
    },
    [setSelectedGenre]
  )

  const handleCreateClick = useCallback(() => {
    resetCurrentMovie()
    navigate('/create')
  }, [resetCurrentMovie, navigate])

  const memoizedGenres = useMemo(() => genres, [genres])

  return {
    handleSearchChange,
    handleGenreChange,
    handleCreateClick,
    memoizedGenres
  }
}

export default useHeaderLogic
