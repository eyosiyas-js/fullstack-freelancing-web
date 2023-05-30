import { AppBar, Grid } from '@mui/material'
import React from 'react'
import HeaderBar from '../client/component/AppBar/AppBar'
import Feed from './Feed'
import Sidebar from './sidebar'
import SidebarChat from './SidebarChat'

function Chat() {
  return (
    <div style={{width:'100%',height:'100vh'}}>
      <HeaderBar />
      <Grid sx={{width:'100%',display:'flex',height:'100%'}}>
        <Grid sx={{ width: '25%',height:'100%' }}>
          <Sidebar />
        </Grid>
        <Grid sx={{ width: '75%',height:'1000px' }}>
          <Feed />
        </Grid>
      </Grid>
    </div>
  )
}

export default Chat
