export function getData(courseName, db, callback) {
    let f18ref = db.database().ref("F18/" + courseName);
    let catalogref = db.database().ref("course/" + courseName);

    var data = [];
    f18ref.on("value", snapshot => {
        //get professor information
        //console.log(snapshot.val());
        
        snapshot.val().forEach(section => {
            section.LE.forEach(LE => {
                
                let professorPath = LE.professor;
                if (professorPath[professorPath.length-1] === ".") {
                    professorPath = LE.professor.slice(0, LE.professor.length-1);
                }
                let profref = db.database().ref("professor/" + professorPath + "/" + courseName);
                profref.on("value",snapshot2 => {
                    var amalgamation = {
                        course: section,
                        professor: snapshot2.val()
                    }
                    data.push(amalgamation);
                    callback(data);
                    //console.log(data);
                }); 
            });  
        });
        
        
        
    });
    catalogref.on("value", snapshot => {
 
    });
    
}

