function makeCounter() {
	var count = 0;

	function counter() {
		count++;
		return count;
	}
	return counter;

}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

//Other method to increment 1.

function makeCounter2() {
  var count = 0;

  return {
    increment: function () {
      count++;
      return count;
    }
  };
}

var counter = makeCounter2();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
