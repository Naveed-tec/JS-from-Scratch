function calcTip(value){
    if(value >= 50 && value <= 300){
        const tip = 0.15;
        return value * tip;
    }
    else{
        const tip = 0.20;
        return value * tip;
    }
}
console.log(calcTip(100));

const arrayBills = [125, 555, 44];
const arrayTips = [calcTip(arrayBills[0]),
                    calcTip(arrayBills[1]),
                    calcTip(arrayBills[arrayBills.length - 1])]

console.log(`Bills : ${arrayBills}`)
console.log(`Tips : ${arrayTips}`)

const arrayTotal = [arrayBills[0] + arrayTips[0],
                    arrayBills[1] + arrayTips[1],
                    arrayBills[2] + arrayTips[2]]
console.log(`Total are : ${arrayTotal}`)