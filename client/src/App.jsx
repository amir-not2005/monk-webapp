import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userApi";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(user);
        user.setIsAuth(true);
        console.log("AUTHED");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h6"> Loading... </Typography>
          <CircularProgress style={{ margin: "20px 0px" }} />
        </Box>
      </Container>
    );
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
