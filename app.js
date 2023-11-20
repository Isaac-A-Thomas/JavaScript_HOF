console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function plus(num) {
    return function (plusNumber) {
        return num + plusNumber;
    }
}

const plus15 = plus(15);

console.log(plus15(15));
console.log(plus15(10));



//exercise 2

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((user) => console.log(user.name));

  // Exercise 3

let newUsers = users.map((user) => {
    return {name: user.name, score: user.score };
});

console.log(newUsers);

// Exercise 4

let activeUsers = users.filter((user) => user.isActive)
    
console.log(activeUsers);

// exercise 5

users.sort((a, b) =>{
    //sorts wants a positive, negative, or zero to sort.
    return b.score - a.score;
    //lower score in the first section, higher score in the 2nd section for descending. B is lower, therefore, it first in the subtraction problem.

})

console.log(users);

//Exercise 6
// (acc)umulater, (curr)entValue, index, array
const result = users.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator = currentValue.score;

}, 0);

console.log(result);
console.log(result/users.length);