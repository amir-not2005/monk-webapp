import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Goals from "./Goals";
import GoalStats from "./GoalStats";
import { Box, Divider, Grid, Typography } from "@mui/material";
import HabitBar from "./HabitBar";
import WeekdayGoals from "./WeekdayGoals";
import { observer } from "mobx-react-lite";
import { getAllGoals } from "../../http/goalsApi";
import { Context } from "../../index";

const Dashboard = observer(() => {
  const { goals } = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await getAllGoals();
        goals.setAllGoals(responseData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box>
      <Sidebar pageName="Dashboard" />
      <Box p={4}>
        <HabitBar />
        <Divider style={{ margin: "10px 0px" }} />
        <Grid container spacing={2}>
          <Grid item xs={6} sm={8}>
            <WeekdayGoals goals={goals} />
            <Divider style={{ margin: "20px 0px" }} />
            <Goals goals={goals} test={"a"} />
          </Grid>
          <Grid item xs={6} sm={4}>
            <GoalStats />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});

export default Dashboard;
