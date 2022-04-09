import Home from './components/Home/Home'
import Nav from './components/Header/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { myRoutes } from './components/routes/routes'
function App() {
  return (
    <>
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
    </>
  )
}

export default App
