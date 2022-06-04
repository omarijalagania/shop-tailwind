import React from "react"
import { useLocation } from "react-router-dom"
const Name = () => {
  const location = useLocation()
  return (
    <>
      <div>{`Hello, ${
        location.pathname === "/"
          ? "World"
          : decodeURI(location.pathname.slice(1))
      }`}</div>
    </>
  )
}

export default Name
