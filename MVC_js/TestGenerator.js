let Course = require("./Course")
let Section = require("./Section")
let Schedule = require("./Schedule")
let ScheduledCourse = require("./ScheduledCourse")
let generator = require("./ScheduleGenerator")
let processor = require ("./ProcessSchedule")

/* Set up firebase */
var QUARTER = "F18";
var COURSEID1 = "CSE 100";
var COURSEID2 = "MATH 18";
var COURSEID = ["CSE 11", "CSE 21"];
var TO = "/";
var courseList = [];
var sections = ['0', '1', '2', '3', '4', '5', '6'];

var firebase = require("firebase");		// the great work done by Oliver
var incomingData = null;			// The data will be retrieved from db
var numRetrieve = 0;
var dataSet = [];


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
//firebaseRef = firebase.database().ref(QUARTER + TO + COURSEID1);//+ TO + SECTION);

// get the data
function retrieve(end) {
    firebaseRef.on("value", function(snapshot) {
        incomingData = snapshot.val();
        numRetrieve++;
        dataSet.push(incomingData);
        if (numRetrieve === COURSEID.length)
            end();
    });
}

// use the data
function end() {
    // when we have the correct db reference
    if(dataSet[0]) {
        buildTestSet();
        firebaseRef.off();
    } else {
        console.log("Hehe");
    }
}


function buildTestSet (){
    for (let j = 0; j < dataSet.length; j++){
        let courseData = dataSet[j];
        let k = 0;
        let sectionArr = [];
        while (courseData.hasOwnProperty(sections[k])){
            let secID = sections[k];
            let currSec = courseData[k];
            //console.log (currSec);
            sectionArr[k] = new Section(currSec.id, COURSEID[j], currSec.LE[0].start_time, currSec.LE[0].end_time, currSec.LE[0].day,
                currSec.LE[0].building, currSec.LE[0].professor, currSec.FI.start_time, currSec.FI.end_time, currSec.FI.date);
            k++;
        }

        if (sectionArr.length > 0){
            courseList[j] = new ScheduledCourse(COURSEID[j], sectionArr);
        }
    }

    var scheduleList = generator(courseList);
    printSchedule(scheduleList);
}

for (let i = 0; i < COURSEID.length; i++){
    firebaseRef = firebase.database().ref(QUARTER + TO + COURSEID[i]);
    retrieve(end);
}



function printSchedule (scheduleList){
    for (let i = 0; i < scheduleList.length; i++){
        console.log (scheduleList[i]);
        console.log ("\n");
    }
}