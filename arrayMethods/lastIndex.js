// The lastIndexOf() method of Array instances returns the last index at which a given element can be found in
// the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// let say if you have two dogs in the array, it will return the index of the last dog

// example
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1

// Parameters
// (searchElement)
// Element to locate in the array.

// fromIndex Optional
// Zero-based index at which to start searching backwards, converted to an integer.

// Negative index counts back from the end of the array — if fromIndex
// < 0, fromIndex + array.length is used.
// If fromIndex < -array.length, the array is not searched and -1 is

// returned. You can think of it conceptually as starting at a nonexistent position before the beginning of
// the array and going backwards from there. There are no array elements on the way, so searchElement is never found.
// If fromIndex >= array.length or fromIndex is omitted, array.length -
// 1 is used, causing the entire array to be searched. You can think of it conceptually as starting at a non
// existent position beyond the end of the array and going backwards from there. It eventually reaches
// the real end position of the array, at which point it starts searching backwards through the actual array elements.
