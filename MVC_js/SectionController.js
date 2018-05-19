class SectionController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getSectionID() {
        return this.model.getSectionID;
    }

    set setSectionID(sectionID) {
        this.model.setSectionID = sectionID;
    }

    get getPair() {
        return this.model.getPair;
    }

    set setPair(pair) {
        this.model.setPair = pair;
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

    get getTime() {
        return this.model.getTime;
    }

    set setTime(time) {
        this.model.setTime = time;
    }

    get getDay() {
        return this.model.getDay;
    }

    set setDay(day) {
        this.model.setDay = day;
    }

    get getLocation() {
        return this.model.getLocation;
    }

    set setLoaction(location) {
        this.model.setLocation = location;
    }

    get getFinalTime() {
        return this.model.getFinalTime;
    }

    set setFinalTime(finalTime) {
        this.model.setFinalTime = finalTime;
    }

    updataView() {
        return this.view.printInfo;
    }
}

module.exports = SectionController;