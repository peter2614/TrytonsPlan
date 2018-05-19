class MajorController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getMajorID() {
        return this.model.getMajorID;
    }

    set setMajorID(majorID) {
        this.model.setMajorID = majorID;
    }

    get getDepartment() {
        return this.model.getDepartment;
    }

    set setDepartment(department) {
        this.model.setDepartment = department;
    }

    get getRequirements() {
        return this.model.getRequirements;
    }

    set setRequirements(requirements) {
        this.model.setRequirements = requirements;
    }

    updataView() {
        return this.view.printInfo;
    }
}

module.exports = MajorController;