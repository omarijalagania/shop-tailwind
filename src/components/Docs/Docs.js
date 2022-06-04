import React from "react"

const Docs = () => {
  const [data, setData] = React.useState({})

  const submitData = (e) => {
    e.preventDefault()
    fetch("https://restapi-mongo.onrender.com/add/docs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
  }

  return (
    <form onSubmit={submitData} className="w-full p-10 shadow-md mx-auto">
      <h1>Docs</h1>
      <div className="flex flex-col space-y-5">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
          className="border-2"
          type="text"
          id="name"
        />

        <label htmlFor="number">Flight Number</label>
        <input
          onChange={(e) =>
            setData({
              ...data,
              flight_number: e.target.value,
            })
          }
          className="border-2"
          type="text"
          id="number"
        />

        <label htmlFor="desc">Description</label>
        <input
          onChange={(e) =>
            setData({
              ...data,
              description: e.target.value,
            })
          }
          className="border-2"
          type="text"
          id="desc"
        />
      </div>

      <button className="px-6 py-2 bg-green-200" type="submit">
        {" "}
        Submit{" "}
      </button>
    </form>
  )
}

export default Docs
