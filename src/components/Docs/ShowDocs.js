import React, { useEffect, useState } from "react"

const ShowDocs = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restapi-mongo.onrender.com/docs")
      const json = await response.json()
      setData(json)
    }
    getData()
  }, [])

  console.log(data)
  return (
    <table className="border-2 p-24">
      {data?.map((item) => (
        <tr className="border-2">
          <td className="border-2 p-3">{item.name}</td>
          <td className="border-2 p-3">{item.flight_number}</td>
          <td className="border-2 p-3">{item.description}</td>
        </tr>
      ))}
    </table>
  )
}

export default ShowDocs
