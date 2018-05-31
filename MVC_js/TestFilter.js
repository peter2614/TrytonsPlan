var Util = require ("./Utility");
var filterByMaxUnits = Util.filterByMaxUnits;
var Schedule = require("./Schedule");

var scheduleList = [];

scheduleList.push(new Schedule(1,0,0,0,0,0,0,0,0,16));
scheduleList.push(new Schedule(2,0,0,0,0,0,0,0,0,20));
scheduleList.push(new Schedule(3,0,0,0,0,0,0,0,0,12));
scheduleList.push(new Schedule(4,0,0,0,0,0,0,0,0,24));
scheduleList.push(new Schedule(5,0,0,0,0,0,0,0,0,8));

var newScheduleList = filterByMaxUnits(scheduleList, 20);

for(let i = 0; i < newScheduleList.length; i++) {
    console.log(newScheduleList[i].getUnits);
}

