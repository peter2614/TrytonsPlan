class ScheduleController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getScheduleID() {
        return this.model.getScheduleID;
    }

    set setScheduleID(scheduleID) {
        this.model.setScheduleID = scheduleID;
    }

    get getYear() {
        return this.model.getYear;
    }

    set setYear(year) {
        this.model.setYear = year;
    }

    get getQuarter() {
        return this.model.getQuarter;
    }

    set setQuarter(quarter) {
        this.model.setQuarter = quarter;
    }

    get getSections() {
        return this.model.getSections;
    }

    set setSections(sections) {
        this.model.setSections = sections;
    }

    get getProfScore() {
        return this.model.getProfScore;
    }

    set setProfScore(profScore) {
        this.model.setProfScore = profScore;
    }

    get getDistance() {
        return this.model.setDistance;
    }

    set setDistance(distance) {
        this.model.setDistance = distance;
    }

    get getTimeCommitment() {
        return this.model.getTimeCommitment;
    }

    set setTimeCommitment(timeCommitment) {
        this.model.setTimeCommitment = timeCommitment;
    }

    get getTimeInSchool() {
        return this.model.setTimeInSchool;
    }

    set setTimeInSchool(timeInSchool) {
        this.model.setTimeInSchool = timeInSchool;
    }

    updataView() {
        return this.view.printInfo;
    }
}

module.exports = ScheduleController;