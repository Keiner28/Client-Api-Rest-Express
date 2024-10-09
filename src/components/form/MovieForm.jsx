import { Slider } from '@nextui-org/react'
import { Film, Calendar, User, Clock, Upload, Save, ArroyLeft } from '../icons/Icons'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import FileInput from './FileInput'
import useMovieForm from '../../hooks/useMovieForm'

const MovieForm = () => {
  const { formik, genres, handleImageUpload, handleBackClick } = useMovieForm()

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6'>
      <div className='flex mb-4 gap-4'>
        <button
          type='button'
          className='text-gray-700 text-2xl focus:outline-none hover:text-gray-900 transition duration-300 ease-in-out'
          onClick={handleBackClick}>
          <ArroyLeft />
        </button>
        <h2 className='text-2xl font-bold text-gray-800'>
          {formik.values._id ? 'Editar Película' : 'Añadir Nueva Película'}
        </h2>
      </div>

      <div className='space-y-4'>
        <TextInput
          label='Título'
          icon={Film}
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.title}
          error={formik.errors.title}
        />

        <div className='flex space-x-4'>
          <TextInput
            label='Año'
            icon={Calendar}
            type='number'
            name='year'
            value={formik.values.year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.year}
            error={formik.errors.year}
          />
          <TextInput
            label='Duración (minutos)'
            icon={Clock}
            type='number'
            name='duration'
            value={formik.values.duration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.duration}
            error={formik.errors.duration}
          />
        </div>

        <SelectInput
          label='Género'
          name='genre'
          placeholder='Selecciona un género'
          options={genres}
          value={formik.values.genre}
          setFieldValue={formik.setFieldValue}
          touched={formik.touched.genre}
          error={formik.errors.genre}
        />

        <TextInput
          label='Director'
          icon={User}
          name='director'
          value={formik.values.director}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.director}
          error={formik.errors.director}
        />

        <FileInput
          label='Poster'
          icon={Upload}
          value={formik.values.poster}
          onChange={handleImageUpload}
          touched={formik.touched.poster}
          error={formik.errors.poster}
        />

        <div>
          <label className='flex items-center text-sm font-medium text-gray-700 mb-1'>Rating</label>
          <Slider
            label='Rating'
            size='sm'
            color='warning'
            step={0.1}
            maxValue={10}
            minValue={0}
            defaultValue={5}
            value={formik.values.rate}
            onChange={value => formik.setFieldValue('rate', value)}
            className='max-w-md'
          />
        </div>
      </div>

      <button
        type='submit'
        className='w-full flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105'>
        <Save />
        {formik.values._id ? (
          <span className='ml-1'>Actualizar Película</span>
        ) : (
          <span className='ml-1'>Guardar Película</span>
        )}
      </button>
    </form>
  )
}

export default MovieForm
