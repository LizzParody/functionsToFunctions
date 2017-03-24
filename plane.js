var passengers = [ { name: "Liz Parody", paid: true },
                   { name: "Matt Powers", paid: true },
                   { name: "Ilana Parody", paid: false },
                   { name: "Margarita Alvarez", paid: true },
                   { name: "Dr. Evel", paid: true }
                 ];

function processPassengers(passengers, test) {
  for (var i = 0; i < passengers.length; i++){
    if(test(passengers[i])){
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return(passenger.name === "Dr. Evel");
}

function checkNoPaid(passenger) {
  return(!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

var allPaid = processPassengers(passengers, checkNoPaid);
if(!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}

function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid) {
    message = message + " has paid";
  } else {
    message = message + " has not paid";
  }
  console.log(message);
  return false;
}

processPassengers(passengers, printPassenger);
