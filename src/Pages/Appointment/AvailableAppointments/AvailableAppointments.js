import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontcs",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "08.00 AM - 09.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "08.00 AM - 09.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "08.00 AM - 09.00 AM",
    space: 7,
  },
  {
    id: 5,
    name: "Teeth Orthodontcs",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontcs",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 7,
    name: "Teeth Orthodontcs",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 8,
    name: "Teeth Orthodontcs",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <div>
      <Container>
        <Typography variant="h2" sx={{ color: "info.main", my: 5 }}>
          Available Appointments on {date.toDateString()}
        </Typography>
        {bookingSuccess && (
          <Alert severity="success">appointment booked successfully</Alert>
        )}
        <Grid container spacing={2}>
          {bookings.map((booking) => (
            <Booking
              key={booking.id}
              booking={booking}
              date={date}
              setBookingSuccess={setBookingSuccess}
            ></Booking>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AvailableAppointments;
