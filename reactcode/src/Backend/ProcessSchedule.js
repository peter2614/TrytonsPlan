
var schedule;
var sumProfScore = 0,
    sumTimeCommitment = 0,
    sumGPA = 0;
var numData = 0;
var numUnitsValue = 0;
var sumUnits = 0;
var finalCallBack;
var unitsSet = 0;
var infoSet = 0;
var numProf = 0;


/*
    Helper function to set profScore, TimeCommitment, GPA for one schedule
 */
function processSchedule (aSchedule, getScheduleData, cb){

    finalCallBack = cb;
    schedule = aSchedule;
    var len = schedule.getSections.length;
    numProf = len;
    var path, unitPath;
    var courseID;


    for (let i = 0; i < len; i++) {
        let profName = schedule.getSections[i].getProfessor;

        courseID = schedule.getSections[i].getCourseID;
        path =  "professor/" + profName.toString() + "/" + courseID.toString();
        unitPath = "course/" + courseID.toString();

        getScheduleData(unitPath, unitsCallback);

            if(profName.toString().includes(" \r\n")) { // if co-taught
                let profArr = profName.toString().split(" \r\n");
                numProf += profArr.length - 1;
                for(let i = 0; i < profArr.length; i++) {
                    path = "professor/" + profArr[i].toString() + "/" + courseID.toString();
                    getScheduleData(path, callback);
                }
            }
            else {
                getScheduleData(path, callback);
            }

    }
}

function updateData (data){
    //console.log (data)
    if (data !== null) {

        sumProfScore += data.score;
        sumTimeCommitment += data.timeCommitment;
        sumGPA += data.gpaActual;
    }
    else {
        numProf--;
    }
    if (numData === numProf){
        setInfo();
    }
}

function setInfo () {

    if (sumProfScore === null || sumProfScore === 0)
        schedule.setProfScore = 0.00;
    else
        schedule.setProfScore = (sumProfScore / numProf).toFixed(2);

    if (sumTimeCommitment === null || sumTimeCommitment === 0)
        schedule.setTimeCommitment = 999.99;
    else
        schedule.setTimeCommitment = sumTimeCommitment.toFixed(2);

    if (sumGPA === null || sumGPA === 0)
        schedule.setGPA = 0.00;
    else
        schedule.setGPA = (sumGPA / numProf).toFixed(2);

    infoSet = 1;
    if (unitsSet === 1){
        setTimeUsage();
        sumProfScore = 0;
        sumTimeCommitment = 0;
        sumGPA = 0;
        numData = 0;
        numUnitsValue = 0;
        sumUnits = 0;
        unitsSet = 0;
        infoSet = 0;
        numProf = 0;
        finalCallBack ();
    }
}


function setUnits() {
    schedule.setUnits = sumUnits;
    unitsSet = 1;

    if (infoSet === 1){
        setTimeUsage();
        sumProfScore = 0;
        sumTimeCommitment = 0;
        sumGPA = 0;
        numData = 0;
        numUnitsValue = 0;
        sumUnits = 0;
        unitsSet = 0;
        infoSet = 0;
        numProf = 0;
        finalCallBack();
    }
}


function callback(data){
    if (data !== null) {
        numData++;
    }
    if (numData <= numProf)
        updateData(data);
}

function unitsCallback (data){
    numUnitsValue++;
    sumUnits += data.units;
    if (numUnitsValue === schedule.getSections.length){
        setUnits();
    }
}


function timeBetween (time1, time2){
    let result = Math.floor((time2 - time1) / 100) * 60 + (time2 - time1) % 100;
    return result;
}


function setTimeUsage(){
    var totalTimeUsage = 0;
    let dayGotoSchool = 0;
    //Calculate time usage
    for (let j = 1; j <= 5; j++){
        let timeForCurrDay = 0;
        var startTime = 0, endTime = 0;
        for (let k = 0; k < schedule.getSections.length; k++) {
            if (schedule.getSections[k].getDay.indexOf(j) !== -1){
                timeForCurrDay += timeBetween(schedule.getSections[k].getStartingTime, schedule.getSections[k].getEndingTime);
                if (startTime === 0 || schedule.getSections[k].getStartingTime < startTime){
                    startTime = schedule.getSections[k].getStartingTime;
                }
                if (endTime === 0 || schedule.getSections[k].getEndingTime > endTime){
                    endTime = schedule.getSections[k].getEndingTime;
                }
            }
        }

        if (timeForCurrDay !== 0) {
            totalTimeUsage += timeForCurrDay / timeBetween(startTime, endTime);
            dayGotoSchool++;
        }
    }
    let aveTimeUsage = totalTimeUsage / dayGotoSchool;
    schedule.setTimeUsage = aveTimeUsage.toFixed(2);
}


module.exports = processSchedule;
