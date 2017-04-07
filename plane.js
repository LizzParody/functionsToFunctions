var passengers = [ { name: "Liz Parody", paid: true, ticket: "firstclass" },
                   { name: "Matt Powers", paid: true, ticket: "coach" },
                   { name: "Ilana Parody", paid: false, ticket: "premium"},
                   { name: "Margarita Alvarez", paid: true, ticket: "firstclass" },
                   { name: "Dr. Evel", paid: true, ticket: "coach" }
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

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getDinnerOrderFunction = createDinnerOrder(passenger);

  getDrinkOrderFunction(passenger);

  getDinnerOrderFunction();

  getDrinkOrderFunction(passenger);
  getDrinkOrderFunction(passenger);

  getDrinkOrderFunction(passenger);
}

function createDrinkOrder(passenger){
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like a cocktail or wine?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      alert("Would you like wine, cola or water?");
    };
  } else {
    orderFunction = function() {
      alert("Your choice is cola or water.");
    };
  }
  return orderFunction;
}

function createDinnerOrder(passenger) {
  var oderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like chicken or pasta?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      alert("Would you like a snack box or cheese plate?");
    };
  } else {
    orderFunction = function() {
      alert("Would you like peanuts or pretzels?")
    };
  }
  return orderFunction;
}

function servePassengers(passengers) {
  for(var i = 0; i < passengers.length; i++){
    serveCustomer(passengers[i]);
  }
}

servePassengers(passengers);
