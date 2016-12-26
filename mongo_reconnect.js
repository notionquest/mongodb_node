var mongoose = require('mongoose');
    //var config = require('./config/database.js');
    var DB_URL = "localhost:27017@test:test";

    mongoose.connection.on("connected", function(ref) {
        console.log("Connected to " + " DB!");
    });

    mongoose.connection.on("error", function(err) {
        console.error('Failed to connect to DB ' + ' on startup ', err);
        if (err) {
            return next(err);
        }
    });

    mongoose.connection.on('disconnected', function(err) {
        console.log('Mongoose default connection to DB :' + ' disconnected');
        if (err) {
            return next(err);
        }
    });

    var gracefulExit = function() { 
        mongoose.connection.close(function () {
            console.log('Mongoose default connection with DB :'  + ' is disconnected through app termination');
            process.exit(0);
        });
    }

    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

    exports.con_close = function () {
        console.log('Mongoose connection disconnected');
        mongoose.connection.close();
    }

    var options = {
        server: {
            socketOptions: {
                keepAlive: 1000,
                connectTimeoutMS: 30000
            }
        },
        replset: { 
            rs_name: 'replicaset',
            auto_reconnect:true,
            socketOptions: {
                keepAlive: 1000, // doubt about it
                connectTimeoutMS: 30000
            } 
        },
        user: 'root',
        pass: 'G3saGT2Y',
        auth: {
            authdb: 'admin'
        }
    }

    mongoose.connect(DB_URL, options, function(err) {
        console.log('ho rha hai');
        if (err) {
            console.log('error connection to mongo server!');
            console.log(err);
        }
    });