import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { createGoal } from "../../http/goalsApi";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

import dayjs from "dayjs";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 6;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, weekday, theme) {
  return {
    fontWeight:
      weekday.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const HabitModal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endAt, setEndAt] = useState(dayjs());
  const [category, setCategory] = useState("");
  const [weekday, setWeekday] = React.useState([]);
  const theme = useTheme();
  const handleWeekdayChange = (event) => {
    const {
      target: { value },
    } = event;
    setWeekday(typeof value === "string" ? value.split(",") : value);
  };

  const handleModalSubmit = async () => {
    const createdGoal = await createGoal(
      title,
      description,
      endAt,
      weekday,
      category
    );
    console.log("GOAL CREATED:", createdGoal);
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component={"form"} onSubmit={handleModalSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new Habit
          </Typography>
          <Box display={"flex"} flexDirection={"column"}>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              margin="normal"
              required
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              margin="normal"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <FormControl sx={{ mt: 4 }}>
              <InputLabel id="demo-multiple-chip-label">Days</InputLabel>
              <Select
                required
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={weekday}
                onChange={handleWeekdayChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {weekdays.map((item) => (
                  <MenuItem
                    key={item}
                    value={item}
                    style={getStyles(item, weekday, theme)}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Finish date"
                value={endAt}
                onChange={(newEndAt) => setEndAt(dayjs(newEndAt))}
                sx={{ margin: "40px 0px 0px 0px" }}
              />
            </LocalizationProvider>
            <TextField
              id="standard-basic"
              label="Category"
              variant="standard"
              margin="normal"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Habit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default HabitModal;
