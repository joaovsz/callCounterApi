const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
const port = 3000;
app.listen(port, (err, res) => {
  console.log("Rodando", port);
});
