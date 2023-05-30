import * as React from 'react'
import Button from '@mui/material/Button'
import { Grid, Typography, Menu, useMediaQuery } from '@mui/material'
import { withStyles } from '@mui/styles'
import eventMoreImg from '../../../assets/eventmore.svg'
import calendarImg from '../../../assets/calendar.svg'
import pinImg from '../../../assets/pin.svg'
import hideImg from '../../../assets/hide.svg'
import editpImg from '../../../assets/editp.svg'
import editImg from '../../../assets/edit.svg'
import EventDelete from './EventDelete'
import DeleteImg from '../../../assets/Delete.svg'
import AddProfileImg from '../../../assets/AddProfile.svg'
import listImg from '../../../assets/list.svg'
import MuiMenuItem from '@mui/material/MenuItem'
import uploadImg from '../../../assets/upload.png'
import './Event.css'
import Modal from '@mui/material/Modal'
import EventEdit1 from './EventEdit/EventEdit1/EventEdit1'
import EventView from './EventView'
import ListAttendees from './ListAttendees'
import EventImageUpload from './EventImageUpload'
import axios from '../../../axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../a-features/userSlice'

const MenuItem = withStyles({
  root: {
    justifyContent: 'space-between',
  },
})(MuiMenuItem)

function Event({
  id,
  owner,
  price,
  description,
  title,
  time,
  category,
  count,
}) {
  const [open, setOpen] = React.useState(false)
  const [openEvent, setOpenEvent] = React.useState(false)
  const [openListAttendees, setOpenListAttendees] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleOpenEvent = () => setOpenEvent(true)
  const handleCloseEvent = () => setOpenEvent(false)
  const handleOpenListAttendees = () => setOpenListAttendees(true)
  const handleCloseListAttendees = () => setOpenListAttendees(false)
  const isMatch = useMediaQuery('(max-width:460px)')
  const isMatch2 = useMediaQuery('(max-width:860px)')
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const user = useSelector(selectUser)

  return (
    <div>
      <Grid
        sx={{
          cursor: 'pointer',
          width: '100%',
          minHeight: '120px',
          maxHeight: 'auto',
          bgcolor: 'white',
          borderRadius: '18px',
          boxShadow: '1px 0 8px 8px whitesmoke',
          display: 'flex',
        }}
      >
        <Grid
          sx={{
            width: '20%',
            minHeight: '120',
            maxHeight: 'auto',
            bgcolor: 'white',
            borderRadius: '18px',
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
            width: '80%',
            height: '100%',
            display: 'flex',
          }}
        >
          <Grid
            onClick={handleOpenEvent}
            sx={{
              marginLeft: '20px',
              minHeight: '120px',
              maxHeight: 'auto',
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              {isMatch ? (
                <>
                  <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
                </>
              ) : (
                <>
                  <h4 style={{ fontWeight: 'bold', marginTop: '8px' }}>
                    {title}
                  </h4>
                  <Button
                    sx={{
                      width: '85px',
                      height: '28px',
                      bgcolor: '#E0E7FF',
                      borderRadius: '25px',
                      border: '1px solid #3F3E8D',
                      color: '#3F3E8D',
                      textTransform: 'none',
                      marginLeft: '35px',
                      marginTop: '8px',
                    }}
                  >
                    Virtual
                  </Button>
                </>
              )}
            </Grid>
            <Grid
              sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
            >
              <img
                alt=""
                style={{
                  height: '15px',
                  filter:
                    'invert(0%) sepia(100%) saturate(7500%) hue-rotate(59deg) brightness(8%) contrast(111%)',
                }}
                src={calendarImg}
              />
              <h5 style={{ marginLeft: '10px', color: 'gray' }}>{time}</h5>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <img style={{ height: '15px' }} src={pinImg} alt="" />
              <h5 style={{ color: 'gray', marginLeft: '10px' }}>{owner}</h5>
            </Grid>
          </Grid>
          <Grid
            sx={{
              width: '10%',
              bgcolor: '#E0E7FF',
              marginRight: '10px',
              borderRadius: '0 18px 18px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid
              onClick={handleOpenUserMenu}
              sx={{
                width: '17px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img src={eventMoreImg} alt="" />
            </Grid>
            <Grid
              onClick={handleOpenUserMenu}
              sx={{
                width: '17px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img src={eventMoreImg} alt="" />
            </Grid>
            {isMatch2 ? (
              <Menu
                sx={{ mt: '30px', position: 'absolute', left: '10px' }}
                PaperProps={{
                  style: {
                    width: 200,
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
                {/* {settings.map((setting) => ( */}
                <div>
                  <div className="delete">
                    <MenuItem onClick={handleOpen}>
                      <Typography textAlign="center">Delete</Typography>
                      <img src={DeleteImg} className="DeleteimgIcon" alt="" />
                    </MenuItem>
                  </div>

                  <div className="hide">
                    <MenuItem onClick={handleOpenListAttendees}>
                      <Typography textAlign="center">List proposals</Typography>
                      <img src={listImg} className="HideimgIcon" alt="" />
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            ) : (
              <Menu
                sx={{ mt: '30px', position: 'absolute', left: '130px' }}
                PaperProps={{
                  style: {
                    width: 200,
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
                {/* {settings.map((setting) => ( */}
                <div>
                  <div className="delete">
                    <MenuItem onClick={handleOpen}>
                      <Typography textAlign="center">Delete</Typography>
                      <img src={DeleteImg} className="DeleteimgIcon" alt="" />
                    </MenuItem>
                  </div>
                  <div className="hide">
                    <MenuItem onClick={handleOpenListAttendees}>
                      <Typography textAlign="center">List proposals</Typography>
                      <img src={listImg} className="HideimgIcon" alt="" />
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            )}
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div>
                  <EventDelete open={(open) => setOpen(open)} id={id} />
                </div>
              </Modal>
            </div>
            <div>
              <Modal
                open={openEvent}
                onClose={handleCloseEvent}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div>
                  <EventView
                    open={(openEvent) => setOpenEvent(openEvent)}
                    owner={owner}
                    description={description}
                    title={title}
                    time={time}
                    categoryy={category}
                    price={price}
                    count={count}
                  />
                </div>
              </Modal>
            </div>

            <div>
              <Modal
                open={openListAttendees}
                onClose={handleCloseListAttendees}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div>
                  <ListAttendees
                    id={id}
                    open={(openListAttendees) =>
                      setOpenListAttendees(openListAttendees)
                    }
                  />
                </div>
              </Modal>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Event
