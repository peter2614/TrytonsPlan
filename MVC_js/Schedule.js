class Schedule {

    constructor(scheduleID, year, quarter, sections, profScore, distance, timeCommitment, timeInSchool) {
        this.scheduleID = scheduleID;
        this.year = year;
        this.quarter = quarter;
        this.sections = sections;
        this.profScore = profScore;
        this.distance = distance;
        this.timeCommitment = timeCommitment;
        this.timeInSchool = timeInSchool;
    }

    get getScheduleID() {
        return this.scheduleID;
    }

    set setScheduleID(scheduleID) {
        this.scheduleID = scheduleID;
    }

    get getYear() {
        return this.year;
    }

    set setYear(year) {
        this.year = year;
    }

    get getQuarter() {
        return this.quarter;
    }

    set setQuarter(quarter) {
        this.quarter = quarter;
    }

    get getSections() {
        return this.sections;
    }

    set setSections(sections) {
        this.sections = sections;
    }

    get getProfScore() {
        return this.profScore;
    }

    set setProfScore(profScore) {
        this.profScore = profScore;
    }

    get getDistance() {
        return this.distance;
    }

    set setDistance(distance) {
        this.distance = distance;
    }

    get getTimeCommitment() {
        return this.timeCommitment;
    }

    set setTimeCommitment(timeCommitment) {
        this.timeCommitment = timeCommitment;
    }

    get getTimeInSchool() {
        return this.timeInSchool;
    }

    set setTimeInSchool(timeInSchool) {
        this.timeInSchool = timeInSchool;
    }
}

module.exports = Schedule;