class Course {
    constructor(courseID, title, units, description, prerequisities) {
        this.courseID = courseID;
        this.title = title;
        this.units = units;
        this.description = description;
        this.prerequisities = prerequisities;
    }

    get getCourseID() {
        return this.courseID;
    }

    set setCourseID(courseID) {
        this.courseID = courseID;
    }

    get getTitle() {
        return this.title;
    }

    set setTitle(title) {
        this.title = title;
    }

    get getUnits() {
        return this.units;
    }

    set setUnits(units) {
        this.units = units;
    }

    get getDescription() {
        return this.description;
    }

    set setDescription(description) {
        this.description = description;
    }

    get getPrerequisities() {
        return this.prerequisities;
    }

    set setPrerequisities(prerequisities) {
        this.prerequisities = prerequisities;
    }

};

module.exports = Course;

//var a = new Course("CSE110", "Software Engineering", 4, "Best class in UCSD", ["CSE100"]);
//console.log(a.getDescription);
//a.setDescription = "Gary runs this class!";
//console.log(a.getDescription);