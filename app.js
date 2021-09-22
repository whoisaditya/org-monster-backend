const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const http = require("http").Server(app);
const rateLimit = require("express-rate-limit");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json())

const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

// Limiting the no. of api calls
app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// Connecting to Mongo 
const uri = process.env.DB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log('Connection estabislished with MongoDB');
    })
    .catch(error => console.error(error.message));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use((req, res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method :', req.method);
    next();
});

// Routes
app.use("/user", require("./api/routers/user"));

const PORT = process.env.PORT;

//Starting the server
http.listen(PORT, function () {
  console.log(`listening on PORT: ${PORT}`);
});