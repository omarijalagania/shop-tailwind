import React, { useState, useEffect } from "react"
import ScrollToBottom from "react-scroll-to-bottom"
const Chat = ({ socket, name, room }) => {
  const [message, setMessage] = useState("")
  const [messageList, setMessageList] = useState([])
  const sendMessage = async () => {
    if (message !== "") {
      const messageObject = {
        name: name,
        room: room,
        message: message,
        time: new Date().getHours() + ":" + new Date().getMinutes(),
      }
      await socket.emit("send_message", messageObject)
      setMessageList((prev) => [...prev, messageObject])
    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data])
    })
  }, [socket])

  return (
    <div className="w-80 relative md:w-80 h-96 border-[1px] overflow-hidden">
      <div className=" flex items-center h-10 px-3 bg-green-900 w-full text-white">
        chat
      </div>
      <div className="border-top-[1px] p-3">
        <ScrollToBottom className="h-96">
          {messageList.map((message) => {
            return (
              <div
                key={message.time + Math.random()}
                className={`${
                  name === message.name
                    ? " flex flex-col items-start "
                    : " flex flex-col items-end "
                }`}
              >
                <div
                  className={`font-semibold text-xl ${
                    name === message.name ? "bg-green-400 " : "bg-blue-400"
                  } p-3 w-32 rounded-md overflow-y-auto`}
                >
                  {message.message}
                </div>
                <div className="flex mb-3">
                  <div className="text-xs mr-1">{message.name}</div>
                  <div className="text-xs">{message.time}</div>
                </div>
              </div>
            )
          })}
        </ScrollToBottom>
      </div>
      <div className="flex justify-between w-full items-center absolute bottom-0">
        <input
          onChange={(e) => setMessage(e.target.value)}
          className="border-[1px] border-black  outline-none h-10 px-5 w-full "
          type="text"
          name="message"
          id="message"
        />
        <button
          type="button"
          onClick={sendMessage}
          className="bg-green-700 p-2 text-white"
        >
          send
        </button>
      </div>
    </div>
  )
}

export default Chat
