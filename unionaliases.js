"use strict";
// // enum Role {
// //   ADMIN,
// //   READ_ONLY,
// //   AUTHOR,
// // }
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineAges = combine(30, 26, "as-number");
console.log(combineAges);
var combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
var combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
