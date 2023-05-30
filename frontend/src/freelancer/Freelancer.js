import { Grid, Container, Select, MenuItem } from '@mui/material'
import React from 'react'
import HeaderBar from '../client/component/AppBar/AppBar'
import Event from './Event'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { selectUser } from '../a-features/userSlice'
import { useSelector } from 'react-redux'
import axios from '../axios'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const theme = createTheme()

function Freelancer() {
  const data = useSelector(selectUser)
  const [category, setCategory] = React.useState('all')

  const [jobs, setJobs] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`/jobs/${category}`)
      .then((res) => {
        setJobs(res.data)
        console.log(jobs)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [category])
  // React.useEffect(() => {
  //   axios
  //     .get('/jobs')
  //     .then((res) => {
  //       setJobs(res.data)
  //       console.log(jobs)
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data)
  //     })
  // }, [])

  return (
    <div>
      <HeaderBar />
      <div>
        <Grid item sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
          <Grid sx={{ display: 'flex', position: 'relative', width: '350px' }}>
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
              <MenuItem value={'all'}>All</MenuItem>
              <MenuItem value={'Development and IT'}>Development & IT</MenuItem>
              <MenuItem value={'Design and Creative'}>
                Design & Creative
              </MenuItem>
              <MenuItem value={'Sales and Marketing'}>
                Sales & Marketing
              </MenuItem>
              <MenuItem value={'Writing and Translation'}>
                Writing & Translation
              </MenuItem>
              <MenuItem value={'Finance and Accounting'}>
                Finance & Accounting
              </MenuItem>
              <MenuItem value={'Engineering and Architecture'}>
                Engineering & Architecture
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
        <>
          <ThemeProvider theme={theme}>
            <Container
              component="main"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ width: '650px' }} className="main">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'Center',
                      width: '100%',
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      {jobs.map((job) => (
                        <Grid sx={{ width: '100%', marginTop: '40px' }}>
                          <Event
                            id={job.jobID}
                            owner={job.owner}
                            title={job.title}
                            time={job.duration}
                            description={job.description}
                            category={job.category}
                            price={job.price}
                            count={job.proposalsCount}
                          />
                        </Grid>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </div>
            </Container>
          </ThemeProvider>
        </>
      </div>
    </div>
  )
}

export default Freelancer
