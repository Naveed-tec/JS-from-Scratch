/*let dolphinS1 = 96
let dolphinS2 = 108
let dolphinS3 = 89

let avgDolphinScore = (dolphinS1 + dolphinS2 + dolphinS3) / 3
console.log(avgDolphinScore)

let koalasS1 = 88
let koalasS2 = 91
let koalasS3 = 110

let avgKoalasScore = (koalasS1 + koalasS2 + koalasS3) / 3
console.log(avgKoalasScore)*/


const minScore = 100

let NdolphinS1 = 97
let NdolphinS2 = 112
let NdolphinS3 = 101

let NavgDolphinScore = (NdolphinS1 + NdolphinS2 + NdolphinS3) / 3
console.log(`Dolphin's Points = ${NavgDolphinScore}`)

let NkoalasS1 = 97
let NkoalasS2 = 112
let NkoalasS3 = 101

let NavgKoalasScore = (NkoalasS1 + NkoalasS2 + NkoalasS3) / 3
console.log(`Koalas's Points = ${NavgKoalasScore}`)


if(NavgDolphinScore > NavgKoalasScore){
    console.log(`Team Dolphin win with ${NavgDolphinScore} points` )
}
else if(NavgKoalasScore > NavgDolphinScore){
    console.log(`Team Koalas win with ${NavgKoalasScore} points` )
}
else{
    console.log(`Match drawn`)
}