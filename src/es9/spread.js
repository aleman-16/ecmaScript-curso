const user = { username: 'jaleman', age: 31, country: 'MX'};
const { username, ...values } = user;
console.log(username);
console.log(values);