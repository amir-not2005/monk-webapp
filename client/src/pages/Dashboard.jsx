import React from "react";
import Sidebar from "../components/Sidebar";
import Goals from "../components/Goals";
import GoalStats from "../components/GoalStats";
import { Box, Divider, Grid } from "@mui/material";
import HabitBar from "../components/HabitBar";

const Dashboard = () => {
  return (
    <Box>
      <Sidebar pageName="Dashboard" />
      <Box p={4}>
        <HabitBar />
        <Divider style={{ margin: "10px 0px" }} />
        <Grid container spacing={2}>
          <Grid item xs={6} sm={8}>
            <Goals />
          </Grid>
          <Grid item xs={6} sm={4}>
            <GoalStats />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
