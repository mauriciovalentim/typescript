// 8 - tuplas

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [true, 1, false, "b", [3, 4, 5]];

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Matheus", 30];

console.log(anotherUser[0]);

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([2, 5]);
