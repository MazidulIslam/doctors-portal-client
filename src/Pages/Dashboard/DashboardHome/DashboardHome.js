import * as React from "react";

import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";
import { Grid } from "@mui/material";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Grid container spacing={2}>
      <Grid sx={{ mx: "auto" }} item xs={12} sm={5} md={4}>
        <Calendar date={date.toLocaleDateString()} setDate={setDate}></Calendar>
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Appointments date={date}></Appointments>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
