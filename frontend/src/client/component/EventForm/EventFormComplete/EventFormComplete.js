import React from 'react'
import DoneImg from '../../../../assets/Done.svg'
import CloseImg from '../../../../assets/close.png'
import { Box, Button, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '12px',
  borderColor: 'white',
}

function EventFormComplete({ open, Next, openModal, nextC }) {
  const navigate = useNavigate()

  const isMatch = useMediaQuery('(max-width:860px)')

  return (
    <div>
      {isMatch ? (
        <>
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
              py: 4,
              px: 2,
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
            <h5
              style={{
                marginTop: '20px',
                fontSize: '13px',
                fontWeight: 'bold',
              }}
            >
              Congratulations you have posted your event
            </h5>

            <h6 style={{ marginTop: '20px', color: '#3F3E8D' }}>
              You can find your events on "Events" Tab.
            </h6>
            <Button
              onClick={() => navigate('/events')}
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                width: '260px',
                height: '50px',
                borderRadius: '12px',
                textTransform: 'none',
                bgcolor: '#3F3E8D',
                fontSize: '15px',
                fontWeight: 'bold',
                boxShadow: 'none',
                textShadow: 'none',
                marginBottom: '30px',
                '&:hover': {
                  backgroundColor: '#3F3E8D',
                },
              }}
            >
              Go to events
            </Button>
            <Box sx={{ position: 'absolute', right: 4, top: 4 }}>
              <img
                onClick={() => {
                  open(false)
                  Next(false)
                  openModal(false)
                  nextC(false)
                }}
                style={{ height: '30px' }}
                src={CloseImg}
                alt=""
              />
            </Box>
          </Box>
        </>
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
              Congratulations you have posted your event
            </h3>

            <h4 style={{ marginTop: '20px', color: '#3F3E8D' }}>
              You can find your events on "Events" Tab.
            </h4>
            <Button
              onClick={() => navigate('/events')}
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                width: '260px',
                height: '50px',
                borderRadius: '12px',
                textTransform: 'none',
                bgcolor: '#3F3E8D',
                fontSize: '20px',
                fontWeight: 'bold',
                boxShadow: 'none',
                textShadow: 'none',
                marginBottom: '30px',
                '&:hover': {
                  backgroundColor: '#3F3E8D',
                },
              }}
            >
              Go to events
            </Button>
            <Box sx={{ position: 'absolute', right: 4, top: 4 }}>
              <img
                onClick={() => {
                  open(false)
                  Next(false)
                  openModal(false)
                  nextC(false)
                }}
                style={{ height: '30px', cursor: 'pointer' }}
                src={CloseImg}
                alt=""
              />
            </Box>
          </Box>
        </>
      )}
      ;
    </div>
  )
}

export default EventFormComplete
