import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Switch } from '@mui/material'
import DoneImg from '../../../../../assets/Done.svg'

import CloseImg from '../../../../../assets/close.png'
import { useDropzone } from 'react-dropzone'

const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: 'white',
        },
        colorPrimary: {
          '&.Mui-checked': {
            // Controls checked color for the thumb
            color: 'white',
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 1,
          backgroundColor: '#3F3E8D',

          '.Mui-checked.Mui-checked + &': {
            // Controls checked color for the track
            backgroundColor: 'gray',
          },
        },
      },
    },
  },
})

function EventEdit3mobile({ Open, next }) {
  function cut(str, maxLength, { side = 'end', ellipsis = '...' } = {}) {
    if (str.length > maxLength) {
      switch (side) {
        case 'start':
          return ellipsis + str.slice(-(maxLength - ellipsis.length))
        case 'end':
        default:
          return str.slice(0, maxLength - ellipsis.length) + ellipsis
      }
    }
    return str
  }
  const [files, setFiles] = React.useState([{ path: 'Addis.png' }])
  const { getInputProps, open } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })
  const [hashTagValue, setHashTagValue] = React.useState('')
  const [checkedReview2, setCheckedReview2] = React.useState()
  const [checkedRating2, setCheckedRating2] = React.useState()
  const [checkedReview, setCheckedReview] = React.useState(true)
  const [checkedRating, setCheckedRating] = React.useState(true)
  React.useEffect(() => {
    if (checkedRating === true) {
      setCheckedRating2(false)
    } else {
      setCheckedRating2(true)
    }
    if (checkedReview === true) {
      setCheckedReview2(false)
    } else {
      setCheckedReview2(true)
    }
  }, [checkedReview, checkedRating])
  const handleChange = (event) => {
    setCheckedReview(event.target.checked)
  }
  const handleChange2 = (event) => {
    setCheckedRating(event.target.checked)
  }
  console.log(checkedReview2)
  console.log(checkedRating2)

  const eventHashTagRef = React.useRef('')
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          height: '95%',
          transform: 'translate(-50%, -50%)',
          paddingTop: 0,
          paddingBottom: 0,
          width: '95%',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '20px',
          borderColor: 'white',
          overflowY: 'scroll',

          scrollbarWidth: 'none' /* Firefox */,
          '&::-webkit-scrollbar': {
            display: 'none',
          } /* Chrome */,
        }}
      >
        <ThemeProvider theme={theme}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h4 style={{ color: '#3F3E8D', marginTop: '30px' }}>
              Event Information
            </h4>
            <Container
              component="main"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CssBaseline />

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box component="form" noValidate sx={{ mt: 5 }}>
                  <Grid container>
                    <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                      Hash tags
                    </h5>

                    <Grid item xs={12}>
                      <Grid
                        sx={{
                          display: 'flex',
                          marginBottom: '25px',
                          alignItems: 'center',
                        }}
                      >
                        <Grid
                          item={true}
                          xs={2}
                          sx={{
                            width: '45px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(228, 232, 255, 0.3)',
                            borderRadius: '7px',
                          }}
                        >
                          <h3>#</h3>
                        </Grid>
                        <Grid xs={12}>
                          <TextField
                            sx={{
                              marginBottom: '10px',
                              marginLeft: '8px',
                              bgcolor: 'rgba(228, 232, 255, 0.3)',
                            }}
                            multiline
                            InputProps={{
                              style: {
                                color: '',
                                borderRadius: '12px',
                              },
                            }}
                            name="eventhashtag"
                            inputRef={eventHashTagRef}
                            required
                            fullWidth
                            id="eventhashtag"
                          />
                        </Grid>
                        {hashTagValue ? (
                          <>
                            <Button
                              onClick={() => setHashTagValue('')}
                              sx={{
                                width: '80px',
                                height: '27px',
                                bgcolor: '#3F3E8D',
                                color: 'white',
                                marginLeft: '15px',

                                borderRadius: '12px',
                                textTransform: 'none',
                                '&:hover': {
                                  backgroundColor: '#3F3E8D',
                                },
                              }}
                            >
                              Remove
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              onClick={() =>
                                setHashTagValue(
                                  `# ${eventHashTagRef.current.value}`,
                                )
                              }
                              sx={{
                                width: '80px',
                                height: '27px',
                                bgcolor: '#3F3E8D',
                                color: 'white',
                                borderRadius: '12px',
                                marginLeft: '15px',

                                textTransform: 'none',
                                '&:hover': {
                                  backgroundColor: '#3F3E8D',
                                },
                              }}
                            >
                              Add
                            </Button>
                          </>
                        )}
                      </Grid>
                    </Grid>
                    <Grid xs={12} sx={{}}>
                      <TextField
                        multiline
                        sx={{
                          marginBottom: '10px',
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
                        value={hashTagValue}
                        minRows={2}
                        aria-readonly
                        required
                        fullWidth
                        name="eventlocation"
                      />
                    </Grid>

                    <Grid
                      sx={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '100%',
                      }}
                    >
                      <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                        <h5 style={{ fontWeight: 'bold' }}>Review</h5>

                        <Switch
                          checked={checkedReview}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      </Grid>
                      <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                        <h5 style={{ fontWeight: 'bold' }}>Rating</h5>

                        <Switch
                          checked={checkedRating}
                          onChange={handleChange2}
                          name="checkedA"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <h5 style={{ fontWeight: 'bold' }}>Flyer/Picture</h5>
                </Box>
                <Box
                  sx={{
                    backgroundColor: 'rgba(228, 232, 255, 0.4)',
                    border: '2px solid gray',
                    borderStyle: 'dashed',
                    marginBottom: '60px',

                    borderRadius: '5px',
                    width: '220px',
                    height: '170px',
                    display: 'flex',
                    flexDirection: 'column',

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    loading="lazy"
                    style={{ height: '40px' }}
                    src={DoneImg}
                    alt=""
                  />
                  <h5 style={{ color: '#3F3E8D' }}>Uploaded Succesfully</h5>
                  <div style={{ width: '100%' }}>
                    {files.map((file) => (
                      <h6 style={{ color: '#3F3E8D', marginLeft: '7px' }}>
                        {cut(file.path, 20)}
                        <span style={{ marginLeft: '10px' }}>{file.type}</span>
                      </h6>
                    ))}
                  </div>
                  <input {...getInputProps()} />

                  <Button
                    onClick={open}
                    sx={{
                      marginTop: '20px',
                      width: '100px',
                      height: '25px',
                      borderRadius: '25px',
                      bgcolor: '#3F3E8D',
                      color: 'white',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#3F3E8D',
                      },
                    }}
                  >
                    Change
                  </Button>
                </Box>
              </Box>
            </Container>

            <>
              <div
                style={{
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  onClick={() => next(false)}
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
                    marginLeft: '10px',

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
                    marginLeft: '30px',

                    '&:hover': {
                      backgroundColor: '#3F3E8D',
                    },
                  }}
                >
                  Save
                </Button>
              </div>
            </>
          </div>
        </ThemeProvider>
        <Box sx={{ position: 'absolute', right: 8, top: 20 }}>
          <img
            onClick={() => Open(false)}
            style={{ height: '30px' }}
            src={CloseImg}
            alt=""
          />
        </Box>
      </Box>
    </div>
  )
}

export default EventEdit3mobile
