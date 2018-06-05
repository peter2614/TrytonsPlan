class Professor {
    constructor(professorID, firstName, lastName, courses) {
        this.professorID = professorID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.courses = courses;
    }

    get getProfessorID() {
        return this.professorID;
    }

    set setProfessorID(professorID) {
        this.professorID = professorID;
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

    get getCourses() {
        return this.courses;
    }

    set setCourses(courses) {
        this.courses = courses;
    }
}

module.exports = Professor;