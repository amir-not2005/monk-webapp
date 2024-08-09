import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ActionButton from "../components/ActionButton";
import { Add as AddIcon } from "@mui/icons-material";

import React from "react";

const HabitBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" gap="5px">
      <Box border="1px solid gray" display="flex" flexDirection="row">
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
        {/* Days of the week buttons */}
        <Box display="flex">
          {[
            ["1", "M"],
            ["2", "T"],
            ["3", "W"],
            ["4", "T"],
            ["5", "F"],
            ["6", "S"],
            ["7", "S"],
          ].map((weekDay) => {
            return (
              <ListItem style={{ padding: "0px" }}>
                <ListItemButton
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "8px 16px",
                    border: "black dashed 0.5px",
                  }}
                >
                  <Typography>{weekDay[0]}</Typography>
                  <Typography>{weekDay[1]}</Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
      <ActionButton
        onClick={() => console.log("actionbutton")}
        text="Add Habit"
        icon={AddIcon}
      />
    </Box>
  );
};

export default HabitBar;
