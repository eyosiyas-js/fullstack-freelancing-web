import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import calendarImg from '../../../assets/calendar.svg'
import pinImg from '../../../assets/pin.svg'
import seenImg from '../../../assets/seen.svg'
import satImg from '../../../assets/sat.svg'
import liveImg from '../../../assets/live.svg'
import appsImg from '../../../assets/apps.svg'
import CloseImg from '../../../assets/close.png'

const tags = ['music', 'life', 'event', 'concert']
const categories = ['Health', 'Sport', 'Education']

function EventViewMobile({ open }) {
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '25px',
          borderColor: 'white',
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
            Picture
          </h2>
        </Grid>

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
              bgcolor: 'black',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h2 style={{ color: 'white' }}>Mar</h2>
            <h2 style={{ color: 'white' }}>29</h2>
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
              New Addis festival
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
                8:50 AM to 9:00PM
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
              <h5 style={{ color: 'gray', marginLeft: '10px' }}>Feshta Hall</h5>
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
                alt=""
                style={{ height: '25px', cursor: 'pointer' }}
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
            marginTop: '10px',
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
            sx={{ display: 'flex', marginLeft: '20px', alignItems: 'center' }}
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
            sx={{ display: 'flex', marginLeft: '20px', alignItems: 'center' }}
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
        <Grid sx={{ width: '90%', marginTop: '20px' }}>
          <Grid>
            <h4 style={{ fontWeight: 'bold' }}>Description</h4>
            <p style={{ color: 'gray', fontSize: '14px', marginTop: '10px' }}>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </Grid>
          <Grid sx={{ marginTop: '15px' }}>
            <h4>Tags</h4>
            <Grid sx={{ display: 'flex', flexFlow: 'wrap', marginTop: '10px' }}>
              {tags.map((tag) => (
                <>
                  <h5
                    key={'u'}
                    style={{
                      color: '#3F3E8D',
                      marginRight: '10px',
                      flexBasis: '20%',
                    }}
                  >
                    #{tag}
                  </h5>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ width: '90%', marginTop: '20px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Categories</h4>
          <Grid sx={{ display: 'flex', flexFlow: 'wrap', marginTop: '10px' }}>
            {categories.map((category) => (
              <>
                <h5
                  key={'un'}
                  style={{
                    marginBottom: '10px',
                    padding: '20px',
                    minwidth: '40px',
                    maxwidth: 'auto 10px',
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
                  {category}
                </h5>
              </>
            ))}
          </Grid>
        </Grid>
        <Grid sx={{ width: '90%', marginTop: '20px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Prices</h4>
          <Grid
            sx={{
              width: '100%',
              borderRadius: '6px',

              border: '1px solid #3F3E8D',
              height: '35px',
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h5 style={{ margin: '0px 10px 0px 10px', fontWeight: 'bold' }}>
              Normal
            </h5>
            <p
              style={{
                flexGrow: 100,
                height: '1px',
                backgroundColor: 'gray',
              }}
            />
            <h5 style={{ margin: '0px 10px 0px 10px', fontWeight: 'bold' }}>
              250 <span>ETB</span>
            </h5>
          </Grid>
          <Grid
            sx={{
              width: '100%',
              borderRadius: '6px',
              border: '1px solid #F27405',
              height: '35px',
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h5 style={{ margin: '0px 10px 0px 10px', fontWeight: 'bold' }}>
              VIP
            </h5>
            <p
              style={{
                flexGrow: 100,
                height: '1px',
                backgroundColor: 'gray',
              }}
            />
            <h5 style={{ margin: '0px 10px 0px 10px', fontWeight: 'bold' }}>
              550 <span>ETB</span>
            </h5>
          </Grid>
          <Grid
            sx={{
              width: '100%',
              height: '200px',
              border: '1px solid gray',
              margin: '20px 0px 30px 0px',
            }}
          >
            <h5 style={{ textAlign: 'center', paddingTop: '80px' }}>
              Location
            </h5>
          </Grid>
          <Grid sx={{ width: '100%' }}>
            <Button
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
              Edit
            </Button>
          </Grid>
        </Grid>
        <Grid sx={{ height: '15px' }} />
        <Box sx={{ position: 'absolute', right: 8, top: 8 }}>
          <img
            onClick={() => open(false)}
            style={{ height: '30px' }}
            src={CloseImg}
            alt=""
          />
        </Box>
      </Box>
    </div>
  )
}

export default EventViewMobile
