import { Avatar, Grid, Menu, Modal, useMediaQuery } from '@mui/material'
import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profileImg from '../../../assets/profile.svg'
import { Box } from '@mui/system'
import MessageProposal from './MessageProposal'
function AttendeesList({ username, link }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const [openModal, setOpenModal] = React.useState(false)
  const navigate = useNavigate()
  const isMatch = useMediaQuery('(max-width:978px)')
  const [userData, setUserData] = useState([])
  useEffect(() => {
    axios.get(`/user/${username}`).then((res) => {
      
      setUserData(res.data)
    })
  }, [username])

  return (
    <div>
      <Grid
        sx={{
          width: '100%',
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Grid
          sx={{
            width: '15%',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            style={{ height: '45px', marginRight: '20px' }}
            src={userData.imageUrl}
          />
          <h5
            onClick={() => {
              navigate(`/profile/${username}`)
            }}
          >
            {username}
          </h5>
        </Grid>
        <Grid
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isMatch ? (
            <>
              <h5
                onClick={() => {
                  window.location.replace(`${link}`)
                }}
                style={{ marginRight: '40px', cursor: 'pointer' }}
              >
                Download
              </h5>
              <div>
                <h5
                  onClick={() => {
                    setOpenModal(true)
                  }}
                >
                  Message
                </h5>
              </div>
            </>
          ) : (
            <>
              <h5
                onClick={() => {
                  window.location.replace(`${link}`)
                }}
                style={{ marginRight: '50px', cursor: 'pointer' }}
              >
                Download
              </h5>
              <div>
                <h5
                  onClick={() => {
                    setOpenModal(true)
                  }}
                >
                  Message
                </h5>
              </div>
            </>
          )}
        </Grid>
      </Grid>
      <Menu
        sx={{ mt: '30px', position: 'absolute', left: '130px' }}
        PaperProps={{
          style: {
            width: 200,
            borderRadius: 25,
          },
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <div>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <MessageProposal open={(open => setOpenModal(open))} username={username} />
           
          </Modal>
        </div>
      </Menu>
    </div>
  )
}

export default AttendeesList
