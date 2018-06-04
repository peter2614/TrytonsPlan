let Course = require("./Course")
let Professor = require("./Professor")
let Pair = require("./Pair")
let Section = require("./Section")
let Schedule = require("./Schedule")
let ScheduledCourse = require("./ScheduledCourse")


var YEAR = "2018";
var QUARTER = "FA";

var processedList;  //Global variable -- the list processed by processCourseList(). For helperGenerator().
var scheduleID = 0;


/*
    Schedule generator. First extract all sections in all courses in the course list, then call processCourseList() and
    helperGenerator to generate a list of all possible courses.
    Return value: an array of Schedule objects.
 */
var generateSchedule = function (courseList){
    let scheduleArr = [];
    // let numCourse = courseList.length;


    let sectionList  = new Array();
    for (let i = 0; i < courseList.length; i++){  //Get all sections from all courses in courseList.
        let sections = courseList[i].getSections;

        for (let j = 0; j < sections.length; j++){
            sectionList.push(sections[j]);
        }
    }

    let processedSecList = processCourseList(sectionList);
    processedList = processedSecList;



    for (let i = 0; i < processedSecList.length; i++){
        scheduleID = scheduleArr.length;
        let initialSchedule = new Schedule(scheduleID, YEAR, QUARTER, [], 0, 0, 0, 0, 0, 0);
        helperGenerator(initialSchedule, scheduleArr, i);
    }

    return scheduleArr;
}


/*
    Recursive function for generating all possible schedules.
 */
var helperGenerator = function (currSchedule, scheduleList, slotIndex){
    if (slotIndex === processedList.length){
        if (currSchedule.getSections.length > 1) {
            hashSchedule(currSchedule);
            if (scheduleList.length === 0){
                currSchedule.scheduleID = scheduleID;
                scheduleList.push(currSchedule);
                scheduleID++;
                return;
            }

            for (let i = 0; i < scheduleList.length; i++){
                var compareResult = compareSchedule(scheduleList[i], currSchedule);
                if (compareResult === 1){
                    break;
                }
            }

            if (compareResult === 0){
                currSchedule.scheduleID = scheduleID;
                scheduleList.push(currSchedule);
                scheduleID++;
                return;
            }
            else{
                return;
            }
        }
        return;
    }

    var slot = processedList[slotIndex];
    var numSectionInSlot = slot.length;

    for (let i = 0; i < numSectionInSlot; i++) {

        var retVal = addSection(currSchedule, processedList[slotIndex][i]);

        for (let j = 1; j < processedList.length - slotIndex + 1; j++) {
            if (retVal === 1) {
                /*if (j === 1) {
                    var newSchedule = new Schedule(nextID, currSchedule.getYear, currSchedule.getQuarter,
                        [], currSchedule.getProfScore, currSchedule.getDistance,
                        currSchedule.getTimeCommitment, currSchedule.getTimeUsage, currSchedule.getGPA, currSchedule.getUnits);
                    for (let k = 0; k < currSchedule.getSections.length; k++) {  //Deep copy of the section[] in currSchedule
                        let newSec = currSchedule.getSections[k];
                        newSchedule.getSections.push(newSec);
                    }
                    newSchedule.getSections.push(processedList[slotIndex][i]);
                    helperGenerator(newSchedule, scheduleList, slotIndex + j);
                }
                else {*/
                let newSchedule = new Schedule(scheduleID, currSchedule.getYear, currSchedule.getQuarter,
                    [], currSchedule.getProfScore, currSchedule.getDistance,
                    currSchedule.getTimeCommitment, currSchedule.getTimeUsage, currSchedule.getGPA, currSchedule.getUnits);
                for (let k = 0; k < currSchedule.getSections.length; k++) {  //Deep copy of the section[] in currSchedule
                    let newSec = currSchedule.getSections[k];
                    newSchedule.getSections.push(newSec);
                }
                newSchedule.getSections.push(processedList[slotIndex][i]);
                helperGenerator(newSchedule, scheduleList, slotIndex + j);
                //}
            }
            else {
                /*if (i === 0 && i === numSectionInSlot - 1){
                    if (slotIndex === processedList.length){
                        helperGenerator(currSchedule, scheduleList, slotIndex + j);
                    }
                    else{
                        return;
                    }
                }*/
                if (i === numSectionInSlot - 1) {
                    helperGenerator(currSchedule, scheduleList, slotIndex + j);
                }
            }
        }
    }
}


