import { performance } from 'perf_hooks';
import difference from '../../difference.js';

function randomNumberArray(numbers){
    let array = [];
    for(let n=0; n<numbers; n++){
        array.push(Math.random() * 100);
    }
    return array;
}

function median(sequence) {
    sequence.sort(); 
    return sequence[Math.ceil(sequence.length / 2)];
}

function returnMedianFunctionSpeed(arr1, arr2){
    let rawValues = [];
    let t0;
    let t1;
    for(let i=0; i<10; i++){
        t0 = performance.now();
        difference(arr1, arr2);
        t1 = performance.now();
        rawValues.push(t1 - t0);
    }
    return median(rawValues);
}

let testArray1verson1 = randomNumberArray(10);
let testArray1verson2 = randomNumberArray(10);
let testArray2verson1 = randomNumberArray(20);
let testArray2verson2 = randomNumberArray(20);
let testArray3verson1 = randomNumberArray(30);
let testArray3verson2 = randomNumberArray(30);
let testArray4verson1 = randomNumberArray(40);
let testArray4verson2 = randomNumberArray(40);
let testArray5verson1 = randomNumberArray(50);
let testArray5verson2 = randomNumberArray(50);
let testArray6verson1 = randomNumberArray(60);
let testArray6verson2 = randomNumberArray(60);
let testArray7verson1 = randomNumberArray(70);
let testArray7verson2 = randomNumberArray(70);

console.log(returnMedianFunctionSpeed(testArray1verson1, testArray1verson2));
console.log(returnMedianFunctionSpeed(testArray2verson1, testArray2verson2));
console.log(returnMedianFunctionSpeed(testArray3verson1, testArray3verson2));
console.log(returnMedianFunctionSpeed(testArray4verson1, testArray4verson2));
console.log(returnMedianFunctionSpeed(testArray5verson1, testArray5verson2));
console.log(returnMedianFunctionSpeed(testArray6verson1, testArray6verson2));
console.log(returnMedianFunctionSpeed(testArray7verson1, testArray7verson2));