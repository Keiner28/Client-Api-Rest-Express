import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useStore from './store/store'
import { Toaster } from 'sonner'
import { AppRouter } from './router'

const App = () => {
  const loadMovies = useStore(state => state.loadMovies)

  useEffect(() => {
    loadMovies()
  }, [loadMovies])

  return (
    <Router>
      <Toaster
        closeButton
        richColors
      />
      <AppRouter />
    </Router>
  )
}

export default App
