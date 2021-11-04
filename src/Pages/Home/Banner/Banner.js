import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography, Button, Box } from "@mui/material";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={{ bannerBg }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", my: 3 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              explicabo repellat magnam expedita officiis qui eligendi
              accusantium quisquam dolore quidem?
            </Typography>
            <Button variant="contained">Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
