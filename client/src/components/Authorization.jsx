import React from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

const Authorization = (props) => {
  function handleSubmit() {
    return;
  }

  return (
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
              {props.authType === "login" ? "Login" : "Register"}
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="noEmail"
                autoComplete="a1"
                autoFocus
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {props.authType === "login" ? "Login" : "Register"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                {props.authType === "login" && (
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Register"}
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
  );
};

export default Authorization;
