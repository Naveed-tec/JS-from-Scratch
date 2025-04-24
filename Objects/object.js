const newObject = {
    name: 'Naveed',
    surname: 'Mughal',
    age: 2003,
    gender: 'Male',
    friends: ['Haseeb', 'Hassan', 'Usama'],
    hasDriversLicense: true,

    //calcAge: function(){
    //    return 2037 - this.age;
    //}

    calcAge: function(){
        this.newAge = 2037 - this.age
        return this.newAge;
    },

    summary: function(){
        return `${this.name} is ${this.newAge} years old, and he has ${this.hasDriversLicense ? 'a' : 'no'} dirvers license`
    }
}
//console.log(newObject.age)
//console.log(newObject['surname'])

//const interestedIn = prompt('What do you want to know about Naveed? name, surname, age, gender and friends')
//console.log(interestedIn)

//challenge
// Naveed has 3 friends, and his best friend is haseeb

//console.log(`${newObject.name} has ${newObject.friends.length} friends and his best friend is ${newObject.friends[0]}`)

console.log(newObject.calcAge())
console.log(newObject.newAge)
//console.log(newObject.summary())
