const express = require("express");
const cors = require("cors");
const app = express();

const usersRouter = require("./routes/users.routes");

const port = 3500;

app.use(cors());
app.use(express.json());
app.use("/api", usersRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
