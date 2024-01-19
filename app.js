function add(n1, n2, s1) {
    return n1 + n2 + s1;
}
function printResult(num) {
    console.log("Result: " + num);
    return function () { return add(num, num, "result"); };
}
console.log(printResult(10)());
