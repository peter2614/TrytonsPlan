var util = require ("./Utility");
var getData = util.getData;
var data;


function callback (d){
    data = d;
}


getData("CSE 100", callback);