class CollegeController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getCollegeID() {
        return this.model.getCollegeID;
    }

    set setCollegeID(collegeID) {
        this.model.setCollegeID = collegeID;
    }

    get getRequirements() {
        return this.model.getRequirements;
    }

    set setRequirements(requirements) {
        this.model.setRequirements = requirements;
    }
}

module.exports = CollegeController;