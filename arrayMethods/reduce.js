//the reduce method returns a single value for an array based on
// the given formula

const array1 = [3455, 6, 5, 75, 345, 4, 2, 35];

const add = (num, nex) => num + nex;
const ans = array1.reduce(add);

console.log(ans);
