import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import "./EventForm.css";

export default function CalendarPicker({ data1, data2 }) {
  const isMatch = useMediaQuery("(max-width:660px)");

  const [value, setValue] = React.useState(new Date("2021-04-18T21:11:00"));
  const [value2, setValue2] = React.useState(new Date("2021-04-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue)
    data1(newValue);
  };
  const handleChange2 = (newValue2) => {
    setValue2(newValue2);

    data2(newValue2);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack>
        <>
          {isMatch ? (
            <>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Grid sx={{ display: "flex" }}>
                  <DesktopDatePicker
                    InputProps={{
                      style: {
                        height: "50px",
                        borderRadius: "12px 0 0 12px",
                        backgroundColor: "rgba(228, 232, 255,0.3)",
                      },
                    }}
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <TimePicker
                    InputProps={{
                      style: {
                        height: "50px",

                        borderRadius: "0 12px 12px 0",
                        backgroundColor: "rgba(228, 232, 255,0.3)",
                      },
                    }}
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <h4
                  style={{
                    textAlign: "center",
                    marginTop: "15px",
                    marginBottom: "15px",

                    fontWeight: "bold",
                  }}
                >
                  To
                </h4>
                <Grid sx={{ display: "flex" }}>
                  <DesktopDatePicker
                    InputProps={{
                      style: {
                        height: "50px",
                        borderRadius: "12px 0 0 12px",
                        backgroundColor: "rgba(228, 232, 255,0.3)",
                      },
                    }}
                    className="timePeaker"
                    inputFormat="MM/dd/yyyy"
                    value={value2}
                    onChange={handleChange2}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <TimePicker
                    InputProps={{
                      style: {
                        height: "50px",
                        borderLeft: "none",

                        borderRadius: "0 12px 12px 0",
                        backgroundColor: "rgba(228, 232, 255,0.3)",
                      },
                    }}
                    value={value2}
                    onChange={handleChange2}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "90px",
                }}
              >
                <Grid sx={{ display: "flex" }}>
                  <DesktopDatePicker
                    InputProps={{
                      style: {
                        height: "50px",
                        borderRadius: "12px 0 0 12px",
                        backgroundColor: "rgba(228, 232, 255,0.3)",
                      },
                    }}
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <TimePicker
                    InputProps={{
                      style: {
                        height: "50px",

                        borderRadius: "0 12px 12px 0",
                        backgroundColor: "rgba(228, 232, 255,0.3)",
                      },
                    }}
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <h4
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    fontWeight: "bold",
                  }}
                >
                  To
                </h4>
                <Grid sx={{ display: "flex" }}>
                  <DesktopDatePicker
                    InputProps={{
                      style: {
                        height: "50px",
                        borderRadius: "12px 0 0 12px",
                        backgroundColor: "rgba(228, 232, 255,0.3)",
                      },
                    }}
                    className="timePeaker"
                    inputFormat="MM/dd/yyyy"
                    value={value2}
                    onChange={handleChange2}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <TimePicker
                    InputProps={{
                      style: {
                        height: "50px",
                        borderLeft: "none",

                        borderRadius: "0 12px 12px 0",
                        backgroundColor: "rgba(228, 232, 255,0.3)",
                      },
                    }}
                    value={value2}
                    onChange={handleChange2}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </>
      </Stack>
    </LocalizationProvider>
  );
}
