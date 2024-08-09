import { Card, CardContent, Typography, Stack, Divider } from "@mui/material";
import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const GoalStats = ({
  title,
  isOneStreak,
  timesCompleted,
  timesToComplete,
  completionDates,
}) => {
  return (
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
      </CardContent>
    </Card>
  );
};

export default GoalStats;
