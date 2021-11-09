import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import BookingModal from "../BookingModal/BookingModal";

const Booking = (props) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  const { name, time, space } = props.booking;
  const { date, setBookingSuccess } = props;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5 }} elevation={3}>
          <Typography
            sx={{ fontWeight: 600, color: "info.main" }}
            variant="h5"
            guttererBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{ mt: 2 }}
            variant="h6"
            guttererBottom
            component="div"
          >
            {time}
          </Typography>
          <Typography
            sx={{ color: "text.disabled" }}
            variant="caption"
            display="block"
            guttererBottom
            component="div"
          >
            {space} Spaces Available
          </Typography>
          <Button
            onClick={handleBookingOpen}
            sx={{ mt: 3 }}
            variant="contained"
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={props.booking}
        openBooking={openBooking}
        setOpenBooking={setOpenBooking}
        handleBookingOpen={handleBookingOpen}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
