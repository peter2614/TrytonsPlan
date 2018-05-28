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



/*
    Helper function to set profScore, TimeCommitment, GPA for one schedule
 */
function processSchedule (aSchedule){
    schedule = aSchedule;
    var len = schedule.sections.length;
    var path;
    var courseID;
    var totalTimeUsage = 0;
    let dayGotoSchool = 0;


    for (let i = 0; i < len; i++) {
        let profName = schedule.sections[i].getProfessor;
        courseID = schedule.sections[i].getCourseID;
        path = "professor/" + profName.toString() + "/" + courseID.toString();

        getScheduleData(path, callback);
    }

    //Calculate time usage
    for (let j = 1; j <= 5; j++){
        let timeForCurrDay = 0;
        var startTime = 0, endTime = 0;
        for (let k = 0; k < len; k++) {
            if (schedule.sections[k].getDay.indexOf(j) !== -1){
                timeForCurrDay += timeBetween(schedule.sections[k].getStartingTime, schedule.sections[k].getEndingTime);
                if (startTime === 0 || schedule.sections[k].getStartingTime < startTime){
                    startTime = schedule.sections[k].getStartingTime;
                }
                if (endTime === 0 || schedule.sections[k].getEndingTime > endTime){
                    endTime = schedule.sections[k].getEndingTime;
                }
            }
        }

        if (timeForCurrDay !== 0) {
            totalTimeUsage += timeForCurrDay / timeBetween(startTime, endTime);
            dayGotoSchool++;
        }
    }
    let aveTimeUsage = totalTimeUsage / dayGotoSchool;
    schedule.timeUsage = aveTimeUsage;
}

function updateData (data){
    if (data !== null) {
        sumProfScore += data.score;
        sumTimeCommitment += data.timeCommitment;
        sumGPA += data.gpaActual;
    }
    if (numData === schedule.sections.length){
        setInfo();
        console.log(schedule);
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

function timeBetween (time1, time2){
    let result = Math.floor((time2 - time1) / 100) * 60 + (time2 - time1) % 100;
    return result;
}

module.exports = setInfo;
//Testing example
/*var sec = new Section("A00", "CSE 100", 800, 920, [1, 3, 5], "TBD", "Porter, Leonard Emerson", 1130, 1420, "12/21/2018", []);
var sec2 = new Section("A00", "CSE 101", 1300, 1350, [1, 3, 5], "TBD", "Kane, Daniel Mertz", 1130, 1420, "12/10/2018", []);
var sche = new Schedule(1, 18, "FA", [sec, sec2], 0, 0, 0, 0, 0);

processSchedule(sche);*/

// --------------------------------------
// END of Version TWO                          |
// -----------------------------------------------------------------------------------------------