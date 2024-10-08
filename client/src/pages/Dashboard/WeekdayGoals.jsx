import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";

const WeekdayGoals = observer(({ goals }) => {
  console.log("WeekdayGoals rendered");
  return (
    <Box component="main">
      <Typography variant="h5">All your goals for THIS week day :</Typography>
      {goals.weekDayGoals.constructor === Array ? (
        goals.weekDayGoals.map((habit) => {
          return (
            <Card style={{ margin: "16px 0px" }} key={habit.title}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Title: {habit.title}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    Description: {habit.description}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    Category: {habit.category}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    End date: {habit.end_at.split("T")[0]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Weekdays:{" "}
                    {habit.weekdays.split('"').map((weekday) => {
                      if (weekday.length > 1) {
                        return weekday + " ";
                      }
                    })}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })
      ) : (
        <Typography variant="h5"> No habits for today! </Typography>
      )}
    </Box>
  );
});

export default WeekdayGoals;
