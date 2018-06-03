class CourseController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getCourseID() {
        return this.model.getCourseID;
    }

    set setCourseID(courseID) {
        this.model.setCourseID = courseID;
    }

    get getTitle() {
        return this.model.getTitle;
    }

    set setTitle(title) {
        this.model.setTitle = title;
    }

    get getUnits() {
        return this.model.getUnits;
    }

    set setUnits(units) {
        this.model.setUnits = units;
    }

    get getDescription() {
        return this.model.getDescription;
    }

    set setDescription(description) {
        this.model.setDescription = description;
    }

    get getPrerequisities() {
        return this.model.getPrerequisities;
    }

    set setPrerequisities(prerequisities) {
        this.model.setPrerequisities = prerequisities;
    }

    updateView() {
        return this.view.printInfo(this.model.getCourseID, this.model.getTitle, this.model.getUnits, this.model.getDescription, this.model.getPrerequisities);
    }
};


module.exports = CourseController;