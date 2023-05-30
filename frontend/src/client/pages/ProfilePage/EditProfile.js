import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container, Grid } from '@mui/material'

import './Profile.css'
import profileImg from '../../../assets/profile.svg'

import './Profile.css'
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'

const theme = createTheme()

function EditProfile({ next }) {
  const options = [
    { value: 1, label: 'Basic' },
    { value: 2, label: 'VIP' },
    { value: 3, label: 'VVIP' },
  ]

  const [selectedOption, setSelectedOption] = React.useState({
    label: 'Basic',
    value: 1,
  })

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'rgba(228, 232, 255, 0.3)',
      border: 'none',
      outline: '1px solid white',
    }),
    container: (provided) => ({
      ...provided,
      width: '100%',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      svg: {
        fill: '#F27405',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'gray',
    }),
  }

  const [input, setInput] = React.useState({
    name: 'Sifan Tilahun',
    userName: 'rasifan',
    phoneNumber: '+251931528565',
    email: 'eyosiyasat@gmail.com',
    plan: 'Basic',
    link: '',
  })
  const [files, setFiles] = React.useState([])
  const [fileErrors, setfileErrors] = React.useState([])
  const MAX_SIZE = 5000000
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',

    maxSize: MAX_SIZE,
    maxFiles: 2,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (files.length >= 2) {
        console.log('FULL')
      } else {
        if (acceptedFiles.length === 1) {
          setFiles([
            ...files,
            {
              name: acceptedFiles[0].name,
              lastModified: acceptedFiles[0].lastModified,
              lastModifiedDate: acceptedFiles[0].lastModifiedDate,
              path: acceptedFiles[0].path,
              size: acceptedFiles[0].size,
              type: acceptedFiles[0].type,
              webkitRelativePath: acceptedFiles[0].webkitRelativePath,
              preview: URL.createObjectURL(acceptedFiles[0]),
            },
          ])
        } else if (acceptedFiles.length === 2) {
          setFiles([
            ...files,
            {
              name: acceptedFiles[0].name,
              lastModified: acceptedFiles[0].lastModified,
              lastModifiedDate: acceptedFiles[0].lastModifiedDate,
              path: acceptedFiles[0].path,
              size: acceptedFiles[0].size,
              type: acceptedFiles[0].type,
              webkitRelativePath: acceptedFiles[0].webkitRelativePath,
              preview: URL.createObjectURL(acceptedFiles[0]),
            },
            {
              name: acceptedFiles[1].name,
              lastModified: acceptedFiles[1].lastModified,
              lastModifiedDate: acceptedFiles[1].lastModifiedDate,
              path: acceptedFiles[1].path,
              size: acceptedFiles[1].size,
              type: acceptedFiles[1].type,
              webkitRelativePath: acceptedFiles[1].webkitRelativePath,
              preview: URL.createObjectURL(acceptedFiles[1]),
            },
          ])
        }
      }

      setfileErrors(rejectedFiles.length > 0 ? rejectedFiles[0].errors : [])
    },
  })

  const errors = {
    FILESIZE: 'More than 2MB in size',
    FILETYPE: 'Not an image file',
  }

  const getErrorMessage = () => {
    switch (fileErrors[0].code) {
      case 'file-invalid-type':
        return <p className={'error'}>{errors.FILETYPE}</p>
      case 'file-too-large':
        return <p className={'error'}>{errors.FILESIZE}</p>
      default:
        return <p className={'error'}>File error</p>
    }
  }
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  function ByteToKB(x) {
    let l = 0,
      n = parseInt(x, 10) || 0

    while (n >= 1024 && ++l) {
      n = n / 1024
    }

    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'Center',
                flexDirection: 'column',
                width: '100%',
                borderBottom: '1px solid lightgray',
                paddingBottom: '30px',
                marginBottom: '30px',
              }}
            >
              <img
                style={{ height: '100px', marginBottom: '15px' }}
                src={profileImg}
                alt=""
              />
              <h5 style={{ fontWeight: 900 }}>Sifan Tilahun</h5>
              <h5 style={{ color: 'gray' }}>@rasifan</h5>
            </Box>
            <Grid
              xs={12}
              sx={{
                width: ' 100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Grid sx={{ width: '100%' }}>
                <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                  Name
                </h5>
                <input
                  value={input.name}
                  onChange={(e) => setInput({ name: e.target.value })}
                  className="input"
                  style={{
                    marginBottom: '30px',
                    borderRadius: '8px',
                    height: '40px',
                    width: '100%',
                    border: 'none',
                    color: 'gray',

                    backgroundColor: 'rgba(228, 232, 255, 0.3)',

                    '&:focus': {
                      borderColor: '1px solid #F27405',
                    },
                  }}
                  multiline={true}
                  required
                />
              </Grid>
              <Grid sx={{ width: '100%', marginBottom: '30px' }}>
                <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                  Username
                </h5>

                <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '26px' }}>
                    <h5 sx={{ fontWeight: 'bold' }}>@</h5>
                  </Box>

                  <input
                    className="input"
                    value={input.userName}
                    onChange={(e) => setInput({ userName: e.target.value })}
                    style={{
                      borderRadius: '8px',
                      height: '40px',
                      width: '100%',
                      border: 'none',
                      backgroundColor: 'rgba(228, 232, 255, 0.3)',
                      color: 'gray',
                    }}
                    multiline={true}
                    required
                  />
                </Grid>
              </Grid>
              <Grid sx={{ width: '100%', marginBottom: '30px' }}>
                <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                  Phone number
                </h5>
                <input
                  className="input"
                  value={input.phoneNumber}
                  onChange={(e) => setInput({ phoneNumber: e.target.value })}
                  style={{
                    borderRadius: '8px',
                    height: '40px',
                    width: '100%',
                    border: 'none',
                    backgroundColor: 'rgba(228, 232, 255, 0.3)',
                    color: 'gray',
                  }}
                  multiline={true}
                  required
                />
              </Grid>
              <Grid sx={{ width: '100%', marginBottom: '30px' }}>
                <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                  Email
                </h5>
                <input
                  className="input"
                  value={input.email}
                  onChange={(e) => setInput({ email: e.target.value })}
                  style={{
                    borderRadius: '8px',
                    height: '40px',
                    width: '100%',
                    border: 'none',
                    backgroundColor: 'rgba(228, 232, 255, 0.3)',
                    color: 'gray',
                  }}
                  multiline={true}
                  required
                />
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <h5 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                  Sub category
                </h5>

                <Grid
                  sx={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    marginBottom: '40px',
                  }}
                >
                  <Select
                    styles={colorStyles}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </Grid>
              </Grid>
                        <Grid sx={{ width: '100%', display: 'flex' }}>
                <Button
                  variant="contained"
                  onClick={() => next(false)}
                  sx={{
                    mt: 3,
                    width: '330px',
                    height: '37px',
                    color: 'black',
                    bgcolor: 'white',
                    marginLeft: '10px',
                    borderRight: 3,
                    borderLeft: 3,
                    borderTop: 3,
                    borderBottom: 3,
                    borderColor: '#F27405',
                    borderRadius: '6px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    textShadow: 'none',
                    marginBottom: '30px',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                  }}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    width: '330px',
                    height: '37px',
                    borderRadius: '6px',
                    textTransform: 'none',
                    bgcolor: '#3F3E8D',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    textShadow: 'none',
                    marginBottom: '30px',
                    marginLeft: '70px',

                    '&:hover': {
                      backgroundColor: '#3F3E8D',
                    },
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default EditProfile
