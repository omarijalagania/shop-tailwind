import React, { useEffect, useState } from "react"
import axios from "axios"

const Myform = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [image, setImage] = useState("")
  const [posts, setPosts] = useState([])
  const sendPost = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("lastname", lastName)
    formData.append("image", image)

    const config = {
      headers: { "content-type": "multipart/form-data" },
    }

    axios
      .post("http://localhost:8080/apiv2/set-post", formData, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:8080/apiv2/my-posts")
      setPosts(res.data.posts)
    }
    getPost()
  }, [])

  return (
    <div className="flex justify-between p-10">
      <div className="w-96">
        <form
          onSubmit={sendPost}
          className="flex flex-col"
          encType="multipart/form"
        >
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            className="border-gray-500 mt-2 border-[1px] p-2 rounded-md"
          />
          <label htmlFor="name">LastName</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastname"
            id="lastname"
            className="border-gray-500 mt-2 border-[1px] p-2 rounded-md"
          />
          <input
            id="image"
            accept="image/*"
            name="image"
            className="mt-3"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
          />

          <button className="px-2 py-3 bg-green-200 mt-10" type="submit">
            Send
          </button>
        </form>
      </div>
      {/* show */}
      <div>
        {posts?.map((post) => (
          <div key={post._id} className="w-96">
            <p>{post.name}</p>
            <p>{post.lastname}</p>
            <img src={`http://localhost:8080/${post.image}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myform
