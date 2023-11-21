// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// objects destructuring

let user = { username: 'jaleman', age: 31};
let {username, age} = user;
console.log(username, user.age);

//spread  operator

let person = { name: 'Manuel', age: 31};
let person2 = { name2: 'Manuel2', age2: 3};
let country = 'MX';

let data = { id: 1, ...person, country, ...person2 };
console.log(data);

//rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 5, 2, 3);
