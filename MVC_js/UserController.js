class UserController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getUserID() {
        return this.model.getUserID;
    }

    set setUserID(userID) {
        this.model.setUserID = userID;
    }

    get getFirstName() {
        return this.model.getFirstName;
    }

    set setFirstName(firstName) {
        this.model.setFirstName = firstName;
    }

    get getLastName() {
        return this.model.getLastName;
    }

    set setLastName(lastName) {
        this.model.setLastName = lastName;
    }

    get getYear() {
        return this.model.getYear;
    }

    set setYear(year) {
        this.model.setYear = year;
    }

    get getMajors() {
        return this.model.getMajors;
    }

    set setMajors(majors) {
        this.model.setMajors = majors;
    }

    get getCollege() {
        return this.model.getCollege;
    }

    set setCollege(college) {
        this.model.setCollege = college;
    }

    get getCoursesTaken() {
        return this.model.getCoursesTaken;
    }

    set setCoursesTaken(coursesTaken) {
        this.model.setCoursesTaken = coursesTaken;
    }

    get getFavorites() {
        return this.model.getFavorites;
    }

    set setFavorites(favorites) {
        this.model.setFavorites = favorites;
    }

    get getSchedules() {
        return this.model.getSchedules;
    }

    set setSchedules(schedules) {
        this.model.setSchedules = schedules;
    }

    updataView() {
        return this.view.printInfo;
    }
}

module.exports = UserController;