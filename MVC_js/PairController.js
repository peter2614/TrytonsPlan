class PairController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getPairID() {
        return this.model.getPairID;
    }

    set setPairID(pairID) {
        this.model.setPairID = pairID;
    }

    get getCourse() {
        return this.model.getCourse;
    }

    set setCourse(course) {
        this.model.setCourse = course;
    }

    get getProfessor() {
        return this.model.getProfessor;
    }

    set setProfessor(professor) {
        this.model.setProfessor = professor;
    }

    get getScore() {
        return this.model.getScore;
    }

    set setScore(score) {
        this.model.setScore = score;
    }

    get getTimeCommitment() {
        return this.model.getTimeCommitment;
    }

    set setTimeCommitment(timeCommitment) {
        this.model.setTimeCommitment = timeCommitment;
    }

    updataView() {
        return this.view.printInfo;
    }

}

module.exports = PairController;