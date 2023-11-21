// declarando
class User {

};

// instancia de una clase
//const newUser = new User();

class user {
  //metodos
  greeting() {
    return 'Hello';
  }
};

const manu = new user();
console.log(manu.greeting());
const gndx = new user();
console.log(gndx.greeting());

//constructor
class user {
  //Constructor
  constructor() {
    console.log('Nuevo usuario')
  };
  greeting() {
    return 'Hello';
  };
};

const manu2 = new user();

// this

class user {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setters getters

class user {
  //constructor
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const fer = new user('Fernando', 18);
console.log(fer.uAge);
console.log(fer.uAge = 20);

