class user {
  //constructor
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  // se usa # para indicar que el metodo es privado
  
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get #uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const fer = new user('Fernando', 18);
console.log(fer.uAge);
console.log(fer.uAge = 20);
