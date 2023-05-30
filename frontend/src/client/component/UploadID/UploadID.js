import { Box, Button, Grid, useMediaQuery } from '@mui/material'
import * as React from 'react'
import UploadImg from '../../../assets/upload.png'
import CloseImg from '../../../assets/close.png'

import { useDropzone } from 'react-dropzone'
import UploadComplete from './UploadComplete'
function UploadID({ open, next, form }) {
  const [openModal, setOpenModal] = React.useState(false)
  const [files, setFiles] = React.useState([])
  const [fileErrors, setfileErrors] = React.useState([])
  const isMatch = useMediaQuery('(max-width:860px)')
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
    <div style={{ width: '100%' }}>
      {openModal ? (
        <>
          <UploadComplete
            form={form}
            next={next}
            open={(openModal) => setOpenModal(openModal)}
          />
        </>
      ) : (
        <>
          {isMatch ? (
            <>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  height: 'auto',
                  paddingBottom: '20px',
                  transform: 'translate(-50%, -50%)',
                  width: '95%',
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',

                  borderRadius: '12px',
                  borderColor: 'white',
                }}
              >
                <Grid
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <h5 style={{ marginTop: '45px', color: '#3F3E8D' }}>
                    You have not Uploaded Kebele/Identification
                  </h5>
                </Grid>
                <h6
                  style={{
                    textAlign: 'start',
                    width: '90%',
                    marginTop: '20px',
                  }}
                >
                  To verify your event we need legal identification,please
                  select two pictures of your ID
                </h6>
                <Grid
                  {...getRootProps()}
                  sx={{
                    width: '90%',
                    height: '150px',
                    bgcolor: 'rgba(228, 232, 255, 0.3)',
                    marginTop: '25px',
                    border: '1px solid rgba(228, 232, 255, 0.9)',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <input {...getInputProps()} />

                  <img style={{ width: '100px' }} src={UploadImg} alt="" />
                  <h4 style={{ color: 'gray', marginTop: '10px' }}>
                    Drag and drop The files here
                  </h4>
                </Grid>
                <Grid
                  sx={{
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                    marginTop: '20px',
                  }}
                >
                  {files.map((file) => (
                    <h5 style={{ marginBottom: '10px' }}>
                      {`${files.indexOf(file) + 1}.  `}
                      {file.path}
                      <span style={{ marginLeft: '10px' }}>
                        {ByteToKB(file.size)}
                      </span>
                    </h5>
                  ))}
                </Grid>
                <Grid
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginTop: '55px',
                  }}
                >
                  <Button
                    onClick={() => {
                      open(false)
                      next(false)
                    }}
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
                    onClick={() => {
                      setOpenModal(true)
                    }}
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
                    Next
                  </Button>
                </Grid>
                <Box sx={{ position: 'absolute', right: 4, top: 4 }}>
                  <img
                    onClick={() => {
                      open(false)
                      next(false)
                    }}
                    style={{ height: '30px', cursor: 'pointer' }}
                    src={CloseImg}
                    alt=""
                  />
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  height: 'auto',
                  paddingBottom: '30px',
                  transform: 'translate(-50%, -50%)',
                  width: 800,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',

                  borderRadius: '12px',
                  borderColor: 'white',
                }}
              >
                <Grid
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <h4 style={{ marginTop: '35px', color: '#3F3E8D' }}>
                    You have not Uploaded Kebele/Identification
                  </h4>
                </Grid>
                <h5
                  style={{
                    textAlign: 'start',
                    width: '90%',
                    marginTop: '20px',
                  }}
                >
                  To verify your event we need legal identification,please
                  select two pictures of your ID
                </h5>
                <Grid
                  {...getRootProps()}
                  sx={{
                    width: '90%',
                    height: '150px',
                    bgcolor: 'rgba(228, 232, 255, 0.3)',
                    marginTop: '25px',
                    border: '1px solid rgba(228, 232, 255, 0.9)',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <input {...getInputProps()} />

                  <img style={{ width: '100px' }} src={UploadImg} alt="" />
                  <h4 style={{ color: 'gray', marginTop: '10px' }}>
                    Drag and drop The files here
                  </h4>
                </Grid>
                <Grid
                  sx={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginTop: '20px',
                  }}
                >
                  {files.map((file) => (
                    <h5>
                      {`${files.indexOf(file) + 1}.  `}
                      {file.path}
                      <span style={{ marginLeft: '10px' }}>
                        {ByteToKB(file.size)}
                      </span>
                    </h5>
                  ))}

                  {/* <h5>
            2. Addis flyer.png <span style={{ marginLeft: "10px" }}>12kb</span>
          </h5> */}
                </Grid>
                <Grid
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginTop: '55px',
                  }}
                >
                  <Button
                    onClick={() => {
                      open(false)
                      next(false)
                    }}
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
                    onClick={() => {
                      setOpenModal(true)
                    }}
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
                    Next
                  </Button>
                </Grid>
                <Box sx={{ position: 'absolute', right: 4, top: 4 }}>
                  <img
                    onClick={() => {
                      open(false)
                      next(false)
                    }}
                    style={{ height: '30px', cursor: 'pointer' }}
                    src={CloseImg}
                    alt=""
                  />
                </Box>
              </Box>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default UploadID
