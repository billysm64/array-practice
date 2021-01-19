// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function repeatTimes(string, num) {
  list = [];
  for (let i = 0; i < num; i++) {
    list.push(string);
  };
  return list;
};
console.log(repeatTimes("Wolf", 6));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArray(oldlist) {
  let newlist = [];
  for (let i = 0; i < oldlist.length; i++) {
    newlist.unshift(oldlist[i]);
  };
  return newlist;
};
const oldlist = ["a", "b", "c"];
const newlist = reverseArray(oldlist);
console.log(`Oldlist is ${oldlist}.`);
console.log(`Newlist is ${newlist}.`);

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

const might_have_falsy = ["Colonel", "", 0, "Bleep", false, 2];

// function removeFalsy(list) {
//   console.log(`${list.indexOf(0)} is REAL`)
//   list_to_delete = [] //the list_to_delete method makes a list of falsy items to delete. This is a workaround to the issue of only having one for loop which splices, because that wasn't working.
//   for (let i of list) {
//     // console.log(`${list.indexOf(0)} ${i}`)
//     // console.log(i)
//     console.log(i)
//     if (i == false) {
//       // // console.log(i)
//       list_to_delete.push(i);
//       // console.log(i)
//       // list.splice(list.indexOf(i), 1);
//     };
//   };
//   console.log(list);
//   for (let i of list_to_delete) {
//     console.log(`${i} is at index ${list.indexOf(i)}`);
//     list.splice(list_to_delete.indexOf(-i), 1);
//     console.log(list);
//   };
//   console.log(list);
// };
function removeFalsy(array) {
  const newArray = [];
  for (let i of array) {
    // console.log('i', i);
    if (i) {
      console.log(i);
      newArray.push(i);
    };
  };
  console.log(newArray);
};
removeFalsy(might_have_falsy); //

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of properties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

const arrayWithNested = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];

function toObject(array) {
  let newObject = {};
  for (let i in array) {
    console.log(array[i][1]);
    newObject[array[i][0]] = array[i][1];
  };
  return newObject
};
console.log(toObject(arrayWithNested));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

const arrayWithDuplicates = [1, 2, 3, 4, 5, 4, 3]

function removeDuplicates(array) {
  let newArray = [];
  for (let i in array) {
    if (!(array[i] in newArray)) {
      newArray.push(array[i]);
    };
  };
  console.log(newArray)
}
removeDuplicates(arrayWithDuplicates)

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

const array_compare_one = [1,2, "letter", 3,4]
const array_compare_two = [1,2,3,4]
function isArraySame(array, array_two) {
  for (let i in array) {
    if (array[i] !== array_two[i]) {
      return false;
      break;
    };
  };
  for (let i in array_two) { //checks both lists with each other
    if (array_two[i] !== array[i]) {
      return false;
      break;
    };
  };
  return true;
}
console.log(isArraySame(array_compare_one, array_compare_two));

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
