class ScheduledCourse {

    constructor(scheduledCourseID, sections) {
        this.scheduledCourseID = scheduledCourseID;
        this.sections = sections;
    }

    get getScheduledCourseID() {
        return this.scheduledCourseID;
    }

    set setScheduledCourseID(scheduledCourseID) {
        this.scheduledCourseID = scheduledCourseID;
    }

    get getSections() {
        return this.sections;
    }

    set setSections(sections) {
        this.sections = sections;
    }
}

module.exports = ScheduledCourse;