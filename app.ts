let userInput: unknown;

userInput = 5;
userInput = "Max";

let userName: string;

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

const result1 = generateError("An error occurred!", 500);
console.log(result1);

const button = document.querySelector("button");

const map = new Map();
