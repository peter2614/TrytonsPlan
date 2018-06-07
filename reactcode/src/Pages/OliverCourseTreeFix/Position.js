var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDHND3EVIe-S8r0k_3DLf_GClaM2qazGMI",
    authDomain: "trytonsplan.firebaseapp.com",
    databaseURL: "https://trytonsplan.firebaseio.com",
    projectId: "trytonsplan",
    storageBucket: "trytonsplan.appspot.com",
    messagingSenderId: "242589223564"
};

firebase.initializeApp(config);

var fs = require('fs');
var csv = require('fast-csv');
var ref = firebase.database().ref("position");

var position = [];

function disconnect() {
    firebase.database().goOffline();
}

fs.createReadStream('./node_position.csv').pipe(csv()).on("data", function(data) {
    cx = data[1] - '0';
    cy = data[2] - '0';
    color = data[3];
    position.push({cx, cy, color});
}).on("end", function() {
    ref.set(position, disconnect);
});