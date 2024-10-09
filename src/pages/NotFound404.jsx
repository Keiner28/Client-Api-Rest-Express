import { Link } from 'react-router-dom'
import { Home } from '../components/icons/Icons'

const NotFound404 = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200'>
      <div className='text-center px-4 lg:px-40 py-8 bg-white rounded-lg shadow-2xl'>
        <h1 className='text-9xl font-extrabold text-blue-600 mb-4'>404</h1>
        <div className='w-24 h-1 mx-auto bg-blue-500 rounded mb-8'></div>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Página no encontrada</h2>
        <p className='text-gray-600 mb-8'>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <Link
          to='/'
          className='inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105'>
          <Home />
          <span className='ml-2'>Volver a la página principal</span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound404
