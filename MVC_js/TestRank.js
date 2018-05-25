let Schedule = require('./Schedule')
let Rank = require('./Utility')
var rankByProfScore = Rank.rankByProfScore;
var rankByDistance = Rank.rankByDistance;
var rankByTimeCommitment = Rank.rankByTimeCommitment;
var rankByTimeInSchool = Rank.rankByTimeInSchool;

var s1 = new Schedule("A","",0,0,0.75,100,12,12);
var s2 = new Schedule("B","",0,0,0.90,80,22,15);
var s3 = new Schedule("C","",0,0,0.88,250,23,18);
var s4 = new Schedule("D","",0,0,0.42,1000,25,14);
var s5 = new Schedule("E","",0,0,0.67,20,11,17);
var s6 = new Schedule("F","",0,0,0.44,534,30,10);
var s7 = new Schedule("G","",0,0,0.20,33,18,8);
var scheduleList = [s1,s2,s3,s4,s5,s6,s7];

// Schedule List
console.log(scheduleList);

// Test Case 1: rank by professor score
var ScheduleListRankedByProfScore = rankByProfScore(scheduleList);

// expected output: B C A E F D G
console.log("Rank by Professor Score:")
for(var i = 0; i < ScheduleListRankedByProfScore.length; i++) {
    console.log(ScheduleListRankedByProfScore[i].getScheduleID);
}

// Test Case 2: rank by distance
var ScheduleListRankedByDistance = rankByDistance(scheduleList);

// expected output: D F C A B G E
console.log("Rank by Distance:")
for(var i = 0; i < ScheduleListRankedByDistance.length; i++) {
    console.log(ScheduleListRankedByDistance[i].getScheduleID);
}

// Test Case 3: rank by time commitment
var ScheduleListRankedByTimeCommitment = rankByTimeCommitment(scheduleList);

// expected output: F D C B G A E
console.log("Rank by Time Commitment:")
for(var i = 0; i < ScheduleListRankedByTimeCommitment.length; i++) {
    console.log(ScheduleListRankedByTimeCommitment[i].getScheduleID);
}

// Test Case 4: rank by time in school
var ScheduleListRankedByTimeInSchool = rankByTimeInSchool(scheduleList);

// expected output: C E B D A F G
console.log("Rank by Time In School:")
for(var i = 0; i < ScheduleListRankedByTimeInSchool.length; i++) {
    console.log(ScheduleListRankedByTimeInSchool[i].getScheduleID);
}
