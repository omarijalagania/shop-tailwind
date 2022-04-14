import { Suspense } from 'react'
import Nav from './components/Header/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { myRoutes } from './components/routes/routes'
import ErrorBoundary from './components/Error/ErrorBoundary'
function App() {
  return (
    <Suspense fallback={false}>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </Suspense>
  )
}

export default App
