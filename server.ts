'use strict';
import * as mongoose from 'mongoose';
import sampleRoute from "./Routes/sample.routes";
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});

async function main() {
    /* Mongo connection */
    const uri = "mongodb+srv://dbUser:dbUserPassword@cluster0.dmfce.mongodb.net/DefaulDataBase?retryWrites=true&w=majority";
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
    } finally {
        mongoose.connection.close();
    }
}

main().catch(console.error);
app.use('/sample', sampleRoute);