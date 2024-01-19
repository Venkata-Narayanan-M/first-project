function add(n1: number, n2: number, s1: string) {
  return n1 + n2 + s1;
}

function printResult(num: number) {
  console.log("Result: " + num);
  return () => add(num, num, "result");
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number, c: string) => string;

console.log(printResult(10)());
