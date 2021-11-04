import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
const services = [
  {
    name: "fluoride Treatment",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Numquam aspernatur nam perferendis quae nobis id laudantium iste tempora cumque, perspiciatis impedit tempore amet dolores nemo, aliquid quasi reiciendis! Adipisci, nesciunt.",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Numquam aspernatur nam perferendis quae nobis id laudantium iste tempora cumque, perspiciatis impedit tempore amet dolores nemo, aliquid quasi reiciendis! Adipisci, nesciunt.",
    img: cavity,
  },

  {
    name: "Teeth Whitening",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Numquam aspernatur nam perferendis quae nobis id laudantium iste tempora cumque, perspiciatis impedit tempore amet dolores nemo, aliquid quasi reiciendis! Adipisci, nesciunt.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 3, color: "success.main" }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
