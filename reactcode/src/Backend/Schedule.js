class Schedule {

    constructor(scheduleID, year, quarter, sections, profScore, distance, timeCommitment, timeUsage, GPA, units) {
        this.scheduleID = scheduleID;
        this.year = year;
        this.quarter = quarter;
        this.sections = sections;
        this.profScore = profScore;
        this.distance = distance;
        this.timeCommitment = timeCommitment;
        this.timeUsage = timeUsage;
        this.GPA = GPA;
        this.units = units;
        this.hashKey = 0;
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

    get getTimeUsage() {
        return this.timeUsage;
    }

    set setTimeUsage(timeUsage) {
        this.timeUsage = timeUsage;
    }

    get getGPA() {
        return this.GPA;
    }

    set setGPA(GPA) {
        this.GPA = GPA;
    }

    get getUnits() {
        return this.units;
    }

    set setUnits(units) {
        this.units = units;
    }
}

module.exports = Schedule;