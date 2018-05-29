var Util = require ("./Utility");
var getSchedule = Util.getSchedule;
var getData = Util.getData;
var getScheduleData = Util.getScheduleData;

var dataSet = [];
var schedules;
var courseList = ["CSE 100", "CSE 105", "CSE 110", "CSE 30", "CSE 11", "CSE 158", "CHEM 11"];
var numGet = 0;

function callback (data){
    dataSet.push(data);
    numGet++;
    if (numGet === courseList.length){
        schedules = getSchedule(courseList, dataSet);
    }
}


for (let i = 0; i < courseList.length; i++){
    getData(courseList[i], callback);
}




