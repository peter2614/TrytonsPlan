class Section {

    constructor(sectionID, pair, year, quarter, startingTime, endingTime, day, location, finalTime) {
        this.sectionID = sectionID;
        this.pair = pair;
        this.year = year;
        this.quarter = quarter;
        this.startingTime = startingTime;
        this.endingTime = endingTime;
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

    get getStartingTime() {
        return this.startingTime;
    }

    set setStartingTime(startingTime) {
        this.startingTime = startingTime;
    }

    get getEndingTime() {
        return this.endingTime;
    }

    set setEndingTime(endingTime) {
        this.endingTime = endingTime;
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