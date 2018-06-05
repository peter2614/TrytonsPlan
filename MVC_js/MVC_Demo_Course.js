const Course = require('./Course.js');
const CourseView = require('./CourseView.js');
const CourseController = require('./CourseController.js');

function retriveCourseFromDatabase() {
    //let course = new Course("CSE110","Software Engineering",4,"Best","CSE100");
    let course = new Course();
    course.setCourseID = "CSE110";
    course.setTitle = "Software Engineering";
    course.setUnits = 4;
    course.setDescription = "Best Class in UCSD!";
    course.setPrerequisities = ["CSE100", "CSE12"];
    return course;
}


let model = retriveCourseFromDatabase();
//model = new Course("CSE110", "Software Engineering", 4, "Best", "CSE100");
//console.log(model.getTitle);

let view = new CourseView();
let controller = new CourseController(model, view);

console.log(controller.updateView());
controller.setDescription = "Gary runs this class!";
console.log(controller.updateView());