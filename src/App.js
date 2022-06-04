import { Suspense } from "react"
import Nav from "./components/Header/Nav/Nav"
import { Route, Routes } from "react-router-dom"
import { myRoutes } from "./components/routes/routes"
import ErrorBoundary from "./components/Error/ErrorBoundary"
import TestZ from "./components/Test/Test"
import Hello from "./components/Name/Name"
import Docs from "./components/Docs/Docs"
import ShowDocs from "./components/Docs/ShowDocs"
import Myform from "./components/MyForm/Myform"
import Room from "./components/Room/Room"

function App() {
  return (
    <Suspense fallback={false}>
      <ErrorBoundary>
        {/* <Nav /> */}
        {/* {myRoutes.map((route) => (
          <Routes key={route.id}>
            <Route
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          </Routes> */}
        <Routes>
          {/* <Route path="/" element={<Myform />} /> */}
          <Route path="/" element={<Room />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/show-docs" element={<ShowDocs />} />
          <Route path="/:name" element={<Hello />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  )
}

export default App