/*
    Put sections into different time slots.
    Return value: the processed list of sections.
 */
var processCourseList = function (sectionList){
    let numSection = sectionList.length;
    if (numSection === 0){
        return 0;
    }

    let newList = [[]];
    newList[0][0] = sectionList[0];

    for (let i = 1; i < numSection; i++){
        let findSlot = 0;

        for (let j = 0; j < newList.length; j++){  //Search to see if there is a slot in the new list for this section.
            if (sectionList[i].getStartingTime === newList[j][0].getStartingTime &&
                sectionList[i].getEndingTime === newList[j][0].getEndingTime &&
                checkDay(sectionList[i].getDay, newList[j][0].getDay)){  //TODO: getTime() need to be updated

                newList[j].push(sectionList[i]);
                findSlot = 1;
                break;
            }
        }

        if (findSlot === 0){  //If no time slot found, create a new slot.
            newList.push([sectionList[i]]);
            //newList[newList.length][0] = sectionList[i];
        }
    }
    //console.log (newList);
    return newList;
}



/*
    Check if a section can be added to the given schedule.
    Return value: -1 if repeated new section;
                  0 if conflict;
                  1 if successful.
 */
var addSection = function (schedule, newSection){
    let sectionList = schedule.getSections;
    let numSections = sectionList.length;

    if (numSections === 0){
        return 1;
    }

    for (let i = 0; i < numSections; i++){
        let section = sectionList[i];
        if (section.getCourseID === newSection.getCourseID){
            return -1;
        }
        else {
            /* Check for overlapping between sections */
            if (section.getEndingTime > newSection.getStartingTime && section.getStartingTime < newSection.getStartingTime){
                return 0;
            }
            else if (section.getStartingTime < newSection.getEndingTime && section.getStartingTime > newSection.getStartingTime){
                return 0;
            }

            else if (section.getFinalDate === newSection.getFinalDate) {  //Check final date and time
                if (section.getFinalTime === newSection.getFinalTime ||
                    section.getFinalTime > newSection.getFinalTime && section.getFinalTime < newSection.getFinalEndTime ||
                    newSection.getFinalTime > section.getFinalTime && newSection.getFinalTime < section.getFinalEndTime){
                    return 0;
                }
            }
        }
    }
    return 1;  //No conflict
}


/*
    Helper function for checking the day of two courses.
    Return value: 0 if there is overlapping in the two days array;
                  1 if there is no overlapping.
 */
var checkDay = function (dayArr1, dayArr2){
    //console.log(dayArr1);
    for (let i = 0; i < dayArr1.length; i++){
        for (let j = 0; j < dayArr2.length; j++){
            if (dayArr1[i] === dayArr2[j]) {
                break;
            }
            if (j === dayArr2.length - 1){
                return 0;
            }
        }
    }
    return 1;
}

function hashSchedule (schedule){
    var hashVal = 0;
    for (let i = 0; i < schedule.getSections.length; i++){
        var sec = schedule.getSections[i];
        var value = 0;
        var courseID = sec.getCourseID;
        for (let j = 0; j < sec.getCourseID.length; j++){
            value += courseID.charCodeAt(j);
        }
        for (let j = 0; j < sec.getSectionID.length; j++){
            value += sec.getSectionID.charCodeAt(j);
        }
        hashVal += value;
    }
    schedule.hashKey = hashVal;
}


/*
 * Return 1 if two schedules contain same sections
 * Return 0 if two schedules are different
 */
function compareSchedule (s1, s2){
    if (s1.hashKey === s2.hashKey){
        for (let i = 0; i < s1.getSections.length; i++){
            var sec1 = s1.getSections[i];
            for (let j = 0; j < s2.getSections.length; j++){
                var sec2 = s2.getSections[j];
                if (sec1.getCourseID === sec2.getCourseID && sec1.getSectionID === sec2.getSectionID){
                    break;
                }
                else if (j === s2.getSections.length - 1){
                    return 0;
                }
            }
        }
    }
    else{
        return 0;
    }
    return 1;
}


module.exports = generateSchedule;