var Util = require ("./Utility");
var getSchedule = Util.getSchedule;
var getData = Util.getData;
var turnOffDatabase = Util.turnOffDatabase;


var dataSet = [];
var schedules;

var courseList = ["CSE 8B", "CSE 3", "CSE 5A", "CSE 8A", "CSE 100", "CSE 20"];

var courseList2 = ["CSE 100", "CSE 105", "CSE 110", "CSE 30", "CSE 11", "CSE 158", "CHEM 11", "COGS 15"];
var courseList1 = ["CSE 11", "PHYS 2A", "BIMM 140"];

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
    console.log(scheduleList);
    //console.log(scheduleList[0].getSections[0]);
    //console.log(scheduleList[0].getSections[1].getLA[0]);
    //console.log('\n');
    //console.log (scheduleList[0].getSections[0].getDI);
    turnOffDatabase(); // remember to turn off the database to avoid freezing!
}
