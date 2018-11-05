var person = {
  firstName: "given",
  lastName: "family",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.getFullName());
var john = {
  firstName: "john"
};
john.__proto__ = person;
console.log(john.getFullName());
