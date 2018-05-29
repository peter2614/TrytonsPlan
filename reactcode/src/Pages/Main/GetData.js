export function getData(courseName, db, callback) {
    let f18ref = db.database().ref("F18/" + courseName);
    let catalogref = db.database().ref("course/" + courseName);

    var data = [];
    f18ref.on("value", snapshot => {
        //get professor information
        //console.log(snapshot.val());
       
        snapshot.val().forEach(section => {
            section.LE.forEach(LE => {
                
                    getProfessors(db, LE.professor, section, data, courseName, callback);
                    //console.log(data);
                }); 
        });
    });
    
    
}

function getProfessors(db, professor, section, data, courseName, callback) {
    let professorPath = professor;
        //format professor paths
        professorPath = professorPath.split('\r\n');
        professorPath.forEach((path, index) => {professorPath[index] = path.replace('.', '')});
        professorPath.forEach((path, index) => {
            if(path[path.length-1] == " ") {
                professorPath[index] = path.slice(0,path.length-1);
            }
        });
  
                
        var amalgamation = {
            course: section,
            professor: [],
        }
        professorPath.forEach(path => {
            let profref = db.database().ref("professor/" + path + "/" + courseName);
            profref.on("value",snapshot => {
                
                amalgamation.professor.push(snapshot.val());
                data.push(amalgamation);
                callback(data);
                //console.log(data);
            })});
 }

 export function getGeneralInfo(courseName, db, callback) {
    
    let catalogref = db.database().ref("course/" + courseName);
    catalogref.on("value", snapshot => {
            callback(snapshot.val());
    });
}


//FOR SIDEBAR
export function getNameAndTitle(db, callback) {
    let f18ref = db.database().ref("F18");
    
    var newCatalog = null;
    f18ref.on("value", snapshot => {
        for (var property in snapshot.val()) {
            getCourseName(db, property, callback);       
        }
    })
}

export function getCourseName(db, property, callback) {
    let catalogref = db.database().ref("course/"+property);
            catalogref.on("value", snapshot2 => {
                
                if (snapshot2.val() != null) {
                var course = {
                    name: property,
                    description: snapshot2.val().title,
                    units: snapshot2.val().units
                }   
                callback(course);
                }
            })
}




