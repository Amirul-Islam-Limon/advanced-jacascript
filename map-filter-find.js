const age = [12, 13, 14, 15, 17, 12, 15];

//=== uses of map ===//
const ageLater = age.map(x => x + 2);
console.log(ageLater); // map return you what ever you want

//=== uses of filter ===///
const ageEven = age.filter(x => x % 2 == 0)
console.log(ageEven); // filter return you an array and all mass value

//=== uses of find ===//

const agebigger = age.find(x => x > 12)
console.log(agebigger); // find return you without array and only one value that mas

