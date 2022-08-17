function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    console.log("addAndHandle",cb(result));
}

console.log(printResult(add(5, 12)));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;

addAndHandle(8, 8, (result) => {
    console.log(result);
    return result;
});