let Course = require("./Course")
let Professor = require("./Professor")
let Pair = require("./Pair")
let Section = require("./Section")
let Schedule = require("./Schedule")
let ScheduledCourse = require("./ScheduledCourse")
let generator = require("./ScheduleGenerator")

/* Set up firebase */
var QUARTER = "F18";
var COURSEID1 = "CSE 100";
var COURSEID2 = "MATH 18";
var COURSEID = ["CSE 100", "CSE 105", "CSE 110", "CSE 30", "CSE 11"];
var TO = "/";
var courseList = [];
var sections = ['A00', 'B00', 'C00', 'D00', 'E00', 'F00'];

var firebase = require("firebase");		// the great work done by Oliver
var incomingData = null;			// The data will be retrieved from db
var numRetrieve = 0;
var dataSet = [];

//Variables declaration.
var courseID1;
var courseID2;
var sectionID1;
var sectionID2;
var sectionID3;
var startTime1;
var startTime2;
var startTime3;
var endTime1;
var endTime2;
var endTime3;
var day1;
var day2;
var day3;
var loc;
var prof1;
var prof2;
var prof3;
var finalStart1;
var finalStart2;
var finalStart3;
var finalDate1;
var finalDate2;
var finalDate3;


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
        if (numRetrieve === 5)
            end();
    });
}

// use the data
function end() {
    // when we have the correct db reference
    if(dataSet[0]) {
        buildTestSet();
        //console.log("\n\n");
        //console.log(data);

        //Extracting info from database data.
        /*courseID1 = COURSEID1;
        courseID2 = COURSEID2;
        sectionID1 = 'A00';
        sectionID2 = 'B00';
        sectionID3 = 'E00';
        startTime1 = dataSet[0].A00.LE[0].start_time;
        startTime2 = dataSet[0].B00.LE[0].start_time;
        startTime3 = dataSet[1].LE[0].start_time;
        endTime1 = dataSet[0].A00.LE[0].end_time;
        endTime2 = dataSet[0].B00.LE[0].end_time;
        endTime3 = dataSet[1].LE[0].end_time;
        day1 = dataSet[0].A00.LE[0].day;
        day2 = dataSet[0].B00.LE[0].day;
        day3 = dataSet[1].LE[0].day;
        loc = "TBA";
        prof1 = dataSet[0].A00.LE[0].professor;
        prof2 = dataSet[0].B00.LE[0].professor;
        prof3 = dataSet[1].LE[0].professor;
        finalStart1 = dataSet[0].A00.FI.start_time;
        finalStart2 = dataSet[0].B00.FI.start_time;
        finalStart3 = dataSet[1].FI.start_time;
        finalDate1 = dataSet[0].A00.FI.date;
        finalDate2 = dataSet[0].B00.FI.date;
        finalDate3 = dataSet[1].FI.date;

        console.log ("Start");

        var section1 = new Section("A00", COURSEID1, startTime1, endTime1, day1, loc, prof1, finalStart1, finalDate1);
        var section2 = new Section("B00", COURSEID1, startTime2, endTime2, day2, loc, prof2, finalStart1, finalDate1);
        var section3 = new Section("E00", COURSEID2, startTime3, endTime3, day3, loc, prof3, finalStart3, finalDate3);

        var course1 = new ScheduledCourse(COURSEID1, [section1, section2]);
        var course2 = new ScheduledCourse(COURSEID2, [section3]);

        var courseList = [course1, course2];

        var scheduleList = generator(courseList, 0);
        console.log(scheduleList[0]);

        console.log ("Complete");

        firebaseRef.off();*/
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
            let currSec = courseData.secID;
            console.log (currSec);
            sectionArr[k] = new Section(sections[k], COURSEID[j], currSec.getStartingTime, currSec.getEndingTime, currSec.getDay, currSec.getLocation,
                currSec.getProfessor, currSec.getFinalTime, currSec.getFinalEndTime, currsec.getFinalDate);
            k++;
        }

        if (sectionArr.length > 0){
            courseList[j] = new ScheduledCourse(COURSEID[j], sectionArr);
        }
        console.log(courseData);
    }

    var scheduleList = generator(courseList);
    console.log(dataSet);
}

for (let i = 0; i < 5; i++){
    firebaseRef = firebase.database().ref(QUARTER + TO + COURSEID[i]);
    retrieve(end);
}

/*
retrieve(end);
firebaseRef = firebase.database().ref(QUARTER + TO + COURSEID2 + TO + 'E00');
retrieve(end);*/






