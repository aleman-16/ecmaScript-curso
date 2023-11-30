const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('Resolve'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve2'));
//se va a caputarar la primera que se resuleva de forma satisfactoria
Promise.any([promise1,promise2,promise3])
  .then(response => console.log(response));