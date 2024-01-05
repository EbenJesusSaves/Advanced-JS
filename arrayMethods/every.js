//the every method checks if all elements have passed
// a required test

//test function
const isSmall = (value) => value < 100;

const array1 = [34, 6, 5, 6, 5, 6, 57, 3, 3];

const checks = array1.every(isSmall);
// this returns true since every element is less than 100
