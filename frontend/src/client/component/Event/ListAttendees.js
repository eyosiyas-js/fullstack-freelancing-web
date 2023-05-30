import { Box, Button, Grid, Menu, Modal, useMediaQuery } from '@mui/material'
import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import CloseImg from '../../../assets/close.png'
import AttendeesList from './AttendeesList'

function ListAttendees({ open, id }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const [openModal, setOpenModal] = React.useState(false)

  const isMatch2 = useMediaQuery('(max-width:1024px)')
  const [proposals, setProposals] = useState([])
  useEffect(() => {
    axios.get(`job/${id}`).then((res) => {
      setProposals(res.data)
    })
  }, [])

  return (
    <div>
      {isMatch2 ? (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              height: '84%',
              transform: 'translate(-50%, -50%)',
              paddingTop: 0,
              paddingBottom: 2,
              width: '95%',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '28px',
              borderColor: 'white',
            }}
          >
            <Grid
              sx={{
                width: '100%',
                marginTop: '30px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h3
                style={{
                  marginBottom: '30px',
                  color: '#3F3E8D',
                  fontWeight: 'bold',
                }}
              >
                List of proposals
              </h3>
              <Button
                sx={{
                  width: '100%',
                  height: '40px',
                  bgcolor: '#3F3E8D',
                  textTransform: 'none',
                  marginBottom: '30px',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  '&:hover': {
                    backgroundColor: '#3F3E8D',
                  },
                }}
              >
                Add code
              </Button>
            </Grid>
            <Grid sx={{ width: '100%', height: '100%' }}>
              <Grid sx={{ width: '100%', height: '100%' }}>
                <>
                  <Grid sx={{ width: '100%', height: '100%' }}>
                    <Grid sx={{ width: '100%', height: '12%' }}>
                      <Grid
                        sx={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          borderTop: '1px solid lightgray',
                          borderBottom: '1px solid lightgray',
                          paddingTop: '20px',
                          paddingBottom: '20px',
                        }}
                      >
                        <h4>Name</h4>
                        <h4>link</h4>
                        <h4>Approve</h4>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        width: '100%',
                        height: '82%',
                      }}
                    >
                      <Grid
                        sx={{
                          width: '100%',
                          height: '75%',
                          overflowY: 'scroll',
                        }}
                      >
                        {proposals.map((proposal) => (
                          <AttendeesList
                            username={proposal.username}
                            link={proposal.file}
                          />
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              </Grid>
            </Grid>
            <Box sx={{ position: 'absolute', right: 8, top: 8 }}>
              <img
                onClick={() => open(false)}
                style={{ height: '30px' }}
                src={CloseImg}
                alt=""
              />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              height: '80%',
              transform: 'translate(-50%, -50%)',
              paddingTop: 0,
              paddingBottom: 0,
              width: 1000,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '28px',
              borderColor: 'white',
            }}
          >
            <Grid sx={{ width: '70%', marginTop: '30px', textAlign: 'center' }}>
              <h3
                style={{
                  marginBottom: '30px',
                  color: '#3F3E8D',
                  fontWeight: 'bold',
                }}
              >
                List of proposals
              </h3>
              <Button
                sx={{
                  width: '100%',
                  height: '40px',
                  bgcolor: '#3F3E8D',
                  textTransform: 'none',
                  marginBottom: '10px',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  '&:hover': {
                    backgroundColor: '#3F3E8D',
                  },
                }}
              >
                Add code
              </Button>
            </Grid>
            <Grid sx={{ width: '100%', height: '100%' }}>
              <Grid sx={{ width: '100%', height: '100%' }}>
                <>
                  <Grid
                    sx={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Grid
                      sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginBottom: '20px',
                      }}
                    >
                      <Grid sx={{ width: '50%', height: '100%' }}>
                        <Grid
                          sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: '40px',
                            borderTop: '1px solid rgba(128,128,128,0.7)',
                            borderBottom: '1px solid rgba(128,128,128,0.7)',
                            paddingTop: '20px',
                            paddingBottom: '20px',
                          }}
                        >
                          <h4>Name</h4>
                          <h4>link</h4>
                          <h4>Approve</h4>
                        </Grid>
                        <Grid
                          sx={{
                            height: '50%',
                            width: '100%',
                            overflowY: 'scroll',
                            '::-webkit-scrollbar': {
                              width: '8px',
                            },
                            '::-webkit-scrollbar-track': {
                              background: '#f1f1f1',
                            },
                            '::-webkit-scrollbar-thumb': {
                              background: 'gray',
                              borderRadius: '20px',
                            },
                          }}
                        >
                          {proposals.map((proposal) => (
                            <AttendeesList
                              username={proposal.username}
                              link={proposal.file}
                            />
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              </Grid>
            </Grid>
            <Box sx={{ position: 'absolute', right: 8, top: 8 }}>
              <img
                onClick={() => open(false)}
                style={{ height: '30px', cursor: 'pointer' }}
                src={CloseImg}
                alt=""
              />
            </Box>
          </Box>
        </>
      )}
    </div>
  )
}

export default ListAttendees
