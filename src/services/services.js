import { API_URL, IMG_API_KEY, IMG_API_URL } from '../config'

const url = new URL(IMG_API_URL)

const defaultHeaders = {
  'Content-Type': 'application/json'
}

const handleResponse = async response => {
  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
  }
  return response.json()
}

const apiRequest = async (endpoint, method = 'GET', body = null) => {
  const config = {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : null
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config)
    return handleResponse(response)
  } catch (error) {
    console.error(`Error in ${method} request to ${endpoint}:`, error)
    throw error
  }
}

export const fetchMovies = () => apiRequest('/movies')

export const createMovie = movie => apiRequest('/movies', 'POST', movie)

export const deleteMovie = id => apiRequest(`/movies/${id}`, 'DELETE')

export const updateMovie = movie => {
  const { _id, ...movieData } = movie
  return apiRequest(`/movies/${_id}`, 'PATCH', movieData)
}

export const uploadImage = async file => {
  const formData = new FormData()
  formData.append('image', file)
  url.searchParams.set('key', IMG_API_KEY)
  url.searchParams.set('name', file.name)

  try {
    const response = await fetch(url.toString(), {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Error al subir la imagen')
    }

    const data = await response.json()
    return data.data.url
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}
