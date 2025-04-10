let markMass = 78 
let markHeight = 1.69
let johnMass = 92
let johnHeight = 1.95

let markBMI = markMass  / (markHeight * markHeight) 
console.log(markBMI)

let johnBMI = johnMass  / (johnHeight * johnHeight) 
console.log(johnBMI)

if(markBMI > johnBMI){
    console.log(`Mark's BMI ${27.30} is higher than John's BMI (24.19)`)
}
else{
    console.log(`John's BMI ${24.19} is higher than Mark's BMI (27.30)`)
}