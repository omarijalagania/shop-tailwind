import Docs from "../Docs/Docs"
import Home from "../Home/Home"
import Register from "../Register/Register"

export const myRoutes = [
  {
    id: 1,
    path: "/",
    name: "Home",
    exact: true,
    element: <Home />,
  },

  {
    id: 2,
    path: "/register",
    name: "Register",
    element: <Register />,
  },

  {
    id: 3,
    path: "/docs",
    name: "Docs",
    element: <Docs />,
  },
]
