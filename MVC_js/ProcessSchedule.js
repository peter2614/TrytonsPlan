
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
    var len = schedule.sections.length;
    numProf = len;
    var path, unitPath;
    var courseID;


    for (let i = 0; i < len; i++) {
        let profName = schedule.sections[i].getProfessor;

        courseID = schedule.sections[i].getCourseID;
        path =  "professor/" + profName.toString() + "/" + courseID.toString();
        unitPath = "course/" + courseID.toString();

        getScheduleData(unitPath, unitsCallback);

        if (profName !== "Staff"){  //Skip this section if taught by staff
            getScheduleData(path, callback);
        }
        else{
            numProf--;
            continue;
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
    if (numData === numProf){
        setInfo();
    }
}

function setInfo () {
    schedule.profScore = sumProfScore / numProf;
    schedule.timeCommitment = sumTimeCommitment;
    schedule.GPA = sumGPA / schedule.getSections.length;
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
    schedule.units = sumUnits;
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
    numData++;
    if (numData <= numProf)
        updateData(data);
}

function unitsCallback (data){
    numUnitsValue++;
    sumUnits += data.units;
    //console.log (schedule.sections.length)
    if (numUnitsValue === schedule.sections.length){
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
        for (let k = 0; k < schedule.sections.length; k++) {
            if (schedule.sections[k].getDay.indexOf(j) !== -1){
                timeForCurrDay += timeBetween(schedule.sections[k].getStartingTime, schedule.sections[k].getEndingTime);
                if (startTime === 0 || schedule.sections[k].getStartingTime < startTime){
                    startTime = schedule.sections[k].getStartingTime;
                }
                if (endTime === 0 || schedule.sections[k].getEndingTime > endTime){
                    endTime = schedule.sections[k].getEndingTime;
                }
            }
        }

        if (timeForCurrDay !== 0) {
            totalTimeUsage += timeForCurrDay / timeBetween(startTime, endTime);
            dayGotoSchool++;
        }
    }
    let aveTimeUsage = totalTimeUsage / dayGotoSchool;
    schedule.timeUsage = aveTimeUsage;
}


module.exports = processSchedule;
