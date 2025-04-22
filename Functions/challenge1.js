const calcAvg = (a , b , c) => {
    return (a + b + c)/3;
}

//data 1
const scoreDolphins = (calcAvg(44 , 23 , 71))
const scoreKoalas = (calcAvg(65 , 54 , 49))
console.log(scoreDolphins, scoreKoalas)

//data2
const scoreDolphins2 = (calcAvg(85 , 54 , 41))
const scoreKoalas2 = (calcAvg(23 , 34 , 27))
console.log(scoreDolphins2, scoreKoalas2)

function checkWinner(avgDolphins , avgKoalas){

    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win with ${avgDolphins} points`)
    }
    else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win with ${avgKoalas} points`)
    }
    else{
        console.log(`No one wins 🏆`)
    }
}
checkWinner(scoreDolphins , scoreKoalas);
checkWinner(scoreDolphins2 , scoreKoalas2);