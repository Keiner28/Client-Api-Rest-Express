import { Home, NotFound404, Movie } from '../pages/index'

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/create',
    element: <Movie />
  },
  {
    path: '/edit/:id',
    element: <Movie />
  },
  {
    path: '*',
    element: <NotFound404 />
  }
]
