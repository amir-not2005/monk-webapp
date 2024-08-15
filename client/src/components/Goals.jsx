import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const Goals = () => {
  return (
    <Box component="main">
      {[
        { title: "Read 20 pages", daysOfTheWeek: ["Wed", "Friday", "Sunday"] },
        { title: "Read 30 pages", daysOfTheWeek: ["Wed", "Friday", "Sunday"] },
        { title: "Read 40 pages", daysOfTheWeek: ["Wed", "Friday", "Sunday"] },
      ].map((habit) => {
        return (
          <Card style={{ margin: "16px 0px" }} key={habit.title}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {habit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {habit.daysOfTheWeek.map((dayOfTheWeek) => {
                    return dayOfTheWeek + " ";
                  })}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default Goals;
