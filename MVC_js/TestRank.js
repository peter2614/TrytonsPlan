let Schedule = require('./Schedule')
let Rank = require('./Utility')
var rankByProfScore = Rank.rankByProfScore;
var rankByDistance = Rank.rankByDistance;
var rankByTimeCommitment = Rank.rankByTimeCommitment;
var rankByTimeUsage = Rank.rankByTimeUsage;
var rankByGPA = Rank.rankByGPA;

var s1 = new Schedule("A","",0,0,0.75,100,12,0.55,3.3);
var s2 = new Schedule("B","",0,0,0.90,80,22,0.57,3.2);
var s3 = new Schedule("C","",0,0,0.88,250,23,0.88,2.9);
var s4 = new Schedule("D","",0,0,0.42,1000,25,0.24,2.5);
var s5 = new Schedule("E","",0,0,0.67,20,11,0.13,3.9);
var s6 = new Schedule("F","",0,0,0.44,534,30,0.45,1.7);
var s7 = new Schedule("G","",0,0,0.20,33,18,0.87,3.77);
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

// Test Case 4: rank by time usage
var ScheduleListRankedByTimeUsage = rankByTimeUsage(scheduleList);

// expected output: C G B A F D E
console.log("Rank by Time Usage:")
for(var i = 0; i < ScheduleListRankedByTimeUsage.length; i++) {
    console.log(ScheduleListRankedByTimeUsage[i].getScheduleID);
}

// Test Case 5: rank by GPA
var ScheduleListRankedByGPA = rankByGPA(scheduleList);

// expected output: E G A B C D F
console.log("Rank by GPA:")
for(var i = 0; i < ScheduleListRankedByGPA.length; i++) {
    console.log(ScheduleListRankedByGPA[i].getScheduleID);
}