import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { MenuItem, Select } from '@mui/material'
import LocationImg from '../../../../../assets/location.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CloseImg from '../../../../../assets/close.png'
import EventEdit3 from '../EventEdit3/EventEdit3'

const theme = createTheme()

function EventEdit2({ open, next }) {
  const [nextEdit, setNextEdit] = React.useState(false)
  const [category, setCategory] = React.useState('')
  const [subCategory, setSubCategory] = React.useState('')

  const eventVenueRef = React.useRef('')
  const eventLocationRef = React.useRef('')

  return (
    <>
      {nextEdit ? (
        <>
          <EventEdit3 Open={open} next={(nextEdit) => setNextEdit(nextEdit)} />
        </>
      ) : (
        <>
          <div>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                height: 'auto',
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
                overflowY: 'scroll',

                scrollbarWidth: 'none' /* Firefox */,
                '&::-webkit-scrollbar': {
                  display: 'none',
                } /* Chrome */,
                '@media (max-width: 1200px)': {
                  width: '95%',
                },
              }}
            >
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
                      <h4 style={{ color: '#3F3E8D' }}>Event Information</h4>
                      <Box component="form" noValidate sx={{ mt: 5 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <h5
                              style={{
                                marginBottom: '10px',
                                fontWeight: 'bold',
                              }}
                            >
                              Venue
                            </h5>
                            <TextField
                              sx={{ marginBottom: '10px' }}
                              maxRows={2}
                              className="inputForm"
                              name="eventvenue"
                              inputRef={eventVenueRef}
                              required
                              multiline
                              fullWidth
                              id="eventvenue"
                            />
                          </Grid>

                          <Grid item xs={12} sm={7}>
                            <h5
                              style={{
                                marginBottom: '10px',
                                fontWeight: 'bold',
                              }}
                            >
                              Location
                            </h5>
                            <Grid
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                              }}
                            >
                              <TextField
                                sx={{ marginBottom: '10px' }}
                                className="inputForm2"
                                inputRef={eventLocationRef}
                                multiline
                                required
                                fullWidth
                                id="eventlocation"
                                name="eventlocation"
                              />
                              <Button
                                sx={{
                                  marginBottom: '10px',
                                  position: 'absolute',
                                  right: 0,
                                  top: 0,
                                  backgroundColor: 'rgba(228, 232, 255,0.4)',
                                  color: 'black',
                                  fontWeight: 'bold',
                                  borderRadius: '12px',
                                  '&:hover': {
                                    backgroundColor: 'rgb(232, 232, 232)',
                                  },
                                }}
                              >
                                <img
                                  style={{ height: '30px' }}
                                  src={LocationImg}
                                  alt=""
                                />
                              </Button>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <h5
                              style={{
                                marginBottom: '10px',
                                fontWeight: 'bold',
                              }}
                            >
                              Event category
                            </h5>

                            <Grid
                              sx={{ display: 'flex', position: 'relative' }}
                            >
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
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'INR'}>INR</MenuItem>
                              </Select>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <h5
                              style={{
                                marginBottom: '10px',
                                fontWeight: 'bold',
                              }}
                            >
                              Sub category
                            </h5>

                            <Grid
                              sx={{ display: 'flex', position: 'relative' }}
                            >
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
                                value={subCategory}
                                onChange={(e) => setSubCategory(e.target.value)}
                              >
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'INR'}>INR</MenuItem>
                              </Select>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Container>

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
                        variant="contained"
                        onClick={() => next(false)}
                        sx={{
                          mt: 3,
                          width: '330px',
                          height: '60px',
                          color: 'black',
                          bgcolor: 'white',
                          marginLeft: '10px',
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
                          '@media (max-width: 978px)': {
                            width: '300px',
                          },
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => setNextEdit(true)}
                        type="submit"
                        variant="contained"
                        sx={{
                          mt: 3,
                          width: '330px',
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
                          '@media (max-width: 978px)': {
                            width: '300px',
                          },
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </>
                </Container>
              </ThemeProvider>
              <Box sx={{ position: 'absolute', right: 8, top: 8 }}>
                <img
                  onClick={() => open(false)}
                  style={{ height: '30px', cursor: 'pointer' }}
                  src={CloseImg}
                  alt=""
                />
              </Box>
            </Box>
          </div>
        </>
      )}
    </>
  )
}

export default EventEdit2
