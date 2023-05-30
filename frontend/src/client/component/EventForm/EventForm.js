import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './EventForm.css'
import MaskImg from '../../../assets/Mask.svg'
import { MenuItem, Select, useMediaQuery } from '@mui/material'
import axios from '../../../axios'
import { useDispatch } from 'react-redux'
import { login } from '../../../a-features/userSlice'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const theme = createTheme()

function EventForm({ Next, nextValue, open }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nextForm, setNextForm] = React.useState(false)
  const isMatch = useMediaQuery('(max-width:660px)')
  const eventNameRef = React.useRef('')
  const eventDescriptionRef = React.useRef('') //
  const eventRegularRef = React.useRef('') //
  const eventTimeRef = React.useRef('')
  const [category, setCategory] = React.useState('')
  const [timeline, setTimeLine] = React.useState('')

  const [value, setValue] = React.useState('')
  const [value2, setValue2] = React.useState('')

  const goToNextForm = () => {
    const eventName = eventNameRef.current.value
    const eventDescription = eventDescriptionRef.current.value
    const eventRegular = eventRegularRef.current.value
    const postData = {
      title: eventNameRef.current.value,
      category: category,
      description: eventDescriptionRef.current.value,
      duration: timeline,
      price: eventRegularRef.current.value,
    }
    if (eventName && eventDescription && eventRegular && category && timeline) {
      axios
        .post('/post', postData)
        .then((res) => {
          axios.get('/user/me').then((res) => {
            dispatch(login(res.data))
          })
          navigate('/jobs')

          console.log(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    } else {
      alert('form must not be empty')
    }
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h4 style={{ color: '#3F3E8D' }}>Job Information | </h4>
              <Box component="form" noValidate sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                      Title of the Job
                    </h5>
                    <TextField
                      sx={{ marginBottom: '10px' }}
                      maxRows={2}
                      className="inputForm"
                      name="eventname"
                      inputRef={eventNameRef}
                      required
                      multiline
                      fullWidth
                      id="eventname"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                      Description
                    </h5>
                    <TextField
                      sx={{
                        marginBottom: '10px',
                        bgcolor: 'rgba(228, 232, 255, 0.3)',
                      }}
                      minRows={2}
                      InputProps={{
                        style: {
                          borderRadius: '12px',
                        },
                      }}
                      name="eventname"
                      inputRef={eventDescriptionRef}
                      required
                      multiline
                      fullWidth
                      id="eventname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                      job category
                    </h5>
                    <Grid sx={{ display: 'flex', position: 'relative' }}>
                      <Select
                        variant="outlined"
                        fullWidth
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                          height: 40,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(228, 232, 255, 0.3)',
                          '& .MuiSvgIcon-root': {
                            color: '#F27405',
                            width: '40px',
                            height: '70px',
                            marginTop: '-20px',
                          },
                        }}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <MenuItem value={'Development and IT'}>
                          Development and IT
                        </MenuItem>
                        <MenuItem value={'Design and Creative'}>
                          Design & Creative
                        </MenuItem>
                        <MenuItem value={'Sales and marketing'}>
                          {' '}
                          Sales & Marketing
                        </MenuItem>
                        <MenuItem value={' Writing and Translation'}>
                          {' '}
                          Writing & Translation
                        </MenuItem>
                        <MenuItem value={'Finance and Accounting'}>
                          Finance & Accounting
                        </MenuItem>
                        <MenuItem value={'Engineering and Architecture'}>
                          Engineering & Architecture
                        </MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                      Regular Price{' '}
                    </h5>

                    <Grid sx={{ display: 'flex' }}>
                      <TextField
                        sx={{ marginBottom: '35px' }}
                        type="number"
                        className="inputForm3"
                        name="regularprice"
                        inputRef={eventRegularRef}
                        required
                        fullWidth
                        id="regularprice"
                      />
                      <Button
                        sx={{
                          marginBottom: '35px',
                          width: '130px',

                          marginLeft: '15px',
                          backgroundColor: 'rgba(228, 232, 255,0.3)',
                          color: 'black',
                          fontWeight: 'bold',
                          borderRadius: '12px',
                          '&:hover': {
                            backgroundColor: 'rgb(232, 232, 232)',
                          },
                        }}
                      >
                        ETB
                        <img
                          style={{
                            height: '6px',
                            marginLeft: '6px',
                          }}
                          src={MaskImg}
                          alt=""
                        />
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                      DeadLine Time
                    </h5>
                    <Grid sx={{ display: 'flex', position: 'relative' }}>
                      <Select
                        variant="outlined"
                        fullWidth
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                          height: 40,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(228, 232, 255, 0.3)',
                          '& .MuiSvgIcon-root': {
                            color: '#F27405',
                            width: '40px',
                            height: '70px',
                            marginTop: '-20px',
                          },
                        }}
                        value={timeline}
                        onChange={(e) => setTimeLine(e.target.value)}
                      >
                        <MenuItem value={'More Than 6 months'}>
                          More Than 6 months
                        </MenuItem>
                        <MenuItem value={'3 to 6 months'}>
                          3 to 6 months
                        </MenuItem>
                        <MenuItem value={'  1 to 3 months'}>
                          1 to 3 months
                        </MenuItem>
                        <MenuItem value={'Less Than 1 month'}>
                          Less Than 1 month
                        </MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>

          {isMatch ? (
            <>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  onClick={() => Next(false)}
                  variant="contained"
                  sx={{
                    mt: 3,
                    width: '300px',
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
                    marginBottom: '30px',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                  }}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={goToNextForm}
                  sx={{
                    mt: 3,
                    width: '300px',
                    height: '60px',
                    borderRadius: '12px',
                    textTransform: 'none',
                    bgcolor: '#3F3E8D',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    textShadow: 'none',
                    marginBottom: '30px',
                    marginLeft: '70px',
                    '&:hover': {
                      backgroundColor: '#3F3E8D',
                    },
                  }}
                >
                  Next
                </Button>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  onClick={() => Next(false)}
                  variant="contained"
                  sx={{
                    mt: 3,
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
                    marginBottom: '30px',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                  }}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={goToNextForm}
                  sx={{
                    mt: 3,
                    width: '350px',
                    height: '60px',
                    borderRadius: '12px',
                    textTransform: 'none',
                    bgcolor: '#3F3E8D',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    textShadow: 'none',
                    marginBottom: '30px',
                    marginLeft: '70px',

                    '&:hover': {
                      backgroundColor: '#3F3E8D',
                    },
                  }}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default EventForm
