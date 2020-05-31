
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}

function Professional(occupation, firstName, lastName){
    Person.call(this, firstName, lastName);
    this.occupation = occupation;
}

// cant be after bio line
Professional.prototype = Object.create(Person.prototype);   // inhertence added

Professional.prototype.bio = function(){
    return `${this.firstName} ${this.lastName} is a ${this.occupation}`;
}


const prof = new Professional('JavaScript Developer', 'Aman', 'Bhardwaj');
console.log(prof.bio());
console.log(prof.fullName());