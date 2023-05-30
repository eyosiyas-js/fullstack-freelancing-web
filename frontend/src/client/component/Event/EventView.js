import { Box, Button, Grid, Modal, useMediaQuery } from '@mui/material'
import React from 'react'
import calendarImg from '../../../assets/calendar.svg'
import pinImg from '../../../assets/pin.svg'
import seenImg from '../../../assets/seen.svg'
import satImg from '../../../assets/sat.svg'
import liveImg from '../../../assets/live.svg'
import appsImg from '../../../assets/apps.svg'
import CloseImg from '../../../assets/close.png'
import EventViewMobile from './EventViewMobile'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../a-features/userSlice'
import EventImageUpload from './EventImageUpload'
const tags = ['music', 'life', 'event', 'concert']
const categories = ['1']

function EventView({
  open,
  owner,
  price,
  description,
  title,
  time,
  categoryy,
  count,
  id,
}) {
  const isMatch2 = useMediaQuery('(max-width:978px)')
  const user = useSelector(selectUser)

  const [openUploadImage, setOpenUploadImage] = React.useState(false)
  const handleOpenUploadImage = () => setOpenUploadImage(true)
  const handleCloseUploadImage = () => setOpenUploadImage(false)
  return (
    <div>
      {isMatch2 ? (
        <>
          <EventViewMobile key={'unike'} open={open} />
        </>
      ) : (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              height: '95%',
              transform: 'translate(-50%, -50%)',
              width: '35%',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '25px',
              borderColor: 'white',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderBottom: '1px solid lightgray',
                width: '100%',
              }}
            >
              <h2
                style={{
                  fontWeight: 'lighter',
                  marginTop: '70px',
                  marginBottom: '50px',
                }}
              >
                Job Details
              </h2>
            </Grid>
            <Grid
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflowY: 'scroll',
                '::-webkit-scrollbar': {
                  width: '5px',
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
              <Grid
                sx={{
                  width: '90%',
                  borderRadius: '18px',
                  marginTop: '10px',
                  maxHeight: 'auto',

                  minHeight: '100px',
                  display: 'flex',
                }}
              >
                <Grid
                  sx={{
                    width: '25%',
                    borderRadius: '8px',
                    height: '100%',
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    style={{ width: '100px' }}
                    src="https://thumbs.dreamstime.com/b/time-to-work-stopwatch-timer-icon-logo-simple-vector-filled-flat-time-to-work-stopwatch-timer-icon-logo-solid-black-pictogram-169761529.jpg"
                    alt=""
                  />
                </Grid>
                <Grid
                  sx={{
                    width: '55%',
                    height: '100%',
                    maxHeight: 'auto',

                    marginLeft: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <h4 style={{ fontWeight: 'bold', marginTop: '8px' }}>
                    {title}
                  </h4>
                  <Grid
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '10px',
                    }}
                  >
                    <img
                      style={{
                        height: '15px',
                        filter:
                          'invert(0%) sepia(100%) saturate(7500%) hue-rotate(59deg) brightness(8%) contrast(111%)',
                      }}
                      src={calendarImg}
                      alt=""
                    />
                    <h5 style={{ marginLeft: '10px', color: 'gray' }}>
                      {time}
                    </h5>
                  </Grid>
                  <Grid
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '10px',
                    }}
                  >
                    <img style={{ height: '15px' }} src={pinImg} alt="" />
                    <h5 style={{ color: 'gray', marginLeft: '10px' }}>
                      {owner}
                    </h5>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    width: '20%',

                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Grid
                    sx={{
                      marginTop: '5px',

                      marginLeft: '20px',
                    }}
                  >
                    <img
                      src={appsImg}
                      style={{ height: '25px', cursor: 'pointer' }}
                      alt=""
                    />
                  </Grid>
                  <Grid>
                    <Button
                      sx={{
                        width: '80px',
                        height: '28px',
                        bgcolor: '#E0E7FF',
                        borderRadius: '25px',
                        border: '1px solid #3F3E8D',
                        color: '#3F3E8D',
                        textTransform: 'none',
                      }}
                    >
                      Virtual
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  marginTop: '20px',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={seenImg}
                    style={{ height: '15px', cursor: 'pointer' }}
                    alt=""
                  />
                  <h5
                    style={{
                      color: '#3F3E8D',
                      marginLeft: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    123
                  </h5>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    marginLeft: '20px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={satImg}
                    style={{ height: '15px', cursor: 'pointer' }}
                    alt=""
                  />
                  <h5
                    style={{
                      color: '#3F3E8D',
                      marginLeft: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    123 Spots Left
                  </h5>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    marginLeft: '20px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={liveImg}
                    style={{ height: '15px', cursor: 'pointer' }}
                    alt=""
                  />
                  <h5
                    style={{
                      color: '#F27405',
                      fontWeight: 'bold',
                      marginLeft: '5px',
                    }}
                  >
                    Live now
                  </h5>
                </Grid>
              </Grid>
              <Grid sx={{ width: '90%', marginTop: '30px' }}>
                <Grid>
                  <h4 style={{ fontWeight: 'bold' }}>Description</h4>
                  <p
                    style={{
                      color: 'gray',
                      fontSize: '14px',
                      marginTop: '10px',
                    }}
                  >
                    {description}
                  </p>
                </Grid>
              </Grid>
              <Grid sx={{ width: '90%', marginTop: '30px' }}>
                <h4 style={{ fontWeight: 'bold' }}>Categories</h4>
                <Grid
                  sx={{ display: 'flex', flexFlow: 'wrap', marginTop: '10px' }}
                >
                  {categories.map((category) => (
                    <>
                      <h5
                        style={{
                          marginBottom: '10px',
                          padding: '20px',
                          minWidth: '180px',
                          maxWidth: 'auto',
                          height: '30px',
                          borderRadius: '25px',
                          textAlign: 'center',
                          paddingTop: '5px',
                          backgroundColor: '#e4e8ff',
                          color: '#3F3E8D',
                          marginRight: '10px',
                          flexBasis: '20%',
                        }}
                      >
                        {categoryy}
                      </h5>
                    </>
                  ))}
                </Grid>
              </Grid>
              <Grid item sx={{ width: '90%', marginTop: '30px' }}>
                <h4 style={{ fontWeight: 'bold' }}>Prices</h4>

                <Grid
                  sx={{
                    width: '100%',
                    borderRadius: '6px',
                    border: '1px solid #F27405',
                    height: '35px',
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <h5
                    style={{ margin: '0px 10px 0px 10px', fontWeight: 'bold' }}
                  >
                    price
                  </h5>
                  <p
                    style={{
                      flexGrow: 100,
                      height: '1px',
                      backgroundColor: 'gray',
                    }}
                  />
                  <h5
                    style={{ margin: '0px 10px 0px 10px', fontWeight: 'bold' }}
                  >
                    {price} <span>ETB</span>
                  </h5>
                </Grid>
                <Grid
                  sx={{
                    width: '100%',
                    height: '200px',
                    border: '1px solid gray',
                    margin: '35px 0px 30px 0px',
                  }}
                >
                  <h5 style={{ textAlign: 'center', paddingTop: '80px' }}>
                    Ethio-Freelance
                  </h5>
                </Grid>
                <Grid sx={{ width: '100%' }}>
                  {user.userCredentials.type === 'freelancer' && (
                    <Button
                      onClick={handleOpenUploadImage}
                      sx={{
                        width: '100%',
                        bgcolor: '#3F3E8D',
                        marginBottom: '10px',
                        textTransform: 'none',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#3F3E8D',
                          color: 'white',
                        },
                      }}
                    >
                      Apply
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ height: '15px' }} />
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
      <div>
        <Modal
          open={openUploadImage}
          onClose={handleCloseUploadImage}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <EventImageUpload
              id={id}
              open={(openUploadImage) => setOpenUploadImage(openUploadImage)}
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default EventView
