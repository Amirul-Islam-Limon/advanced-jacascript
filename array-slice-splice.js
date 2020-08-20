const age =[11, 22, 33, 44, 55, 66, 77, 88];

const slice = age.slice(2, 4); // slice only copy  from index to index
console.log(slice);

const splice = age.splice(2, 3, 00, 000, 0000);  // splice will delete from index to number
console.log(splice);                             // you can also add number there  
console.log(age);

const join = age.join();
console.log(join);