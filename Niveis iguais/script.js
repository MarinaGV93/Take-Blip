'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'updateTimes' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY signalOne
 *  2. INTEGER_ARRAY signalTwo
 */

function updateTimes(signalOne, signalTwo) {
    count = 0;
    maxequal = 0;
    
    if(signalOneItem === signalTwoItem){
        maxequal++;
    
        if(signalOneItem > signalTwoCount){
            count++;
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const signalOneCount = parseInt(readLine().trim(), 10);

    let signalOne = [];

    for (let i = 0; i < signalOneCount; i++) {
        const signalOneItem = parseInt(readLine().trim(), 10);
        signalOne.push(signalOneItem);
    }

    const signalTwoCount = parseInt(readLine().trim(), 10);

    let signalTwo = [];

    for (let i = 0; i < signalTwoCount; i++) {
        const signalTwoItem = parseInt(readLine().trim(), 10);
        signalTwo.push(signalTwoItem);
    }