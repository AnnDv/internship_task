// task 2 ######################################


let sum = 0;

function arraySum (numbers) {
    for(i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
        // sum / 2;
    }
    sum = sum / numbers.length;
    console.log(sum);
    console.log(Math.floor(sum));
}

arraySum([12, 11, 11, 18, 18, 7, 9])





