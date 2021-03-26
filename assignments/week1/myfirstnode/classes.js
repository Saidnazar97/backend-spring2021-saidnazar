let handmadeObject = {
  firstName: 'Saidnazar',
  lastName: 'Rakhimboev',
  position: 'Student',
  location: 'San Francisco',
  active: true,
  doWork: function () {
    console.log(this.firstName + ' is now working!');
  },
};

class Employee {
  constructor() {
    this.firstName = null;
    this.lastName = null;
    this.position = null;
    this.location = null;
    this.active = null;
  }
  doWork(hours) {
    console.log(this.firstName + ' works for ' + hours + 'hours. ');
  }
}

let myFirstFactoryObject = new Employee();
let secondEmployee = new Employee();

secondEmployee.lastName = 'Dadajohn';
secondEmployee.firstName = 'Dada';
secondEmployee.nonExistingProperty = 10;

myFirstFactoryObject.doWork(23);
secondEmployee.doWork(1);

handmadeObject.doWork();

let thirdEmployee = new Employee();
thirdEmployee.doWork(4);
