// fizzbuzz js for loop
for (var i = 1; i <= 100; i++) {
  if (i % 15 === 0)
    console.log("fizzbuzz");
  else if (i % 3 === 0)
    console.log("fizz");
  else if (i % 5 === 0)
    console.log("buzz");
  else
    console.log(i);
}

// fizzbuzz js arraymap
console.log(
  Array.apply(0, Array(100)).map(function(x, y) {
    var number = y + 1;
    var fizz = ((number % 3) == 0);
    var buzz = ((number % 5) == 0);
    var fizzbuzz = (fizz && buzz);

    if (fizzbuzz) return 'fizzbuzz';
    if (fizz) return 'fizz';
    if (buzz) return 'buzz';
    return (number);

  }).join("\n"));
