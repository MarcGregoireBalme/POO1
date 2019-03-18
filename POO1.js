class Person {
  constructor (name, age) {

    this.name = name
    this.age = age
  }
  tellMyName() {
    return `I am ${this.name}`
  }
  tellMyAge() {
    return `I am ${this.age}`
  }
}

const p1 = new Person("John", 40)
const p2 = new Person("Mary", 35)


console.log(p1.tellMyName())
console.log(p2.tellMyAge())
