class CourseView {

    constructor() {}

    printInfo(courseID, title, units, description, prerequisities) {
        var info =  "---------------------------------------\n" +
                    "Course ID:      " + courseID + "\n" +
                    "Title:          " + title + "\n" +
                    "Units:          " + units + "\n" +
                    "Description:    " + description + "\n" +
                    "Prerequisities: " + prerequisities + "\n" +
                    "---------------------------------------\n";
        return info
    }
};

module.exports = CourseView;