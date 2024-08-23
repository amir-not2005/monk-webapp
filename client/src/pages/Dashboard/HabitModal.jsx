import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { createGoal } from "../../http/goalsApi";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
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

  const handleModalSubmit = async () => {
    const createdGoal = await createGoal(title, description, endAt, category);
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
            {/* <TextField
              id="standard-basic"
              label="End date"
              variant="standard"
              margin="dense"
              required
              value={endAt}
              onChange={(e) => setEndAt(e.target.value)}
            /> */}
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
