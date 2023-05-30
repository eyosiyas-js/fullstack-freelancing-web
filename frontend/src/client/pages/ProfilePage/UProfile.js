import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Avatar, Container, Grid } from '@mui/material'
import './Profile.css'
import profileImg from '../../../assets/profile.svg'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../../../a-features/userSlice'
import UploadImg from '../../../assets/upload.png'
import axios from '../../../axios'
import HeaderBar from '../../component/AppBar/AppBar'
import { useParams } from 'react-router-dom'

const theme = createTheme()

function UProfile() {
  const { name } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const [userData, setUserData] = React.useState({})

  const [edit, setEdit] = React.useState(false)
  const [image, setImage] = React.useState(null)
  const [file, setFile] = React.useState(null)
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  React.useEffect(() => {
    axios
      .get(`/user/${name}`)
      .then((res) => {
        setUserData(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    console.log(userData)
  }, [userData])

  return (
    <div className="Profile">
      <HeaderBar />

      <div>
        <>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'Center',
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <Avatar
                    sx={{ height: 120, width: 120 }}
                    onClick={() => {
                      document.getElementById('input1').click()
                    }}
                    src={userData.imageUrl}
                    alt=""
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    id="input1"
                    hidden
                  />
                  <h5 style={{ fontWeight: 900 }}>{userData.name}</h5>
                  <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                    <h5 style={{ color: 'gray' }}>
                      @{user.userCredentials.username}{' '}
                    </h5>
                    <CheckCircleOutlineIcon
                      sx={{ marginLeft: '10px', color: '#F27405' }}
                    />
                  </Grid>
                </Box>

                <Grid
                  item
                  xs={12}
                  sx={{
                    width: ' 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <h5 style={{ fontWeight: 'bold' }}>Phone Number</h5>
                  <input
                    disabled={true}
                    value={userData.phoneNo}
                    style={{
                      marginBottom: '30px',
                      borderRadius: '8px',
                      height: '40px',
                      width: '100%',
                      border: 'none',
                      backgroundColor: 'rgba(228, 232, 255, 0.3)',
                    }}
                    multiline
                    required
                  />
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                  <h5 style={{ fontWeight: 'bold' }}>Email</h5>
                  <input
                    disabled={true}
                    value={userData.email}
                    style={{
                      marginBottom: '30px',

                      borderRadius: '8px',
                      height: '40px',
                      width: '100%',
                      border: 'none',
                      backgroundColor: 'rgba(228, 232, 255, 0.3)',
                    }}
                    multiline
                    required
                  />
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                  <h5 style={{ fontWeight: 'bold' }}>Type</h5>
                  <input
                    disabled={true}
                    value={userData.type}
                    style={{
                      borderRadius: '8px',
                      height: '40px',
                      width: '100%',
                      border: 'none',
                      backgroundColor: 'rgba(228, 232, 255, 0.3)',
                    }}
                    multiline
                    name="eventhashtag"
                    required
                    id="eventhashtag"
                    autoFocus
                  />
                </Grid>
                <Grid sx={{ width: '100%' }}>
                  <h5 style={{ marginBottom: '30px', fontWeight: 'bold' }}>
                    Resume
                  </h5>
                  <Grid
                    sx={{
                      width: '100%',
                      height: '120px',
                      bgcolor: 'rgba(228, 232, 255, 0.3)',
                      marginBottom: '40px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '5px solid rgba(111, 111, 111,0.3)',
                    }}
                  >
                    {userData.resume ? (
                      <img
                        src={UploadImg}
                        onClick={() =>
                          window.location.replace(`${userData.resume}`)
                        }
                        alt=""
                      />
                    ) : (
                      <h2>No Resume</h2>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </ThemeProvider>
        </>
      </div>
    </div>
  )
}

export default UProfile
