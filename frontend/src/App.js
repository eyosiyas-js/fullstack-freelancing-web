import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './LoginPage/Login'
import Home from './client/pages/HomePage/Home'
import { useNavigate } from 'react-router-dom'
import Profile from './client/pages/ProfilePage/Profile'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Events from './client/pages/Events/Events'
import { useSelector, useDispatch } from 'react-redux'
import EventForm from './client/component/EventForm/EventForm'
import { login, logout, selectUser } from './a-features/userSlice'
import jwtDecode from 'jwt-decode'
import axios from './axios'
import Freelancer from './freelancer/Freelancer'
import FProfile from './freelancer/Profile'
import UProfile from './client/pages/ProfilePage/UProfile'
import Chat from './chat/Chat'
const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
})

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pathname = window.location.pathname
  const user = useSelector(selectUser)
  const [time, setTime] = useState()

  useEffect(() => {
    const token = localStorage.getItem('FBTOKEN')

    if (token) {
      const decodedToken = jwtDecode(token)
      console.log(decodedToken.exp * 1000 < Date.now())
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logout())
      } else {
        axios.defaults.headers.common['Authorization'] = token
        axios
          .get('/user/me')
          .then((res) => {
            dispatch(login(res.data))
          })
          .catch((err) => {
            console.log(err.response.data)
          })
      }
    }
  }, [])
  useEffect(() => {
    if (user && user.userCredentials.type === 'freelancer') {
      navigate('/freelancer')
    }
    if (user && user.userCredentials.type === 'client') {
      navigate('/')
    }
  }, [user])
  return (
    <>
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <ThemeProvider theme={theme}>
          <div>
            <>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/jobs" element={<Events />} />
                <Route path="/eventcreate" element={<EventForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/freelancer" element={<Freelancer />} />
                <Route path="/freelancer/profile" element={<FProfile />} />
                <Route path="/profile/:name" element={<UProfile />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="rooms/:username" element={<Chat />} />
              </Routes>
            </>
          </div>
        </ThemeProvider>
      )}
    </>
  )
}

export default App
