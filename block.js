

// Non Blocking

setTimeout(function() {
  console.log("This is Non Blocking example !");
  }, 100)

console.log("Hello World !");


// Blocking

var start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log("This is Blocking example !");

