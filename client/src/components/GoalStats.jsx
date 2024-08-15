import {
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CalendarComp from "./CalendarComp";

const GoalStats = ({
  title,
  isOneStreak,
  timesCompleted,
  timesToComplete,
  completionDates,
}) => {
  return (
    <Box>
      <Card variant="elevation">
        <CardContent>
          <Typography variant="h5" component="div">
            Read 20 Pages
          </Typography>
          <Divider style={{ margin: "20px 0px" }} />
          <Stack alignItems="center" direction="row" gap={1}>
            <LocalFireDepartmentIcon style={{ fill: "red" }} />
            <Typography variant="h6">Streak: 15</Typography>
          </Stack>
          <Stack alignItems="center" direction="row" gap={1}>
            <CheckCircleOutlineIcon style={{ fill: "green" }} />
            <Typography variant="h6">Completion: 15/30</Typography>
          </Stack>
          <CalendarComp />
        </CardContent>
      </Card>
    </Box>
  );
};

export default GoalStats;
