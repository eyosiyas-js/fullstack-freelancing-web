import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Link, useParams } from 'react-router-dom'
import { Avatar } from '@mui/material'

function SidebarChat({ name, username, picture }) {
  useEffect(() => {
    console.log(name)
  })

 
  return (
    <Link to={`/rooms/${username}`}>
      <div className="sidebarChat">
        <Avatar src={picture} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>{username}</p>
        </div>
      </div>
    </Link>
  )
}

export default SidebarChat
