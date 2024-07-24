const express = require("express");
const cors = require("cors");
const app = express();
const port = 3500;

app.use(cors());

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).send({
    success: "true",
    people: [
      {
        id: "1",
        name: "Amir",
        age: "19",
      },
      {
        id: "2",
        name: "Altair",
        age: "11",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
