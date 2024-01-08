// The Array.from() static method creates a new,
// shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

//the from method can also be used to create a new array from the old one plus the itration func
