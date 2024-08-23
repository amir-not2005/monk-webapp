import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllGoals } from "../../http/goalsApi";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  console.log(goals);

  useEffect(() => {
    async function fetchData() {
      const responseData = await getAllGoals();
      setGoals(responseData);
    }
    fetchData();
  }, []);

  return (
    <Box component="main">
      {goals?.map((habit) => {
        return (
          <Card style={{ margin: "16px 0px" }} key={habit.title}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {habit.title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {habit.description}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {habit.category}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {habit.end_at.split("T")[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {habit.daysOfTheWeek?.map((dayOfTheWeek) => {
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
