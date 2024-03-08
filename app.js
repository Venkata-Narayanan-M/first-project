"use strict";
var userInput;
userInput = 5;
userInput = "Max";
var userName;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result1 = generateError("An error occurred!", 500);
console.log(result1);
var button = document.querySelector("button");
var map = new Map();
