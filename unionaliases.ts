// // enum Role {
// //   ADMIN,
// //   READ_ONLY,
// //   AUTHOR,
// // }

// // const person = {
// //   name: "Venkat",
// //   age: 35,
// //   address: {
// //     firstLine: "Chennai",
// //     secondLine: "Chennai",
// //   },
// //   otherNames: ["prakash", "visweswariah's"],
// //   role: 0,
// // };

// // let favouriteActivities: string[] | number[];
// // favouriteActivities = [10];

// // console.log(person.address.secondLine);

// // for (const name of person.otherNames) {
// //   console.log(name.toUpperCase());
// // }

// // if (person.role === Role.ADMIN) {
// //   console.log("is admin");
// // }
// function add1(num1: number, num2: number) {
//   console.log(typeof num1);
//   return num1 + num2;
// }

// // const num1 = 5;
// const num2 = 3;

// const result = add(num1, num2);

// console.log(result);

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
