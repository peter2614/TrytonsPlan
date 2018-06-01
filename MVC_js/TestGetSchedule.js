var Util = require ("./Utility");
var getSchedule = Util.getSchedule;
var getData = Util.getData;
var turnOffDatabase = Util.turnOffDatabase;


var dataSet = [];
var schedules;
var courseList = ["CSE 100", "CSE 105", "CSE 110", "CSE 30", "CSE 11", "CSE 158", "CHEM 11", "COGS 15"];
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