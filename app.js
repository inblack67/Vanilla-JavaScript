// Es6 Inheritance

class Person
{
  constructor(firstName, lastName)
  {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greetings()
  {
    return `hello ${this.firstName} hello how low ${this.lastName}`;
  }
}

class Customer extends Person
{
  constructor(firstName, lastName, phone, age)
  {
    super(firstName,lastName);
    this.phone = phone;
    this.age = age;
  }
}

const person = new Person('Kurt','Cobain');
const customer = new Customer('Nirvana','Smells','66-66-6-6', 31);

console.log(customer.greetings());
console.log(customer);
























// // ES6 CLASSES

// class Person
// {
//   constructor(firstName,lastName,dob)
//   {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greetings()
//   {
//     return `${this.firstName} ${this.lastName} sends her love`;
//   }

//   calculateAge()
//   {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   static sum(a,b)
//   {
//     return a+b;
//   }
// }

// const mary = new Person('Mary','Watson','1990-6-12');
// console.log(mary.greetings());
// console.log(mary.calculateAge('1990-6-12'));
// console.log(mary);

// console.log(Person.sum(4,5));











































// const personPrototypes = {

//   greetings: function(){return `${this.firstName} ${this.lastName} sends her love`},

//   married: function(newLastName){this.lastName = newLastName;}
// }

// const mary = Object.create(personPrototypes);

// mary.firstName = 'Mary';
// mary.lastName = 'Jane';

// console.log(mary.greetings());
// mary.married('Parker');
// console.log(mary.greetings());


// // Another syntax

// const peter = Object.create(personPrototypes,{
//   firstName: {value: 'Molly'} ,
//   lastName: {value: 'Parker'},
//   age : {value: 30}
// })

// console.log(peter.greetings());





































// // // Prototypical Inheritance

// // function Person(firstName, lastName)
// // {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// // }

// // Person.prototype.greetings = 
// // function()
// // {
// //   return `${this.firstName} ${this.lastName} sends his love`;
// // }


// // function Customer(firstName, lastName, phone, membership)
// // {
// //   Person.call(this,firstName,lastName);
// //   this.phone = phone;
// //   this.membership = membership;
// // }



// // Customer.prototype = Object.create(Person.prototype);

// // Customer.prototype.constructor = Customer;


// // const person1 = new Person('Jim', 'Moriarty');

// // const customer1 = new Customer('Sherlock','Holmes','221','Amateur');

// // customer1.greetings(); // has to make it inherit greetings from the person (object.create(person.prototype))

// // Customer.prototype.greetings = function(){
// //   return `Welcome the the world of ${this.firstName} ${this.lastName}`;
// // }

// // console.log(person1.greetings());
// // console.log(customer1.greetings());