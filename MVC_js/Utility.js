/* Functions to retrieve data from database */
var firebase = require("firebase");

var TO = "/";
var data;
var QUARTER = "F18"

// db setup
var config = {
    apiKey: "AIzaSyDHND3EVIe-S8r0k_3DLf_GClaM2qazGMI",
    authDomain: "trytonsplan.firebaseapp.com",
    databaseURL: "https://trytonsplan.firebaseio.com",
    projectId: "trytonsplan",
    storageBucket: "trytonsplan.appspot.com",
    messagingSenderId: "242589223564"
};

firebase.initializeApp(config);

function getData (CourseID, cb) {
    let reference = QUARTER + TO + CourseID;  //Get the reference of the data
    firebaseRef = firebase.database().ref(reference);
    firebaseRef.on("value", function(snapshot) {
        data = snapshot.val();
        end();
        cb (data);
    });
}


function retrieve(end) {
    firebaseRef.on("value", function(snapshot) {
        data = snapshot.val();
        end();

    });
}


function end() {
    if (data){
    // when we have the correct db reference

        firebaseRef.off();
        return data;
    } else {
        console.log("Hehe");
    }
}
/* End of database functions */



/* Rank functions*/
/* All the ranking functions to rank a schedule list based on different criterion.*/

// rank by professor score
var rankByProfScore = function(scheduleList) {

    var len = scheduleList.length;
    return quickSortProfScore(scheduleList,0,len-1);
}

// rank by distance
var rankByDistance = function(scheduleList) {

    var len = scheduleList.length;
    return quickSortDistance(scheduleList,0,len-1);
}

// rank by time commitment
var rankByTimeCommitment = function(scheduleList) {

    var len = scheduleList.length;
    return quickSortTimeCommitment(scheduleList,0,len-1);
}

// rank by time in school
var rankByTimeInSchool = function(scheduleList) {

    var len = scheduleList.length;
    return quickSortTimeInSchool(scheduleList,0,len-1);
}

// quick sort function for professor score
function quickSortProfScore(list, left, right) {

    var pivot, partitionIndex;

    if(left < right) {
        pivot = right;
        partitionIndex = partitionProfScore(list, pivot, left, right);

        quickSortProfScore(list, left, partitionIndex - 1);
        quickSortProfScore(list, partitionIndex + 1, right);
    }

    return list;
}

// helper function for quick sort for professor score
function partitionProfScore(list, pivot, left, right) {
    var pivotValue = list[pivot].getProfScore,
        partitionIndex = left;

    for(var i = left; i < right; i++) {
        if(list[i].getProfScore > pivotValue) {
            swap(list, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(list,right,partitionIndex);
    return partitionIndex;
}

// quick sort function for distance
function quickSortDistance(list, left, right) {

    var pivot, partitionIndex;

    if(left < right) {
        pivot = right;
        partitionIndex = partitionDistance(list, pivot, left, right);

        quickSortDistance(list, left, partitionIndex - 1);
        quickSortDistance(list, partitionIndex + 1, right);
    }

    return list;
}

// helper function for quick sort for distance
function partitionDistance(list, pivot, left, right) {
    var pivotValue = list[pivot].getDistance,
        partitionIndex = left;

    for(var i = left; i < right; i++) {
        if(list[i].getDistance > pivotValue) {
            swap(list, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(list,right,partitionIndex);
    return partitionIndex;
}
// quick sort function for time commitment
function quickSortTimeCommitment(list, left, right) {

    var pivot, partitionIndex;

    if(left < right) {
        pivot = right;
        partitionIndex = partitionTimeCommitment(list, pivot, left, right);

        quickSortTimeCommitment(list, left, partitionIndex - 1);
        quickSortTimeCommitment(list, partitionIndex + 1, right);
    }

    return list;
}

// helper function for quick sort for time commitment
function partitionTimeCommitment(list, pivot, left, right) {
    var pivotValue = list[pivot].getTimeCommitment,
        partitionIndex = left;

    for(var i = left; i < right; i++) {
        if(list[i].getTimeCommitment > pivotValue) {
            swap(list, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(list,right,partitionIndex);
    return partitionIndex;
}

// quick sort function for time in school
function quickSortTimeInSchool(list, left, right) {

    var pivot, partitionIndex;

    if(left < right) {
        pivot = right;
        partitionIndex = partitionTimeInSchool(list, pivot, left, right);

        quickSortTimeInSchool(list, left, partitionIndex - 1);
        quickSortTimeInSchool(list, partitionIndex + 1, right);
    }

    return list;
}

// helper function for quick sort for time in school
function partitionTimeInSchool(list, pivot, left, right) {
    var pivotValue = list[pivot].getTimeInSchool,
        partitionIndex = left;

    for(var i = left; i < right; i++) {
        if(list[i].getTimeInSchool > pivotValue) {
            swap(list, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(list,right,partitionIndex);
    return partitionIndex;
}


// helper function for swap
function swap(list, i, j) {
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

module.exports = {
    getData: getData,
    rankByProfScore: rankByProfScore,
    rankByDistance: rankByDistance,
    rankByTimeCommitment: rankByTimeCommitment,
    rankByTimeInSchool: rankByTimeInSchool
};

//module.exports = getData;