class ScheduledCourse {

    constructor(sections) {
        this.sections = sections;
    }

    get getSections() {
        return this.sections;
    }

    set setSections(sections) {
        this.sections = sections;
    }
}

module.exports = ScheduledCourse;