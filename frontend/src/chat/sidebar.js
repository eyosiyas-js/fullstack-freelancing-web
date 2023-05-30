import React, { useState, useEffect } from 'react'
import './sidebar.css'
import SidebarChat from './SidebarChat'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Avatar, IconButton } from '@mui/material'
import axios from '../axios'
export default function Sidebar(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('/inbox')
      .then((res) => {
        setUsers(res.data)
        console.log([users])
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        {users.map((user) => (
          <SidebarChat
            name={user.name}
            username={user.username}
            picture={user.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
