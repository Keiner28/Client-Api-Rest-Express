import useHeaderLogic from '../../hooks/useHeader.js'
import SearchInput from '../common/SearchInput.jsx'
import GenreFilter from '../common/GenreFilter.jsx'

function Header() {
  const { handleSearchChange, handleGenreChange, handleCreateClick, memoizedGenres } = useHeaderLogic()

  return (
    <header className='flex justify-between items-center mb-4'>
      <div className='flex items-center space-x-4'>
        <SearchInput onChange={handleSearchChange} />
        <GenreFilter
          genres={memoizedGenres}
          onChange={handleGenreChange}
        />
      </div>
      <button
        onClick={handleCreateClick}
        className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105'
        aria-label='Crear nueva película'>
        Crear
      </button>
    </header>
  )
}

export default Header
