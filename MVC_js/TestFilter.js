var Util = require ("./Utility");
var filterByMaxUnits = Util.filterByMaxUnits;
var filterByStartingTime = Util.filterByStartingTime;
var filterByEndingTime = Util.filterByEndingTime;
var Schedule = require("./Schedule");
var Section = require("./Section");

var scheduleList = [];

scheduleList.push(new Schedule(1,"A",0,0,0,0,0,0,0,16));
scheduleList.push(new Schedule(2,"B",0,0,0,0,0,0,0,20));
scheduleList.push(new Schedule(3,"C",0,0,0,0,0,0,0,12));
scheduleList.push(new Schedule(4,"D",0,0,0,0,0,0,0,24));
scheduleList.push(new Schedule(5,"E",0,0,0,0,0,0,0,8));


// ------------------------------------------------------------------------------------
// Test filter by max units

console.log("Test max units");
var newScheduleListFilteredByMaxUnit = filterByMaxUnits(scheduleList, 20);

for(let i = 0; i < newScheduleListFilteredByMaxUnit.length; i++) {
    console.log(newScheduleListFilteredByMaxUnit[i].getYear);
}

// ----------------------------------------------------------------------------------*/


// ------------------------------------------------------------------------------------
// Test filter by starting time

console.log("Test starting time");
let startingTime = 800;
let sectionA = new Section("A",0,800,850,0,0,0,0,0,0,0);
let sectionB = new Section("B",0,900,950,0,0,0,0,0,0,0);
let sectionC = new Section("C",0,1000,1050,0,0,0,0,0,0,0);
let sectionD = new Section("D",0,1100,1150,0,0,0,0,0,0,0);
let sectionE = new Section("E",0,1200,1250,0,0,0,0,0,0,0);

scheduleList[0].setSections = [sectionA, sectionB];
scheduleList[1].setSections = [sectionA, sectionB, sectionC];
scheduleList[2].setSections = [sectionA, sectionB, sectionC, sectionD];
scheduleList[3].setSections = [sectionB, sectionC];
scheduleList[4].setSections = [sectionC, sectionD, sectionE];

var newScheduleListFilteredByStartingTime = filterByStartingTime(scheduleList, startingTime);
//console.log(newScheduleListFilteredByStartingTime);
for(let i = 0; i < newScheduleListFilteredByStartingTime.length; i++) {
    console.log(newScheduleListFilteredByStartingTime[i].getYear);
}

// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Test filter by ending time

console.log("Test ending time");
let endingTime = 1100;

var newScheduleListFilteredByEndingTime = filterByEndingTime(scheduleList, endingTime);

for(let i = 0; i < newScheduleListFilteredByEndingTime.length; i++) {
    console.log(newScheduleListFilteredByEndingTime[i].getYear);
}

// ------------------------------------------------------------------------------------