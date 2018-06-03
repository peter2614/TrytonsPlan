class College {

    constructor(collegeID, requirements) {
        this.collegeID = collegeID;
        this.requirements = requirements;
    }

    get getCollegeID() {
        return this.collegeID;
    }

    set setCollegeID(collegeID) {
        this.collegeID = collegeID;
    }

    get getRequirements() {
        return this.requirements;
    }

    set setRequirements(requirements) {
        this.requirements = requirements;
    }
}

module.exports = College;