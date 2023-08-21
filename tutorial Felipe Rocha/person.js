class Person {
  constructor(name) {
    this.name = name;
  }
  sayMyname() {
    return `My name is ${this.name}!!!!`;
  }
}

module.exports = {
  Person,
};
