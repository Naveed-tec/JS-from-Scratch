const markMiller = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = `${this.mass / (this.height * this.height)}`
        return this.BMI;
    }
}
markMiller.calcBMI()
console.log(`Mark's BMI is ${markMiller.BMI}`)


const johnSmith = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = `${this.mass / (this.height * this.height)}`
        return this.BMI;
    }
}
johnSmith.calcBMI()
console.log(`John's BMI is ${johnSmith.BMI}`)

if(markMiller.BMI > johnSmith.BMI){
    console.log(`Mark's BMI ${markMiller.BMI} is greater than John's BMI ${johnSmith.BMI}`)
}
else{
    console.log(`John's BMI ${johnSmith.BMI} is greater than Mark's BMI ${markMiller.BMI}`)
}