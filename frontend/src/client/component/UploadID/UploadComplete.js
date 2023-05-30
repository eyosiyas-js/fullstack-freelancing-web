import React from 'react'
import DoneImg from '../../../assets/Done.svg'
import CloseImg from '../../../assets/close.png'
import { Box, Button, Grid, useMediaQuery } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  py: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '12px',
  borderColor: 'white',
}

function UploadComplete({ form, open, next }) {
  const isMatch = useMediaQuery('(max-width:860px)')

  return (
    <div style={{ width: '100%' }}>
      {isMatch ? (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '95%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            py: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '12px',
            borderColor: 'white',
          }}
        >
          <img
            loading="lazy"
            style={{ height: '130px' }}
            src={DoneImg}
            alt=""
          />
          <h4
            style={{
              marginTop: '20px',
              fontWeight: 'bold',
              fontSize: '15px',
            }}
          >
            Congratulations you have Uploaded your ID
          </h4>

          <h6 style={{ marginTop: '20px', color: '#3F3E8D' }}>
            Now the admin will verify your account in 24hours!
          </h6>
          <Grid
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '55px',
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
                borderTop: 1,
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
              onClick={() => form(true)}
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

                '&:hover': {
                  backgroundColor: '#3F3E8D',
                },
              }}
            >
              Continue
            </Button>
          </Grid>
          <Box sx={{ position: 'absolute', right: 4, top: 4 }}>
            <img
              onClick={() => next(false)}
              style={{ height: '30px' }}
              src={CloseImg}
              alt=""
            />
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={style}>
            <img
              loading="lazy"
              style={{ height: '130px' }}
              src={DoneImg}
              alt=""
            />
            <h3
              style={{
                marginTop: '20px',
                fontWeight: 'bold',
                fontSize: '20px',
              }}
            >
              Congratulations you have Uploaded your ID
            </h3>

            <h4 style={{ marginTop: '20px', color: '#3F3E8D' }}>
              Now the admin will verify your account in 24hours!
            </h4>

            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '55px',
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
                  borderTop: 1,
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
                onClick={() => form(true)}
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

                  '&:hover': {
                    backgroundColor: '#3F3E8D',
                  },
                }}
              >
                Continue
              </Button>
            </Grid>
            <Box sx={{ position: 'absolute', right: 4, top: 4 }}>
              <img
                onClick={() => next(false)}
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

export default UploadComplete
