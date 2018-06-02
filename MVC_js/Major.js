class Major {

    constructor(majorID, department, requirements) {
        this.majorID = majorID;
        this.department = department;
        this.requirements = requirements;
    }

    get getMajorID() {
        return this.majorID;
    }

    set setMajorID(majorID) {
        this.majorID = majorID;
    }

    get getDepartment() {
        return this.department;
    }

    set setDepartment(department) {
        this.department = department;
    }

    get getRequirements() {
        return this.requirements;
    }

    set setRequirements(requirements) {
        this.requirements = requirements;
    }
}

module.exports = Major;
