import { Box, Button, Grid, TextField, useMediaQuery } from '@mui/material'
import CloseImg from '../../../assets/close.png'
import React, { useEffect } from 'react'
import axios from '../../../axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../a-features/userSlice'
function MessageProposal({ username, open }) {
  const inputRef = React.useRef('')
  const inputValue = inputRef.current.value
  const user = useSelector(selectUser)

  const isMatch2 = useMediaQuery('(max-width:878px)')

  const send = () => {
    const messageData = {
      body: inputRef.current.value,
      client: user.userCredentials.username,
      freelancer: username,
    }
    if (messageData.body) {
      axios.post(`/message/${username}`, messageData).then((res) => {
        console.log(res.data)
        if (res.data.body) {
          alert('Sent successfully')
          open(false)
        }
      })
    } else {
      alert('message must not be empty')
    }
  }
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          height: '65%',
          transform: 'translate(-50%, -50%)',
          paddingTop: 0,
          paddingBottom: 2,
          width: '50%',
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
        {isMatch2 ? (
          <>
            <Grid
              sx={{
                width: '100%',
                height: '100%',

                display: 'flex',
                alignItems: 'center',

                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '95%',
                }}
              >
                <h4
                  style={{
                    marginTop: '50px',
                  }}
                >
                  Message here
                </h4>
                <TextField
                  multiline
                  inputRef={inputRef}
                  sx={{
                    outline: 'none',
                    marginTop: '10px',
                    marginBottom: '50px',
                    bgcolor: 'rgba(228, 232, 255, 0.3)',
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: 'gray',
                      },
                    },
                  }}
                  InputProps={{
                    style: {
                      color: '',
                      borderRadius: '12px',
                    },
                  }}
                  id="outlined-basic"
                  variant="outlined"
                  minRows={2}
                  aria-readonly
                  required
                  fullWidth
                  name="eventlocation"
                />
              </Box>
              <Grid
                sx={{
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <Button
                  onClick={() => open(false)}
                  variant="contained"
                  sx={{
                    width: '350px',
                    height: '60px',
                    color: 'black',
                    bgcolor: 'white',
                    borderRight: 2,
                    borderLeft: 2,
                    borderTop: 2,
                    borderBottom: 2,
                    borderColor: '#F27405',
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    textShadow: 'none',

                    '&:hover': {
                      backgroundColor: 'white',
                    },
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={send}
                  type="submit"
                  variant="contained"
                  sx={{
                    width: '350px',
                    height: '60px',
                    borderRadius: '12px',
                    textTransform: 'none',
                    bgcolor: '#3F3E8D',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    textShadow: 'none',
                    marginLeft: '70px',

                    '&:hover': {
                      backgroundColor: '#3F3E8D',
                    },
                  }}
                >
                  send
                </Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid
              sx={{
                mt: 5,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '65%',
                }}
              >
                <h4
                  style={{
                    marginTop: '50px',
                  }}
                >
                  Message here
                </h4>
                <TextField
                  multiline
                  inputRef={inputRef}
                  sx={{
                    outline: 'none',
                    marginTop: '10px',
                    marginBottom: '100px',
                    bgcolor: 'rgba(228, 232, 255, 0.3)',
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: 'gray',
                      },
                    },
                  }}
                  InputProps={{
                    style: {
                      color: '',
                      borderRadius: '12px',
                    },
                  }}
                  id="outlined-basic"
                  variant="outlined"
                  minRows={2}
                  aria-readonly
                  required
                  fullWidth
                  name="eventlocation"
                />
              </Box>
              <Grid
                sx={{
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <Button
                  onClick={() => open(false)}
                  variant="contained"
                  sx={{
                    width: '350px',
                    height: '60px',
                    color: 'black',
                    bgcolor: 'white',
                    borderRight: 2,
                    borderLeft: 2,
                    borderTop: 2,
                    borderBottom: 2,
                    borderColor: '#F27405',
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    textShadow: 'none',

                    '&:hover': {
                      backgroundColor: 'white',
                    },
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={send}
                  type="submit"
                  variant="contained"
                  sx={{
                    width: '350px',
                    height: '60px',
                    borderRadius: '12px',
                    textTransform: 'none',
                    bgcolor: '#3F3E8D',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    textShadow: 'none',
                    marginLeft: '70px',

                    '&:hover': {
                      backgroundColor: '#3F3E8D',
                    },
                  }}
                >
                  Send
                </Button>
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
          </>
        )}
      </Box>
    </div>
  )
}

export default MessageProposal
