// usage: node Course.js [file] [major]
var firebase = require("firebase");

var config = {
	apiKey: "AIzaSyDHND3EVIe-S8r0k_3DLf_GClaM2qazGMI",
	authDomain: "trytonsplan.firebaseapp.com",
	databaseURL: "https://trytonsplan.firebaseio.com",
	projectId: "trytonsplan",
	storageBucket: "trytonsplan.appspot.com",
	messagingSenderId: "242589223564"
};

CSE = [];
index = 0;

firebase.initializeApp(config);
firebaseRef = firebase.database().ref("course/");


var fs = require('fs');
var csv = require('fast-csv');

class Course {
	constructor(courseID, title, units, prerequisites, corequisites,
		description) {
			this.courseID = courseID;
			this.title = title;
			this.units = units;
			this.prerequisites = prerequisites;
			this.corequisites = corequisites;
			this.description = description;
		}
}

fs.createReadStream(process.argv[2])
	.pipe(csv())
	.on('data', function(data) {
		courseID = data[0];
		title = data[1];
		units = data[2];
		prereq = data[3];
		corequisites = [[data[4]]];
		description = data[5];

		prerequisites = [];
		prerequisites[0] = [];
		counter = 0;
		i = 0;
		j = 0;
		
		while(true) {
			// break if end is reached
			if(prereq[counter] == null) {
				break;
			}

			// add an OR if it is '/'
			if(prereq[counter] == '/') {
				j++;
				counter++;
				continue;
			}

			// add an AND if it is ','
			if(prereq[counter] == ',') {
				i++;
				counter += 2;
				j = 0;
				prerequisites[i] = [];
				continue;
			}

			if(prerequisites[i][j] == null) {
				prerequisites[i][j] = '';
			}


			// add to the current word
			prerequisites[i][j] += prereq[counter];

			// go to the next character
			counter++;
		}

		CSE.push(new Course(courseID, title, units, prerequisites, corequisites,
			description));
	})
	.on('end', function(data) {

		firebaseRef.set({CSE});
		firebaseRef.off();
		console.log("this is the end");
	});
