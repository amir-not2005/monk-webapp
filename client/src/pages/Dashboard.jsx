import React from "react";
import Sidebar from "../components/Sidebar";
import Goals from "../components/Goals";
import GoalStats from "../components/GoalStats";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Sidebar />
      <Goals />
      <GoalStats />
    </Box>
  );
};

export default Dashboard;
