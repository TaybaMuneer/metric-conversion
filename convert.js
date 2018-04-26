function fToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var meter = measure*0.3048;
  var message = measure + "feet converts to" + meter + "meter";
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}
