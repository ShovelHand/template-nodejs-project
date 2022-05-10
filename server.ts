'use strict';
import * as mongoose from 'mongoose';
import sampleRoute from "./Routes/sample.routes";
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});

async function main() {
  /* Mongo connection */
  const uri = `mongodb+srv://dbUser:${process.env.MONGO_USER}Password${process.env.MONGO_PASSWORD}.dmfce.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
  console.log("URI: " + uri);
    mongoose.connect(uri);

    try {
        // Connect to the MongoDB cluster
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Connected successfully to MongoDB");
        });
    } catch (e) {
        console.error(e);
    }
}

main().catch(console.error);
app.use('/sample', sampleRoute);