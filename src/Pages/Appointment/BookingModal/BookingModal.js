import React from "react";
// import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// web.cjs is required for IE11 support
// import { useSpring, animated } from "react-spring/web.cjs";
import { Fade } from "@mui/material";
import TextField from "@mui/material/TextField";

// const Fade = React.forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// Fade.propTypes = {
//   children: PropTypes.element,
//   in: PropTypes.bool.isRequired,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
// };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  date,
  booking,
  openBooking,
  setOpenBooking,
  handleBookingClose,
  handleBookingOpen,
}) => {
  const handleConfirmBooking = (e) => {
    alert("Submitting");
    //   collect data
    //   send to the form
    handleBookingClose();
    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600, mb: 2 }}
            id="spring-modal-title"
            variant="h4"
            // component="h1
          >
            {booking.name}
          </Typography>
          <form action="" onSubmit={handleConfirmBooking}>
            <TextField
              //   label="Size"
              disabled
              sx={{ width: "90%" }}
              id="outlined-size-small"
              defaultValue={booking.time}
              size="small"
            />
            <TextField
              label="Your Name"
              sx={{ width: "90%", mt: 1 }}
              id="outlined-size-small"
              defaultValue=""
              size="small"
            />
            <TextField
              label="Your Email"
              sx={{ width: "90%", mt: 1 }}
              id="outlined-size-small"
              defaultValue=""
              size="small"
            />
            <TextField
              label="Phone Number"
              sx={{ width: "90%", mt: 1 }}
              id="outlined-size-small"
              defaultValue=""
              size="small"
            />
            <TextField
              disabled
              label="Today"
              sx={{ width: "90%", mt: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button type="submit" sx={{ mt: 3 }} variant="contained">
              Confirm Booking
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
