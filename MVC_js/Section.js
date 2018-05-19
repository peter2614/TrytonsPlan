class Section {

    constructor(sectionID, pair, year, quarter, time, day, location, finalTime) {
        this.sectionID = sectionID;
        this.pair = pair;
        this.year = year;
        this.quarter = quarter;
        this.time = time;
        this.day = day;
        this.location = location;
        this.finalTime = finalTime;
    }

    get getSectionID() {
        return this.sectionID;
    }

    set setSectionID(sectionID) {
        this.sectionID = sectionID;
    }

    get getPair() {
        return this.pair;
    }

    set setPair(pair) {
        this.pair = pair;
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

    get getTime() {
        return this.time;
    }

    set setTime(time) {
        this.time = time;
    }

    get getDay() {
        return this.day;
    }

    set setDay(day) {
        this.day = day;
    }

    get getLocation() {
        return this.location;
    }

    set setLocation(location) {
        this.location = location;
    }

    get getFinalTime() {
        return this.finalTime;
    }

    set setFinalTime(finalTime) {
        this.finalTime = finalTime;
    }
}

module.exports = Section;