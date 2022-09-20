const Person  = {
    printName(subject) {
        console.log(this.name + ' is now teaching ' + subject)
      },
    }
// Person.prototype.initialize = function (name,age) {
//   this.name = name
//   this.age = age
// }

const Teacher =  {
   
}
// Teacher.setPrototypeOf() = new Person()
Object.setPrototypeOf(Teacher,Person);
// Teacher.prototype.teach = function (subject) {
//   console.log(this.name + ' is now teaching ' + subject)
// }
console.log(Teacher.printName('dfdf'));
// const him =  Teacher();

// him.initialize('Adam', 45)
// him.teach('inheritance') // Adam is now teaching inheritance