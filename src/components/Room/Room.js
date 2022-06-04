import React, { useState } from "react"
import { io } from "socket.io-client"
import Chat from "./Chat"

const socket = io.connect("http://localhost:8080")

const Room = () => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  const enterChat = (e) => {
    if (name !== "" || room !== "") {
      socket.emit("join", room)
      setShowChat(true)
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      {!showChat ? (
        <div className="flex w-80 flex-col">
          <input
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] mb-3 p-3 bottom-0 outline-none h-10 w-full "
            type="text"
            name="name"
            id="name"
            placeholder="Name..."
          />
          <input
            onChange={(e) => setRoom(e.target.value)}
            className="border-[1px] mb-3 p-3 bottom-0 outline-none h-10 w-full "
            type="text"
            name="room"
            placeholder="Room..."
            id="room"
          />
          <button
            onClick={enterChat}
            className=" px-3 py-5 bg-green-900 text-white"
            type="button"
          >
            Enter Room
          </button>
        </div>
      ) : (
        <Chat socket={socket} name={name} room={room} />
      )}
    </div>
  )
}

export default Room
