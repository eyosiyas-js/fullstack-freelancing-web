import { Box, Button, Grid, useMediaQuery } from '@mui/material'
import * as React from 'react'
import UploadImg from '../../../assets/upload.png'
import CloseImg from '../../../assets/close.png'

import { useDropzone } from 'react-dropzone'
import axios from '../../../axios'
function EventImageUpload({ open, id }) {
  const [file, setFile] = React.useState(null)
  const isMatch = useMediaQuery('(max-width:860px)')
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }
  const handleNext = (e) => {
    if (file) {
      const fileForm = new FormData()
      fileForm.append('file', file, file.name)
      axios
        .post(`/job/${id}/uploadproposal`, fileForm)
        .then((res) => {
          console.log(res.data)
          open(false)
          alert('Uploaded Successfully')
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  }
  React.useEffect(() => {
    console.log(id)
  })
  return (
    <div style={{ width: '100%' }}>
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
                Uploaded a new proposal
              </h5>
            </Grid>
            <h6
              style={{
                textAlign: 'start',
                width: '90%',
                marginTop: '20px',
              }}
            >
              Please select a file for your proposal
            </h6>
            <Grid
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
              <input
                type="file"
                onChange={handleChange}
                accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
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
                Uploaded a new proposal
              </h4>
            </Grid>
            <h5
              style={{
                textAlign: 'start',
                width: '90%',
                marginTop: '20px',
              }}
            >
              Please select a file for your proposal
            </h5>
            <Grid
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
              <img src={UploadImg} alt="" />
              <h4 style={{ color: 'gray', marginTop: '5px' }}>
                drop The files here
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
              <input
                type="file"
                onChange={handleChange}
                accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />

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
                onClick={handleNext}
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
                }}
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

export default EventImageUpload
