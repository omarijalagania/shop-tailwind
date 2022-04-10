import { Suspense } from 'react'
import Nav from './components/Header/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { myRoutes } from './components/routes/routes'
function App() {
  return (
    <Suspense fallback={false}>
      <Nav />
      {myRoutes.map((route) => (
        <Routes key={route.id}>
          <Route
            exact={route.exact}
            path={route.path}
            element={route.element}
          />
        </Routes>
      ))}
    </Suspense>
  )
}

export default App
