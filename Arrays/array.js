const friends = ['Naveed', 'Haseeb', 'Hassan'];
console.log(friends)

friends[2] = 'Basit';
console.log(friends)

//const year = new Array[1990, 2000, 2010, 2020]
//console.log(typeof year)

function calcAge (birthyear){
    return 2040 - birthyear;
}
const years = [1997, 1999, 2001, 2003]
//console.log(calcAge(years[0]))
const ages = [calcAge(years[0]),
              calcAge(years[1]),
              calcAge(years[2]),
              calcAge(years[years.length - 1])]
            
//console.log(ages)

//adding elements
// In last of array
friends.push('Umar');
console.log(friends)

// In first of array
friends.unshift('Usama')
console.log(friends)

//removing elements
friends.pop()
console.log(friends)
friends.shift()
console.log(friends)