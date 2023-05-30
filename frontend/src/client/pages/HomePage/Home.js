import React, { useEffect, useState } from 'react'
import HeaderBar from '../../component/AppBar/AppBar'
import RoutingBar from '../../component/RoutingBar/RoutingBar'
import './Home.css'
import DashboardImg from '../../../assets/dashbord.svg'
import { Button, Container, Modal, useMediaQuery } from '@mui/material'
import UploadID from '../../component/UploadID/UploadID'
import EventForm from '../../component/EventForm/EventForm'

function Home() {
  const [openForm, setOpenForm] = React.useState(false)
  const [openVerify, setOpenVerify] = React.useState(false)
  const [openUpload, setOpenUpload] = React.useState(false)

  const handleCloseVerify = () => {
    setNextValue(false)
    setOpenVerify(false)
  }
  const handleCloseUpload = () => {
    setNextValue(false)
    setOpenUpload(false)
  }

  const [nextValue, setNextValue] = useState(false)
  useEffect(() => {
    console.log(nextValue)
  }, [nextValue])
  const [accVerified, setAccVerified] = useState(true)
  const isMatch = useMediaQuery('(max-width:460px)')
  const nextOption = () => {
    setNextValue(true)
  }
  return (
    <div className="home" style={{ width: '100%' }}>
      {isMatch ? (
        <>
          <HeaderBar />
          <div className="home_route_bar">
            <RoutingBar />
          </div>
          {nextValue ? (
            <EventForm />
          ) : (
            <Container
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '40px',
                alignItems: 'center',
              }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2017/06/16/07/26/under-construction-2408059_1280.png"
                className="img"
                alt=""
                style={{
                  height: '320px',
                  textAlign: 'center',
                }}
              />
              <h2
                className="text"
                style={{
                  font: 'Montserrat',
                  fontWeight: 'bold',
                  fontSize: '19px',
                  marginTop: '25px',
                }}
              >
                Dashboard is under construction!
              </h2>
              <Button
                className="button"
                sx={{
                  width: '350px',
                  bgcolor: '#3F3E8D',
                  color: 'white',
                  height: '50px',
                  marginTop: '40px',
                  borderRadius: '13px',
                  textTransform: 'none',
                  fontSize: '17px',
                  '&:hover': {
                    backgroundColor: '#F27405',
                    color: 'white',
                  },
                }}
                onClick={nextOption}
              >
                Create a Job
              </Button>
            </Container>
          )}
        </>
      ) : (
        <>
          <HeaderBar />
          <div className="home_route_bar">
            <RoutingBar />
          </div>
          {nextValue ? (
            <EventForm />
          ) : (
            <Container
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '40px',
              alignItems: 'center',
            }}
          >
            <img
       src="https://cdn.pixabay.com/photo/2017/06/16/07/26/under-construction-2408059_1280.png"
              className="img"
              alt=""
              style={{ height: '320px', textAlign: 'center' }}
            />
            <h2
              style={{
                font: 'Montserrat',
                fontWeight: 'bold',
                fontSize: '23px',
                marginTop: '25px',
              }}
            >
              Dashboard is under construction!
            </h2>
            <Button
              sx={{
                width: '350px',
                bgcolor: 'rgb(255, 187, 0) ',
                color: 'white',
                height: '50px',
                marginTop: '40px',
                borderRadius: '13px',
                textTransform: 'none',
                fontSize: '17px',
                '&:hover': {
                  backgroundColor: '#F27405',
                  color: 'white',
                },
              }}
              onClick={nextOption}
            >
              Create a Job
            </Button>
          </Container>
            
          )}

          
        </>
      )}
    </div>
  )
}

export default Home
