import { Edit2, Trash2, Star } from '../icons/Icons.jsx'
import useMovieCard from '../../hooks/useMovieCard.js'

function MovieCard({ movie }) {
  const { handleEditClick, handleDeleteClick } = useMovieCard({ movie })

  return (
    <div className='flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
      <div className='relative pb-72'>
        <img
          src={movie.poster}
          alt={movie.title}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>
        <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
          <h2 className='text-xl font-bold truncate'>{movie.title}</h2>
          <p className='text-sm opacity-90'>
            {movie.year} • {movie.duration} min
          </p>
        </div>
      </div>
      <div className='flex-grow p-4 flex flex-col justify-between'>
        <div>
          <p className='text-sm text-gray-600 mb-2'>{movie.genre.join(', ')}</p>
          <p className='text-sm text-gray-700 mb-2'>Director: {movie.director}</p>
          <div className='flex items-center mb-2'>
            <Star
              className='text-yellow-400 mr-1'
              size={16}
            />
            <span className='text-sm ml-1 font-semibold'>{movie.rate.toFixed(1)}</span>
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <button
            onClick={handleEditClick}
            className='flex items-center px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300'>
            <Edit2 size={16} />
            <span className='ml-1'>Editar</span>
          </button>
          <button
            onClick={handleDeleteClick}
            className='flex items-center px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300'>
            <Trash2 size={16} />
            <span className='ml-1'>Borrar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
