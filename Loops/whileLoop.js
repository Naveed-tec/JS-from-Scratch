//let i = 1;
//while(i <= 5){
//    console.log(`Push-up : ${i}`)
//    i++;
//}

let dice = Math.trunc(Math.random() * 6 ) + 1;
//console.log(dice)

while(dice !== 6){
    console.log(`You have rolled a ${dice}`)
    dice++;
}