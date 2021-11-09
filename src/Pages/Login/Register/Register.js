import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState();
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    //   we set all field in one state  we can also set fields data in different different states for different field
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.repassword) {
      alert("password didn't match");
      e.preventDefault();
      return;
    }
    registerUser(loginData.email, loginData.password, history, loginData.name);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 20 }} xs={12} md={6}>
          <Typography variant="h2" color="info.main" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                sx={{ width: "75%", mb: 1 }}
                id="standard-basic"
                label="User Name"
                variant="standard"
                name="name"
                onBlur={handleOnBlur}
              />
              <br />
              <TextField
                sx={{ width: "75%", mb: 1 }}
                id="standard-basic"
                label="User Name/Email"
                variant="standard"
                name="email"
                type="email"
                onBlur={handleOnBlur}
              />
              <br />
              <TextField
                sx={{ width: "75%", mb: 1 }}
                type="password"
                id="standard-basic"
                label="Password"
                variant="standard"
                name="password"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", mb: 1 }}
                type="password"
                id="standard-basic"
                label="Re-Password"
                variant="standard"
                name="repassword"
                onBlur={handleOnBlur}
              />

              <Button
                type="submit"
                sx={{ width: "75%", mb: 1 }}
                variant="contained"
              >
                Register
              </Button>
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/login">
                Already Registered? Please <Button variant="text">Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User created successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
