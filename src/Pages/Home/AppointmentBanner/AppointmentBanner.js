import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Container, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};
const AppointmentBanner = () => {
  return (
    <Container>
      <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "400px", marginTop: "-110px" }}
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ color: "#5CE7ED", mb: 5 }}>
                Appointment
              </Typography>
              <Typography variant="h4" sx={{ color: "white", my: 3 }}>
                Make an Appointment Today
              </Typography>
              <Typography variant="body2" sx={{ color: "white", my: 2 }}>
                Make an Appointment Today
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: "#5CE7ED" }}>
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppointmentBanner;
