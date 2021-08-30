const express = require('express');
const dotenv = require('dotenv');
const moongoose = require('mongoose');
const app = express();
app.use(express.json());
dotenv.config({ path: './config/.env' });


moongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = moongoose.connection;
connection.once('open', () => console.log("MongoDB database connection established successfully"));
const Building = require('./models/bulding.model');

// Routers
const studentRouter = require('./routes/student');
const classesRouter = require('./routes/classes');
const classRouter = require('./routes/class');
const classesOnMapRouter = require('./routes/classes-on-map');

app.get('/', (req, res) => {
    res.end("Success");
})
app.get('/home', (req, res) => {
    res.end("Home page");
})

app.use('/student', studentRouter);
app.use('/classes', classesRouter);
app.use('/class', classRouter);
app.use('/classes-on-map', classesOnMapRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
})