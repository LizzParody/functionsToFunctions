//Without closure and using global variable

/*
var count = 0;

window.onload = function () {
  var button = document.getElementById("clickme");
  button.onclick = handleClick;
};

function handleClick() {
  var message = "You clicked me ";
  var div = document.getElementById("message");
  count++;
  div.innerHTML = message + count + " times!";
}
*/

//Using closure without global variable

window.onload = function() {
  var count = 0;
  var message = "You clicked me ";
  var div = document.getElementById("message");

  var button = document.getElementById("clickme");
  button.onclick = function() {
    count++;
    div.innerHTML = message + count + " times!";
  };
};
