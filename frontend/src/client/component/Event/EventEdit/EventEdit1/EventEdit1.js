import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CalendarPicker from './CalendarPicker'
import MaskImg from '../../../../../assets/Mask.svg'
import CloseImg from '../../../../../assets/close.png'

import { Typography, useMediaQuery } from '@mui/material'
import EventEdit2 from '../EventEdit2/EventEdit2'

function EventEdit1({ open }) {
  const [nextEdit, setNextEdit] = React.useState(false)
  const isMatch = useMediaQuery('(max-width:860px)')
  const eventNameRef = React.useRef('')
  const eventRegularRef = React.useRef('') //
  const eventVipRef = React.useRef('') //
  const [value, setValue] = React.useState('')
  const [value2, setValue2] = React.useState('')

  return (
    <>
      {nextEdit ? (
        <>
          <EventEdit2 next={(nextEdit) => setNextEdit(nextEdit)} open={open} />
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
                '@media (max-width: 980px)': {
                  width: '95%',
                  height: '95%',
                  borderRadius: '20px',

                  paddingY: '20px',
                },
              }}
            >
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
                      marginTop: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      '@media (max-width: 980px)': {
                        marginTop: 3,
                      },
                    }}
                  >
                    <h4 style={{ color: '#3F3E8D' }}>Event Information</h4>
                    <Box
                      component="form"
                      noValidate
                      sx={{
                        mt: 1,
                        '@media (max-width: 980px)': {
                          marginTop: 3,
                        },
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item={true} xs={12}>
                          <h5
                            style={{
                              marginBottom: '10px',
                              fontWeight: 'bold',
                            }}
                          >
                            Name of the Event
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

                        <Grid item={true} xs={12}>
                          <h5
                            style={{
                              marginBottom: '10px',
                              fontWeight: 'bold',
                            }}
                          >
                            Description
                          </h5>
                          <TextField
                            sx={{
                              marginBottom: '5px',
                              bgcolor: 'rgba(228, 232, 255, 0.3)',
                            }}
                            minRows={2}
                            InputProps={{
                              style: {
                                borderRadius: '12px',
                              },
                            }}
                            name="eventname"
                            inputRef={eventNameRef}
                            required
                            multiline
                            fullWidth
                            id="eventname"
                          />
                        </Grid>
                        <Grid item={true} xs={12} sm={5}>
                          <h5
                            style={{
                              fontWeight: 'bold',
                              marginBottom: '5px',
                            }}
                          >
                            Regular Price{' '}
                          </h5>

                          <Grid item={true} sx={{ display: 'flex' }}>
                            <TextField
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
                                width: '130px',
                                marginBottom: '15px',

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

                        <Grid
                          sx={{ marginLeft: 'auto' }}
                          item={true}
                          xs={12}
                          sm={5}
                        >
                          <h5
                            style={{
                              fontWeight: 'bold',
                              marginBottom: '10px',
                            }}
                          >
                            VIP Price
                          </h5>
                          <Grid item={true} sx={{ display: 'flex' }}>
                            <TextField
                              required
                              type="number"
                              inputRef={eventVipRef}
                              className="inputForm3"
                              fullWidth
                              name="vipprice"
                              id="vipprice"
                            />
                            <Button
                              sx={{
                                marginBottom: '15px',

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
                                style={{ height: '6px', marginLeft: '6px' }}
                                src={MaskImg}
                                alt=""
                              />
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
                <div>
                  {isMatch ? (
                    <>
                      <Grid
                        item={true}
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          width: '95%',
                          marginTop: '15px',

                          marginLeft: '10px',
                          '@media (min-width: 700px)': {
                            width: '100%',
                            marginLeft: '-30px',
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 'bold',

                            fontSize: '16px',
                            marginBottom: '10px',
                            '@media (min-width: 700px)': {
                              marginLeft: '100px',
                            },
                          }}
                        >
                          Date and Time
                        </Typography>

                        <CalendarPicker
                          data1={(value) => setValue(value)}
                          data2={(value2) => setValue2(value2)}
                        />
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid
                        item={true}
                        sx={{
                          width: '730px',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <h5
                          style={{
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            marginLeft: '90px',
                          }}
                        >
                          Date and Time
                        </h5>

                        <CalendarPicker
                          data1={(value) => setValue(value)}
                          data2={(value2) => setValue2(value2)}
                        />
                      </Grid>
                    </>
                  )}
                </div>

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
                      onClick={() => open(false)}
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
                        marginBottom: '20px',

                        '&:hover': {
                          backgroundColor: 'white',
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
                        marginBottom: '20px',

                        '&:hover': {
                          backgroundColor: '#3F3E8D',
                        },
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </>
              </Container>
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

export default EventEdit1
