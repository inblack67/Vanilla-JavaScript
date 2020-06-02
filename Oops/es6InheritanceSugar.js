class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Professional extends Person{
    constructor(firstName, lastName, occupation, position){
        super(firstName, lastName);
        this.occupation = occupation;
        this.position = position
    }
    bio(){
        return `${this.firstName} ${this.lastName} is a ${this.occupation} with ${this.position} role`
    }
    static role(since){
        return  `${since}`;
    }
}

const person1 = new Person('Aman', 'Bhardwaj');
console.log(person1.fullName());

const prof = new Professional('Aman', 'Bhardwaj', 'JavaScript Developer', 'Full-Stack');
console.log(prof.bio());
console.log(Professional.role('1 Year'));