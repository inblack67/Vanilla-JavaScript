const Person = {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  const person1 = Object.create(Person, {
    firstName: { value: 'Aman' },
    lastName: { value: 'Bhardwaj' },
  });
  
  console.log(person1.fullName());
  
  // inheritance
  const Professional = Object.create(Person, {
      occupation: { value: function(){
          return `${this.firstName} ${this.lastName} is a JavaScript Developer`
      } }
  });
  const person2 = Object.create(Professional, {
      firstName: { value: 'Aman' },
      lastName: { value: 'Bhardwaj' },
  });
  
  console.log(person2.occupation());
  
  