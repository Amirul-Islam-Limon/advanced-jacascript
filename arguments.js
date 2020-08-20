function add(num1, num2){
    const allNumber = [...arguments];
    let sum = 0;
    for(let i = 0; i < allNumber.length; i++){
        sum = sum + allNumber[i];
    }
    return sum
}

const result  = add(5, 5, 5, 5);
console.log(result);