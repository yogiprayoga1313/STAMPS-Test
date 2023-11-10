const result = [];

for (let num = 100; num >= 1; num--) {
  if (num % 3 === 0 && num % 5 === 0) {
    result.push("fooBar");
  } else if (num % 3 === 0) {
    result.push("foo");
  } else if (num % 5 === 0) {
    result.push("bar");
  } else {
    result.push(num.toString());
  }
}

console.log(result.join(", "));