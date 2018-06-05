class Pair {

    constructor(pairID, course, professor, score, timeCommitment) {
        this.pairID = pairID;
        this.course = course;
        this.professor = professor;
        this.score = score;
        this.timeCommitment = timeCommitment;
    }

    get getPairID() {
        return this.pairID;
    }

    set setPairID(pairID) {
        this.pairID = pairID;
    }

    get getCourse() {
        return this.course;
    }

    set setCourse(course) {
        this.course = course;
    }

    get getProfessor() {
        return this.professor;
    }

    set setProfessor(professor) {
        this.professor = professor;
    }

    get getScore() {
        return this.score;
    }

    set setScore(score) {
        this.score = score;
    }

    get getTimeCommitment() {
        return this.timeCommitment;
    }

    set setTimeCommitment(timeCommitment) {
        this.timeCommitment = timeCommitment;
    }

}

module.exports = Pair;