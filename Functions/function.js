function fruitProcessor(apples, oranges){
    //console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice; 
}

// console.log(fruitProcessor(5 , 4));


// ------------------------------Expression vs Declaration-----------------------------------

// Function Declaration
function calcAge1(age1){
    return 2037 - age1;
}
console.log(calcAge1(2003));

// Function Expression 
const calcAge2 = function(age3){
    return 2037 - age3;
}
const age2 = calcAge2(2004)
console.log(age2);


//------------------------  Arrow Function      () => {}   --------------------------------

const calcAge4 = birthyear => 2037 - birthyear
console.log(calcAge4(1990))

const YoR = (birthyear , firstname) => {
    const age5 = 2040 - birthyear;
    const retirement = 70 - age5;
    return `${firstname} retires in ${retirement} years`;
}
console.log(YoR(1980 , 'Naveed'))

//-----------------------Function calling other function--------------------------

function fruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apple , orange){
    const applePieces = fruitPieces(apple)
    const orangePieces = fruitPieces(orange)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
}
console.log(fruitProcessor(4 , 3))