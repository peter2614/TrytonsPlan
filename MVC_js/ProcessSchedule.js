let Course = require("./Course")
let Professor = require("./Professor")
let Section = require("./Section")
let Schedule = require("./Schedule")
let ScheduledCourse = require("./ScheduledCourse")
let getScheduleData = require("./Utility").getScheduleData;

var schedule;
var sumProfScore = 0,
    sumTimeCommitment = 0,
    sumGPA = 0;
var numData = 0;



// -----------------------------------------------------------------------------------------------
// Version ONE                          |
// Setting schedule info separately     |
// --------------------------------------

/*
    Helper function for setting GPA for one schedule.
    // TODO: Need to implement function retrieveData(string path) to retrieve data from database
 */

/*var setGPA = function (schedule) {
    var avg, sum = 0;
    var len = schedule.sections.length;

    for (let i = 0; i < len; i++) {

        // TODO: Need to retrieve actual GPA earned from database
        // TODO: Path is professor/LastName, FirstName/CourseID/gpaActual

        let profName = schedule.sections[i].getProfessor;
        let courseID = schedule.sections[i].getCourseID;
        let path = "professor/" + profName.toString() + "/" + courseID.toString() + "/gpaActual";

        sum = sum + parseFloat(retrieveData(path));
    }
    avg = sum / len;

    schedule.setGPA = avg;
}*/

/*
    Helper function for setting profScore for one schedule.
    // TODO: Need to implement function retrieveData(string path) to retrieve data from database
 */

/*var setScore = function (schedule) {
    var avg, sum = 0;
    var len = schedule.sections.length;

    for (let i = 0; i < len; i++) {

        // TODO: Need to retrieve score from database
        // TODO: Path is professor/LastName, FirstName/CourseID/score

        let profName = schedule.sections[i].getProfessor;
        let courseID = schedule.sections[i].getCourseID;
        let path = "professor/" + profName.toString() + "/" + courseID.toString() + "/score";

        sum = sum + parseFloat(retrieveData(path));
    }
    avg = sum / len;

    schedule.setScore = avg;
}

/*
    Helper function for setting time commitment for one schedule.
    // TODO: Need to implement function retrieveData(string path) to retrieve data from database
 */

/*var setTimeCommitment = function (schedule) {
    var sum = 0;
    var len = schedule.sections.length;

    for (let i = 0; i < len; i++) {

        // TODO: Need to retrieve score from database
        // TODO: Path is professor/LastName, FirstName/CourseID/timeCommitment

        let profName = schedule.sections[i].getProfessor;
        let courseID = schedule.sections[i].getCourseID;
        let path = "professor/" + profName.toString() + "/" + courseID.toString() + "/timeCommitment";

        sum = sum + parseFloat(retrieveData(path));
    }

    schedule.setTimeCommitment = sum;
}*/

// --------------------------------------
// END of Version ONE                   |
// -----------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------
// Version TWO                          |
// Setting schedule info altogether     |
// --------------------------------------

/*
    Helper function to set profScore, TimeCommitment, GPA for one schedule
 */
function processSchedule (aSchedule){
    schedule = aSchedule;
    var len = schedule.sections.length;

    for (let i = 0; i < len; i++) {
        let profName = schedule.sections[i].getProfessor;
        let courseID = schedule.sections[i].getCourseID;
        let path = "professor/" + profName.toString() + "/" + courseID.toString();

        getScheduleData(path, callback);
    }
}

function updateData (data){
    if (data !== null) {
        sumProfScore += data.score;
        sumTimeCommitment += data.timeCommitment;
        sumGPA += data.gpaActual;
    }
    if (numData === schedule.sections.length){
        setInfo();
    }
}

function setInfo () {
    schedule.setProfScore = sumProfScore / schedule.getSections.length;
    schedule.setTimeCommitment = sumTimeCommitment;
    schedule.setGPA = sumGPA / schedule.getSections.length;
}


function callback(data){
    numData++;
    updateData(data);
}

module.exports = setInfo;
//Testing example
/*var sec = new Section("A00", "CSE 100", 800, 920, [1, 3, 5], "TBD", "Porter, Leonard Emerson", 1130, 1420, "12/21/18", []);
var sche = new Schedule(1, 18, "FA", [sec], 0, 0, 0, 0, 0);

processSchedule(sche);*/

// --------------------------------------
// END of Version TWO                          |
// -----------------------------------------------------------------------------------------------