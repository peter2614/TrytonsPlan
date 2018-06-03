class ScheduledCourseController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getScheduledCourseID() {
        return this.model.getScheduledCourseID;
    }

    set setScheduledCourseID(scheduledCourseID) {
        this.model.setScheduledCourseID = scheduledCourseID;
    }

    get getSections() {
        return this.model.getSections;
    }

    set setSections(sections) {
        this.model.setSections = sections;
    }

    updataView() {
        return this.view.printInfo;
    }
}

module.exports = ScheduledCourseController;