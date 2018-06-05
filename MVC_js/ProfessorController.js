class ProfessorController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getProfessorID() {
        return this.model.getProfessorID;
    }

    set setProfessorID(professorID) {
        this.model.setProfessorID = professorID;
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

    get getCourses() {
        return this.model.courses;
    }

    set setCourses(courses) {
        this.model.courses = courses;
    }

    updataView() {
        return this.view.printInfo;
    }
}

module.exports = ProfessorController