import React, { useState, useEffect } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined'
import MicIcon from '@mui/icons-material/Mic'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AttachFileIcon from '@mui/icons-material/AttachFile'

import './Chat.css'
import { useParams } from 'react-router-dom'
import { Avatar, IconButton } from '@mui/material'
import axios from '../axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../a-features/userSlice'

function Feed() {
  const owner = useSelector(selectUser)
  let { username } = useParams()
  const [input, setInput] = useState('')
  const [user, setUser] = useState('')
  const path = window.location.pathname
  const [send, setSend] = useState('')

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios
      .get(`/user/${username}`)
      .then((res) => {
        setUser(res.data)

        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [path])
  useEffect(() => {
    if (owner.userCredentials.type === 'client') {
      axios
        .get(`inbox/c/${user.username}`)
        .then((res) => {
          setMessages(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    } else {
      axios
        .get(`inbox/f/${user.username}`)
        .then((res) => {
          setMessages(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  }, [user,send])

  const sendMessage = (e) => {
    e.preventDefault()

    if (owner.userCredentials.type === 'client') {
      const messageData = {
        body: input,
        client: owner.userCredentials.username,
        freelancer: user.username,
      }
      axios
        .post(`/message/${user.username}`, messageData)
        .then((res) => {
          setSend(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    } else {
      const messageData = {
        body: input,
        client: user.username,
        freelancer: owner.userCredentials.username,
      }
      axios
        .post(`/message/${user.username}`, messageData)
        .then((res) => {
          setSend(res.data)

          console.log(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }

    setInput('')
  }

  return (
    <div>
      {owner.userCredentials.type === 'client' ? (
        <div className="chat">
          <div className="chat_header">
            <Avatar src={user.imageUrl} />
            <div className="chat_headerInfo">
              <h3 className="chat-room-name">{user.name}</h3>
              <p className="chat-room-last-seen"></p>
            </div>
            <div className="chat_headerRight">
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="chat_body">
            {messages.map((message) => (
              <p
                className={`chat_message ${
                  message.sender == owner.userCredentials.username &&
                  'chat_receiver'
                }`}
              >
                <span className="chat_name">{message.name}</span>
                {message.body}
                <span className="chat_timestemp">
                  {new Date(message.createdAt).toISOString().substring(0, 10)}
                </span>
              </p>
            ))}
          </div>
          <div className="chat_footer">
            <InsertEmoticonOutlinedIcon />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Type a message"
              />
              <button type="submit" onClick={sendMessage}>
                {' '}
                Send a Message
              </button>
            </form>
            <MicIcon />
          </div>
        </div>
      ) : (
        <div className="chat">
          <div className="chat_header">
            <Avatar src={user.imageUrl} />
            <div className="chat_headerInfo">
              <h3 className="chat-room-name">{user.name}</h3>
              <p className="chat-room-last-seen"></p>
            </div>
            <div className="chat_headerRight">
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="chat_body">
            {messages.map((message) => (
              <p
                style={{ marginTop: '15px' }}
                className={`chat_message ${
                  message.sender == owner.userCredentials.username &&
                  'chat_receiver'
                }`}
              >
                <span className="chat_name">{message.name}</span>
                {message.body}
                <span className="chat_timestemp">
                  {new Date(message.createdAt).toISOString().substring(0, 10)}
                </span>
              </p>
            ))}
          </div>
          <div className="chat_footer">
            <InsertEmoticonOutlinedIcon />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Type a message"
              />
              <button type="submit" onClick={sendMessage}>
                {' '}
                Send a Message
              </button>
            </form>
            <MicIcon />
          </div>
        </div>
      )}
    </div>
  )
}

export default Feed
