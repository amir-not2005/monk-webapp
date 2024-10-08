import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ActionButton from "../../components/ActionButton";
import { Add as AddIcon } from "@mui/icons-material";

import React, { useContext, useEffect } from "react";
import HabitModal from "./HabitModal";

import { observer } from "mobx-react-lite";
import { getAllGoals } from "../../http/goalsApi";
import { Context } from "../../index";

const { getWeekDayRoulette, getFullDayName } = require("./weekDayRoulette");

const HabitBar = observer(({ goals }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleAddHabit = () => {
    setModalOpen(true);
  };

  //Days of the week buttons

  const [weekDays, setWeekDays] = React.useState(getWeekDayRoulette());
  let week = React.useRef(0);
  const handleWeekArrow = (arrowDirection) => {
    if (arrowDirection === "left") {
      week.current = week.current - 1;
      console.log(week.current);
      setWeekDays(getWeekDayRoulette(week.current));
    }
    if (arrowDirection === "right") {
      week.current = week.current + 1;
      console.log(week.current);
      setWeekDays(getWeekDayRoulette(week.current));
    }
  };

  const handleWeekDayButton = (event) => {
    const weekDayHabits = [];
    const fullDayName = getFullDayName(
      event.currentTarget.innerText.split("\n\n")[1]
    );
    const regex = new RegExp(fullDayName, "i");
    goals.allGoals.forEach((goal) => {
      if (regex.test(goal.weekdays)) {
        weekDayHabits.push(goal);
      }
    });

    goals.setWeekDayGoals(weekDayHabits);
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between" gap="5px">
        <Box border="1px solid gray" display="flex" flexDirection="row">
          <IconButton onClick={() => handleWeekArrow("left")}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          {/* Days of the week buttons */}
          <Box display="flex">
            {weekDays.map((weekDay) => {
              return (
                <ListItem style={{ padding: "0px" }} key={weekDay.day}>
                  <ListItemButton
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "8px 16px",
                      border: "black dashed 0.5px",
                      backgroundColor: `${
                        weekDay.today ? "#757ce8" : "inherit"
                      }`,
                    }}
                    onClick={handleWeekDayButton}
                  >
                    <Typography>{weekDay.day}</Typography>
                    <Typography>{weekDay.week}</Typography>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
          <IconButton onClick={() => handleWeekArrow("right")}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
        <ActionButton
          onClick={handleAddHabit}
          text="Add Habit"
          icon={AddIcon}
        />
      </Box>
      <HabitModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
});

export default HabitBar;
