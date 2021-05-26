const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/todo", require('./routes/todo'));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Ya szhiv"));