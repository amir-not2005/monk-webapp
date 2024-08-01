const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./routes/index");

const port = 3500;

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
