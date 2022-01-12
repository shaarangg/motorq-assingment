require("dotenv").config();
require("./models/dbinit");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routers
const studentRouter = require("./routes/student");
const classesRouter = require("./routes/classes");
const classRouter = require("./routes/class");
// const classesOnMapRouter = require("./routes/classes-on-map");

app.get("/", (req, res) => {
	res.end("Hello word");
});

app.use("/student", studentRouter);
app.use("/classes", classesRouter);
app.use("/class", classRouter);
// app.use("/classes-on-map", classesOnMapRouter);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port: ${process.env.PORT}`);
});
