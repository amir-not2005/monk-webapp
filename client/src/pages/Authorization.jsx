import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Alert,
} from "@mui/material";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";
import NavBar from "../components/NavBar";
import { registration, loggin } from "../http/userApi";

const Authorization = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const response = await loggin(login, password);
      console.log("LOGIN:", response);
    } else {
      const response = await registration(login, password);
      console.log("REGISTRATION:", response);
    }
  };

  return (
    <>
      <NavBar />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          height: "100%",
          mt: "15vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            {/* Login / Reg */}
            <Box
              maxWidth="md"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockPersonOutlinedIcon />
              </Avatar>

              <Typography component="h1" variant="h5">
                {isLogin ? "Login" : "Register"}
              </Typography>

              <Box component="form" onSubmit={handleAuth}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="noEmail"
                  autoComplete="a1"
                  autoFocus
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="noPassword"
                  autoComplete="a2"
                  autoFocus
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {isLogin ? "Login" : "Register"}
                </Button>

                {/* {error && (
                <Alert severity="error" style={{ margin: "10px 0px" }}>
                  {error}
                </Alert>
              )}
              {success && (
                <Alert severity="success" style={{ margin: "10px 0px" }}>
                  {success}
                </Alert>
              )} */}

                <Grid container>
                  <Grid item xs={6}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  {isLogin ? (
                    <Grid item xs>
                      <Link href={REGISTRATION_ROUTE} variant="body2">
                        "Don't have an account? Register"
                      </Link>
                    </Grid>
                  ) : (
                    <Grid item xs={6}>
                      <Link href={LOGIN_ROUTE} variant="body2">
                        "Have an account? Login"
                      </Link>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={0} md={6}>
            {/* Icon */}
            <Box
              margin="normal"
              maxWidth="xs"
              display={{ xs: "none", md: "flex" }}
              justifyContent={"center"}
              alignItems="center"
              height="100%"
            >
              <img
                src="https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg"
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "75%",
                  height: "auto",
                  border: "black solid 2px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Authorization;
