let Course = require("./Course")
let Professor = require("./Professor")
let Pair = require("./Pair")
let Section = require("./Section")
let Schedule = require("./Schedule")
let ScheduledCourse = require("./ScheduledCourse")

/*
import {Course} from "./Course.js"
import {Professor} from "./Professor.js"
import {Pair} from "./Pair.js"
import {Section} from "./Section.js"
import {Schedule} from "./Schedule.js"
import {ScheduledCourse} from "./ScheduledCourse.js"
*/


var processedList;  //Global variable -- the list processed by processCourseList(). For helperGenerator().


/*
    Schedule generator. First extract all sections in all courses in the course list, then call processCourseList() and
    helperGenerator to generate a list of all possible courses.
    Return value: an array of Schedule objects.
 */
var generateSchedule = function (courseList){
    let scheduleArr = [];
    let numCourse = courseList.length;


    let sectionList  = new Array();
    for (let i = 0; i < courseList.length; i++){  //Get all sections from all courses in courseList.
        let course = new ScheduledCourse(courseList[i]);
        let sections = courseList[i].getSections;

        for (let j = 0; j < sections.length; j++){
            sectionList.push(sections[j]);
        }
    }

    //console.log ();

    let processedSecList = processCourseList(sectionList);
    processedList = processedSecList;

    var initialSchedule = new Schedule();

    helperGenerator(initialSchedule, scheduleArr, 0);

    return scheduleArr;
    /*for (let i = 0; i < processedSecList.length - numCourse; i++){
        let currSlot = processedSecList[i];
        let numSecInSlot = currSlot.length;
        for (let j = 0; j < numSecInSlot; j++){
            for (let k = i + 1; k < processedSecList.length; k++){
                let curr
            }
        }
    }*/
}


/*
    Recursive function for generating all possible schedules.
 */
var helperGenerator = function (currSchedule, scheduleList, slotIndex){
    if (slotIndex === processedList.length){
        scheduleList.push(currSchedule);
        return;
    }

    var slot = processedList[slotIndex];
    //console.log (slot);
    var numSectionInSlot = slot.length;

    for (let i = 0; i < numSectionInSlot; i++) {
        var retVal = addSection(currSchedule, processedList[slotIndex][i]);
        if (retVal === 1) {
            let newSchedule = new Schedule(currSchedule.getScheduleID(), currSchedule.getYear(), currSchedule.getQuarter(),
                currSchedule.getSections(), currSchedule.getProfScore(), currSchedule.getDistance(),
                currSchedule.getTimeCommitment(), currSchedule.getTimeInSchool());  //TODO: is there a better way?
            newSchedule.getSections.push(processedList[slotIndex][i]);
            helperGenerator(newSchedule, scheduleList, slotIndex + 1);
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

    for (let i = 0; i < numSection; i++){
        let findSlot = 0;

        for (let j = 1; j < newList.length; j++){  //Search to see if there is a slot in the new list for this section.
            console.log(sectionList[i]);
             if (sectionList[i].getTime === newList[j].getTime && checkDay(sectionList[i].getDay, newList[j].getDay)){  //TODO: getTime() need to be updated
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
    console.log ("End list");
    return newList;
}



/*
    Check if a section can be added to the given schedule.
    Return value: -1 if repeated new section;
                  0 if conflict;
                  1 if successful.
 */
var addSection = function (schedule, newSection){
    let sectionList = schedule.getSections();
    let numSections = sectionList.length;

    for (let i = 0; i < numSections; i++){
        let section = sectionList[i];
        if (section.getSectionID() === newSection){
            return -1;
        }
        else {
            if (section.getFinalTime() === newSection.getFinalTime()) {
                return 0;
            }
            else if (section.getPair().getCourse() === newSection.getPair().getCourse()){
                return 0;
            }
            else {
                return 1;
            }
        }
    }
}


/*
    Helper function for checking the day of two courses.
    Return value: 0 if there is overlapping in the two days array;
                  1 if there is no overlapping.
 */
var checkDay = function (dayArr1, dayArr2){
    console.log(dayArr1);
    for (let i = 0; i < dayArr1.length; i++){
        for (let j = 0; j < dayArr.length; j++){
            if (dayArr1[i] === dayArr2[j]) {
                return 0;
            }
        }
    }
    return 1;
}

module.exports = generateSchedule;