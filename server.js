const express = require('express');
const app = express();
const routes = require('./MealRoutes');
const cors = require('cors')


//2. import mongoose
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false);
//2. import mongoose

const PORT = 7000 || process.env.port
//4. Add CORS
app.use(express.json())
app.use(cors())
//4. Add CORS

//3. connect with database
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("We were connected to MONGO"))
.catch ((err) => console.log(err))
//3. connect with database

app.use(routes);


app.listen(PORT, () => {
    console.log('Working on port 7000')
})