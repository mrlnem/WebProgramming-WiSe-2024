function(fibo) {

    while(fibo.length < 10){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}

console.log(fibo); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
}