const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(value){
    return value >= 50 && value <= 300 ? value * 0.15 : value * 0.20;
}

//const tip = calcTip(bills[0])
//console.log(tip)

for(let i = 0; i <= bills.length - 1; i++){
    tips.push(calcTip(bills[i]))
    totals.push(tips[i] + bills[i])
}
//console.log(tips)
//console.log(totals)

// Bonus

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
function calcAvg(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        //console.log(arr[i])
        sum = sum + arr[i];
    }
    console.log(sum)
    const avg = sum / arr.length
    console.log(avg)
}
calcAvg(arr)