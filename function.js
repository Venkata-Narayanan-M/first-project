"use strict";
function add1(n1, n2, s1) {
    return n1 + n2 + s1;
}
function printResult(num) {
    console.log("Result: " + num);
    return function () { return add1(num, num, "result"); };
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
console.log(printResult(10)());
