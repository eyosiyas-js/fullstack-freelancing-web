import * as React from 'react'
import './AppBar.css'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import logoutImg from '../../../assets/logout.svg'

import AvatarImg from '../../../assets/Avatar.svg'
import DrawerComp from './Drawer'
import { useDispatch } from 'react-redux'
import { logout } from '../../../a-features/userSlice'
import { useNavigate } from 'react-router-dom'

const HeaderBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <div className="appBar">
      <React.Fragment>
        <AppBar sx={{ bgcolor: 'white' }}>
          <Toolbar>
            <img
              className="logo"
              src="https://thumbs.dreamstime.com/b/time-to-work-stopwatch-timer-icon-logo-simple-vector-filled-flat-time-to-work-stopwatch-timer-icon-logo-solid-black-pictogram-169761529.jpg"
              alt=""
            />
            {isMatch ? (
              <>
                <Box sx={{ position: 'absolute', right: '70px', flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <img className="avatar_img" src={AvatarImg} alt="" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    PaperProps={{
                      style: {
                        width: 160,
                        borderRadius: 25,
                      },
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <div>
                      <div className="edit">
                        <MenuItem onClick={() => navigate('/freelancer')}>
                          <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                      </div>
                      <div className="hide">
                        <MenuItem onClick={() => navigate('/freelancer')}>
                          <Typography textAlign="center">jobs</Typography>
                        </MenuItem>
                      </div>
                      <div className="delete">
                        <MenuItem
                          onClick={() => navigate('/freelancer/profile')}
                        >
                          <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                      </div>
                      <div className="hide">
                        <MenuItem onClick={() => dispatch(logout())}>
                          <Typography textAlign="center">Log out</Typography>
                          <img
                            style={{ height: '20px', marginLeft: 'auto' }}
                            src={logoutImg}
                            alt=""
                          />
                        </MenuItem>
                      </div>
                    </div>
                  </Menu>
                </Box>
                <DrawerComp />
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate('/chat')}
                  sx={{
                    marginLeft: 'auto',
                    color: 'white',
                    bgcolor: '#3E3F8D',
                    borderRight: 2,
                    borderLeft: 2,
                    borderTop: 2,
                    borderBottom: 2,
                    borderColor: '#3E3F8D',
                    borderRadius: '20px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    height: '35px',
                    width: '100px',
                    '&:hover': {
                      backgroundColor: '#3E3F8D',
                      color: 'white',
                    },
                  }}
                  variant="contained"
                >
                  Inbox
                </Button>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <img className="avatar_img" src={AvatarImg} alt="" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '49px', position: 'absolute', left: '23px' }}
                    PaperProps={{
                      style: {
                        width: 160,
                        borderRadius: 25,
                      },
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <div>
                      <div className="edit">
                        <MenuItem onClick={() => navigate('/freelancer')}>
                          <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                      </div>
                      <div className="hide">
                        <MenuItem onClick={() => navigate('/freelancer')}>
                          <Typography textAlign="center">Jobs</Typography>
                        </MenuItem>
                      </div>
                      <div className="delete">
                        <MenuItem
                          onClick={() => navigate('/freelancer/profile')}
                        >
                          <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                      </div>
                      <div className="hide">
                        <MenuItem onClick={() => dispatch(logout())}>
                          <Typography textAlign="center">Log out</Typography>
                          <img
                            style={{ height: '20px', marginLeft: 'auto' }}
                            src={logoutImg}
                            alt=""
                          />
                        </MenuItem>
                      </div>
                    </div>
                  </Menu>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  )
}

export default HeaderBar
