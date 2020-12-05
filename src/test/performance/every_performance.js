import { performance } from 'perf_hooks';
import every from '../../every.js';

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

let testArrays = [];
testArrays.push(randomNumberArray(100));
testArrays.push(randomNumberArray(200));
testArrays.push(randomNumberArray(300));
testArrays.push(randomNumberArray(400));
testArrays.push(randomNumberArray(500));
testArrays.push(randomNumberArray(600));
testArrays.push(randomNumberArray(700));
testArrays.push(randomNumberArray(800));
testArrays.push(randomNumberArray(900));
testArrays.push(randomNumberArray(1000));

let t0;
let t1;
let rawNumbers = [];

for(let testingArray of testArrays){
    for(let i=0; i<10; i++){
        t0 = performance.now();
        every(testingArray, Number);
        t1 = performance.now();
        rawNumbers.push(t1-t0);
    }
    console.log(median(rawNumbers));
}
