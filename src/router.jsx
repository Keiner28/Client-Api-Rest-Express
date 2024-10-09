import { Routes, Route } from 'react-router-dom'
import { routes } from './routes/routerConfig'

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          {...route}
        />
      ))}
    </Routes>
  )
}
