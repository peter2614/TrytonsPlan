var COURSE = "course";
var QUARTER = "F18";
var TITLE = "CSE 100";
var SECTION = "A00";
var PREREQUISITES = "prerequisites";
var TO = "/";

var firebase = require("firebase");		// the great work done by Oliver
var data = null;						// The data will be retrieved from db

// db setup
var config = {
    apiKey: "AIzaSyDHND3EVIe-S8r0k_3DLf_GClaM2qazGMI",
    authDomain: "trytonsplan.firebaseapp.com",
    databaseURL: "https://trytonsplan.firebaseio.com",
    projectId: "trytonsplan",
    storageBucket: "trytonsplan.appspot.com",
    messagingSenderId: "242589223564"
};

firebase.initializeApp(config);


// get the reference of the data
firebaseRef = firebase.database().ref(QUARTER + TO + TITLE);// + TO + SECTION);
/* course/CSE 100 */

// get the data
function retrieve(end) {
    firebaseRef.on("value", function(snapshot) {
        data = snapshot.val();
        // firebase.database().goOffline();
        end();
    });
}

// use the data
function end() {
    // when we have the correct db reference
    if(data) {
        console.log("\n\n");

        console.log(data);
        //console.log (data.A00.LE[0]);

        console.log("\n\n");

        /*console.log("The third prerequisite is: " + data.prerequisites[2]);
        console.log("The second course forth prerequisite is: "
           + data.prerequisites[3][1]);

        console.log("\n\n");

        console.log("Is CSE 21 in the third prerequisite? "
            + data.prerequisites[2].includes("CSE 21"));

        console.log("Is CSE 30 in the third prerequisite? "
            + data.prerequisites[2].includes("CSE 30"));

        console.log("\n\nThis is the end. Hold your breath and count to ten.");*/

        firebaseRef.off();
        firebase.database().goOffline();

        // when have incorrect db referenct
    } else {
        console.log("Hehe");
    }
}

retrieve(end);