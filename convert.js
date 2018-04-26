function fToM(){

  var measure = parseInt(document.getElementById("value1").value);
  var meters = measure*0.3048;

  var message = measure + "feet converts to" + meters + "meters";
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

function iToC(){
var measure = parseInt(document.getElementById("value1").value);
 var centimetres = measure*2.54;
  var message = measure + "inches converts to" + centimetres + "centimetres";
console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
} 

function yToM(){
	var measure = parseInt(document.getElementById("value1").value);
	 var meters = measure*0.9144;
	var message = measure + "yards converts to" + meters + "meters";
	console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}

function mToK(){
	var measure = parseInt(document.getElementById("value1").value);
	var kilometres = measure*1.60934;
	var message = measure + "miles converts to" + kilometres + "kilometres";
	console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}