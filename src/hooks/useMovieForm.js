import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useStore from '../store/store'
import { uploadImage } from '../services/services'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const useMovieForm = () => {
  const navigate = useNavigate()
  const { currentMovie, addMovie, updateMovie, resetCurrentMovie, genres } = useStore()

  const formik = useFormik({
    initialValues: {
      title: '',
      year: 2024,
      genre: [],
      director: '',
      poster: '',
      rate: 5,
      duration: 60,
      _id: currentMovie ? currentMovie._id : ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('El título es obligatorio'),
      year: Yup.number()
        .required('El año es obligatorio')
        .min(1900, 'El año debe ser mayor a 1900')
        .max(new Date().getFullYear(), 'El año no puede ser en el futuro'),
      genre: Yup.array().min(1, 'Selecciona al menos un género'),
      director: Yup.string().required('El director es obligatorio'),
      duration: Yup.number().required('La duración es obligatoria').min(1, 'La duración debe ser mayor a 0'),
      poster: Yup.string().required('El póster es obligatorio').url('Debe ser una URL válida')
    }),
    onSubmit: async values => {
      const newMovie = {
        ...values,
        year: Number(values.year),
        rate: Number(values.rate),
        duration: Number(values.duration)
      }
      if (values._id) {
        await updateMovie(newMovie)
        toast.success('Película actualizada exitosamente.')
      } else {
        await addMovie(newMovie)
        toast.success('Película añadida exitosamente.')
      }
      resetCurrentMovie()

      navigate('/')
    }
  })

  useEffect(() => {
    if (currentMovie) {
      formik.setValues({
        _id: currentMovie._id,
        title: currentMovie.title,
        year: currentMovie.year,
        genre: currentMovie.genre,
        director: currentMovie.director,
        poster: currentMovie.poster,
        rate: currentMovie.rate,
        duration: currentMovie.duration
      })
    }
  }, [currentMovie, formik])

  const handleImageUpload = async e => {
    const file = e.target.files[0]
    if (file) {
      try {
        const url = await uploadImage(file)
        formik.setFieldValue('poster', url)
      } catch (error) {
        console.error('Error al subir la imagen:', error)
      }
    }
  }

  const handleBackClick = () => {
    navigate('/')
  }

  return {
    formik,
    genres,
    handleImageUpload,
    handleBackClick
  }
}

export default useMovieForm
