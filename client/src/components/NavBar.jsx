import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/constants";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            <Button color="inherit" href={HOME_ROUTE}>
              MonkMates
            </Button>
          </Typography>
          <Box ml={"auto"}>
            <Button color="inherit" href={LOGIN_ROUTE}>
              Login
            </Button>
            <Button color="inherit" href={REGISTRATION_ROUTE}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
