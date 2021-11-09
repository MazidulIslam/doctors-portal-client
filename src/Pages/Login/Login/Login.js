import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { user, isLoading, loginUser, authError, signInWithGoogle } = useAuth();
  const [loginData, setLoginData] = useState();
  const handleOnChange = (e) => {
    //   we set all field in one state  we can also set fields data in different different states for different field
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const hangleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 20 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", mb: 1 }}
              id="standard-basic"
              label="User Name/Email"
              variant="standard"
              name="email"
              onChange={handleOnChange}
            />
            <br />
            <TextField
              sx={{ width: "75%", mb: 1 }}
              type="password"
              id="standard-basic"
              label="Password"
              variant="standard"
              name="password"
              onChange={handleOnChange}
            />
            <br />
            {isLoading && <CircularProgress />}
            <br />
            <Button
              type="submit"
              sx={{ width: "75%", mb: 1 }}
              variant="contained"
            >
              Login
            </Button>

            <br />
            <NavLink style={{ textDecoration: "none" }} to="/register">
              New User? Please <Button variant="text">Register</Button>
            </NavLink>
            <br />
            <NavLink style={{ textDecoration: "none" }} to="/home">
              <Button variant="text">Go Back</Button>
            </NavLink>

            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && (
              <Alert severity="error">Wrong email or Password </Alert>
            )}
          </form>
          <Button
            onClick={hangleGoogleSignIn}
            style={{ textDecoration: "none" }}
            variant="contained"
          >
            Google Sign In
          </Button>

          {/* {authError && <Alert severity="error">{authError}</Alert>} */}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
