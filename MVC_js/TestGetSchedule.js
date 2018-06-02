var Util = require ("./Utility");
var getSchedule = Util.getSchedule;
var getData = Util.getData;
var turnOffDatabase = Util.turnOffDatabase;


var dataSet = [];
var schedules;
var courseList = ["CSE 21", "CSE 15L"];
var numGet = 0;

function callback (data){
    dataSet.push(data);
    numGet++;
    if (numGet === courseList.length){
        schedules = getSchedule(courseList, dataSet, callback2);
    }
}


for (let i = 0; i < courseList.length; i++){
    getData(courseList[i], callback);
}

function callback2 (scheduleList){
    console.log (scheduleList);
    turnOffDatabase(); // remember to turn off the database to avoid freezing!
}