/*import {generateSchedule} from "./Utility.js"
import {Course} from "./Course.js"
import {Pair} from "./Pair.js"
import {Section} from "./Section.js"
import {Schedule} from "./Schedule.js"
import {ScheduledCourse} from "./ScheduledCourse.js"*/

let Course = require("./Course")
let Professor = require("./Professor")
let Pair = require("./Pair")
let Section = require("./Section")
let Schedule = require("./Schedule")
let ScheduledCourse = require("./ScheduledCourse")
let generator = require("./Utility")

console.log ("Start");

var pair1 = new Pair(200, 10, "XXX", 0, 10);
var pair2 = new Pair(201, 11, "YYY", 0, 5);
var pair3 = new Pair(202, 12, "ZZZ", 0, 15);

var section1 = new Section(100, 200, 2018, "FA18", 800, 920, [2, 4], "PETER 108", 1130);
var section2 = new Section(101, 201, 2018, "FA18", 930, 1120, [2, 4], "PETER 108", 1130);
var section3 = new Section(102, 202, 2018, "FA18", 900, 950, [1, 3, 5], "PETER 108", 1500);

var c1 = new Course(10, "CSE 11", 4, "NA", "NA");
var c2 = new Course(11, "CSE 12", 4, "NA", "NA");
var c3 = new Course(12, "CSE 20", 4, "NA", "NA");

var course1 = new ScheduledCourse(10, [100]);
var course2 = new ScheduledCourse(11, [101]);
var course3 = new ScheduledCourse(12, [102]);

var courseList = [course1, course2, course3];

var scheduleList = generator(courseList);

console.log ("Complete");







