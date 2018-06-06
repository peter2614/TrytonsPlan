
//Returns everything we need to know about a course, including its professor
export function getAllInfo(courseName, db, callback) {
    let f18ref = db.database().ref("F18/" + courseName);
    let catalogref = db.database().ref("course/" + courseName);

    var data = [];
    f18ref.on("value", snapshot => {
        snapshot.val().forEach(section => {
             getProfessors(db, section.LE[0].professor, section, data, courseName, callback);        
        });
    });
}

export function getAllInfoCalendar(schedule, db, callback) {
    let info = [];
    schedule.forEach(course => {
        let f18ref = db.database().ref("F18/" + course.courseID);
        f18ref.on("value", snapshot => {
            snapshot.val().forEach(section => {
                
                if(section.id == course.sectionID) {
                    console.log("SECTIONID", section.id);
                    console.log("COURSESECTIONDI", course.sectionID);
                    console.log("SECTION", section);
                    let sectionWithCourse = {
                        section: section,
                        courseID: course.courseID,
                    }
                    info.push(sectionWithCourse);
                }
                if(info.length == schedule.length) {
                    callback(info);
                }    
            });
        });

    })
   
}

//For getting a professor's information, called from getAllInfo
function getProfessors(db, professor, section, data, courseName, callback) {
    let professorPath = professor;

        //format professor paths for database reference
        professorPath = professorPath.split('\r\n');
        professorPath.forEach((path, index) => {
        while (professorPath[index].includes(".")) {
        professorPath[index] = professorPath[index].replace('.', '');
        }});
        professorPath.forEach((path, index) => {
            if(path[path.length-1] == " ") {
                professorPath[index] = path.slice(0,path.length-1);
            }
        });
  
        //what we want to return is both course information and professor information
        var amalgamation = {
            course: section,
            professor: [],
        }

        //in order to get professor information, we need to query the database again
        professorPath.forEach((path, index) => {
            let profref = db.database().ref("professor/" + path + "/" + courseName);
            profref.on("value",snapshot => {
                amalgamation.professor.push(snapshot.val());
                //if a section has multiple lectures for a single professor, don't push multiple copies of the section, just push 1
                if (index == professorPath.length-1) {
                    data.push(amalgamation);
                    callback(data);
                }
            })});
            
 }

// this just gets the info in the database under "course" for a specific course
 export function getGeneralInfo(courseName, db, callback) {
    let catalogref = db.database().ref("course/" + courseName);
    catalogref.on("value", snapshot => {
            callback(snapshot.val());
    });
}


//Populates the sidebar with courses
export function getCourseNames(db, callback) {
    let f18ref = db.database().ref("F18");
    var listOfCourses = [];
    f18ref.on("value", snapshot => {
        for (var property in snapshot.val()) {
            listOfCourses.push(property);
        }
        getCourseTitles(db, listOfCourses, callback);
    })
}

//Helper for getCourseNames, this is how we're populating the catalog that appears in the sidebar with titles and units
function getCourseTitles(db, courseNames, callback) {
    var courses = [];
    var count = 0;

    courseNames.forEach(courseName => {
        
        let catalogref = db.database().ref("course/"+ courseName);
        catalogref.on("value", snapshot2 => {
            
            count++;    
            
            if (snapshot2.val() != null) {
                var course = {
                    name: courseName,
                    description: snapshot2.val().title,
                    units: snapshot2.val().units
                }   
                courses.push(course);
            }

            if (count == courseNames.length-1) {callback(courses);}
        });
        
    });
}
    
            





