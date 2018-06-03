let Course = require("./Course")
let Professor = require("./Professor")
let Pair = require("./Pair")
let Section = require("./Section")
let Schedule = require("./Schedule")
let ScheduledCourse = require("./ScheduledCourse")
//let Utility = require("./Utility")


let course_A = new Course("CSE101", "Algorithm", 4, "A", ["CSE100"]);
let course_B = new Course("CSE105", "Computation", 4, "B", ["CSE100"]);
let course_C = new Course("CSE150", "AI", 4, "C", ["CSE100"]);
let course_D = new Course("CSE110", "Software", 4, "D", ["CSE100"]);

let prof_A = new Professor("0000", "P", "A", course_A);
let prof_B = new Professor("0001", "P", "B", course_B);
let prof_C = new Professor("0002", "P", "C", course_C);
let prof_D = new Professor("0003", "P", "D", course_D);

let pair_A = new Pair(course_A, prof_A, 0, 0);
let pair_B = new Pair(course_B, prof_B, 1, 1);
let pair_C = new Pair(course_C, prof_C, 2, 2);
let pair_D = new Pair(course_D, prof_D, 3, 3);

// ---- TEST ONE ------------------------------------------------------------
// No conflict
// Only one section per course, one schedule is only available

let section_A = new Section("", pair_A, 2018, "FA", 800, 850, [1,3,5], "", "");
let section_B = new Section("", pair_B, 2018, "FA", 1300, 1350, [1,3,5], "", "");
let section_C = new Section("", pair_C, 2018, "FA", 800, 920, [2,4], "", "");
let section_D = new Section("", pair_D, 2018, "FA", 1600, 1750, [2,4], "", "");

let ScheduledCourse_A1 = new ScheduledCourse("",[section_A]);
let ScheduledCourse_B1 = new ScheduledCourse("",[section_B]);
let ScheduledCourse_C1 = new ScheduledCourse("",[section_C]);
let ScheduledCourse_D1 = new ScheduledCourse("",[section_D]);

let courseList_A = [ScheduledCourse_A1, ScheduledCourse_B1, ScheduledCourse_C1, ScheduledCourse_D1];

// generateSchedule(courseList_A)

// ---- END OF TEST ONE -----------------------------------------------------

// ---- TEST TWO ------------------------------------------------------------
// No conflict
// Two sections for one of the course, two schedules are available

let section_A_a2 = JSON.stringify(section_A);
let section_A_b2 = new Section("", pair_A, 2018, "FA", 900, 950, [1,3,5], "", "");

let ScheduledCourse_A2 = new ScheduledCourse("",[section_A_a2,section_A_b2]);
let ScheduledCourse_B2 = JSON.stringify(ScheduledCourse_B1);
let ScheduledCourse_C2 = JSON.stringify(ScheduledCourse_C1);
let ScheduledCourse_D2 = JSON.stringify(ScheduledCourse_D1);
let courseList_B = [ScheduledCourse_A2,ScheduledCourse_B2,ScheduledCourse_C2,ScheduledCourse_D2];

// generateSchedule(courseList_B)

// ---- END OF TEST TWO -----------------------------------------------------

// ---- TEST THREE ----------------------------------------------------------
// No conflict
// Multiple courses contain more than one sections, multiple schedules will
// be available

let section_B_a3 = JSON.stringify(section_B);
let section_B_b3 = new Section("",pair_B,2018,"FA",1400,1450,[1,3,5],"","");
let section_C_a3 = JSON.stringify(section_C);
let section_C_b3 = new Section("",pair_C,2018,"FA",1000,1120,[2,4],"","");

let ScheduledCourse_A3 = JSON.stringify(ScheduledCourse_A2);
let ScheduledCourse_B3 = new ScheduledCourse("",[section_B_a3, section_B_b3]);
let ScheduledCourse_C3 = new ScheduledCourse("",[section_C_a3, section_C_b3]);
let ScheduledCourse_D3 = JSON.stringify(ScheduledCourse_D1);

let courseList_C = [ScheduledCourse_A3,ScheduledCourse_B3,ScheduledCourse_C3,ScheduledCourse_D3];

// generateSchedule(courseList_C)

// ---- END OF TEST THREE ---------------------------------------------------

// ---- TEST FOUR ----------------------------------------------------------
// One conflict

let section_A_a4 = new Section("", pair_A, 2018, "FA", 1300, 1350, [1,3,5], "", "");

let ScheduledCourse_A4 = new ScheduledCourse("",[section_A,section_A_a4]);
let ScheduledCourse_B4 = JSON.stringify(ScheduledCourse_B1);
let ScheduledCourse_C4 = JSON.stringify(ScheduledCourse_C1);
let ScheduledCourse_D4 = JSON.stringify(ScheduledCourse_D1);

let courseList_D = [ScheduledCourse_A4,ScheduledCourse_B4,ScheduledCourse_C4,ScheduledCourse_D4];

// generateSchedule(courseList_D)

// ---- END OF TEST FOUR ---------------------------------------------------

// ---- TEST FIVE ----------------------------------------------------------
// Two conflicts

let section_B_a5 = new Section("",pair_B,2018,"FA",800,850,[1,3,5],"","");

let ScheduledCourse_A5 = JSON.stringify(ScheduledCourse_A4);
let ScheduledCourse_B5 = new ScheduledCourse("",[section_B,section_B_a5]);
let ScheduledCourse_C5 = JSON.stringify(ScheduledCourse_C1);
let ScheduledCourse_D5 = JSON.stringify(ScheduledCourse_D1);

let courseList_E = [ScheduledCourse_A5,ScheduledCourse_B5,ScheduledCourse_C5,ScheduledCourse_D5];

// generateSchedule(courseList_E)

// ---- END OF TEST FIVE ---------------------------------------------------

// ---- TEST  ----------------------------------------------------------
// ---- END OF TEST ---------------------------------------------------

