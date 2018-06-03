class User {

    constructor(userID, firstName, lastName, year, majors, college, coursesTaken, favorites, schedules) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.majors = majors;
        this.college = college;
        this.coursesTaken = coursesTaken;
        this.favorites = favorites;
        this.schedules = schedules;
    }

    get getUserID() {
        return this.userID;
    }

    set setUserID(userID) {
        this.userID = userID;
    }

    get getFirstName() {
        return this.firstName;
    }

    set setFirstName(firstName) {
        this.firstName = firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    set setLastName(lastName) {
        this.lastName = lastName;
    }

    get getYear() {
        return this.year;
    }

    set setYear(year) {
        this.year = year;
    }

    get getMajors() {
        return this.majors;
    }

    set setMajors(majors) {
        this.majors = majors;
    }

    get getCollege() {
        return this.college;
    }

    set setCollege(college) {
        this.college = college;
    }

    get getCoursesTaken() {
        return this.coursesTaken;
    }

    set setCoursesTaken(coursesTaken) {
        this.coursesTaken = coursesTaken;
    }

    get getFavorites() {
        return this.favorites;
    }

    set setFavorites(favorites) {
        this.favorites = favorites;
    }

    get getSchedules() {
        return this.schedules;
    }

    set setSchedules(schedules) {
        this.schedules = schedules;
    }

}

module.exports = User;