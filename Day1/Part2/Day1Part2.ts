import fs from "fs"
import { SourceTextModule } from "vm"

const list = fs.readFileSync('./input.txt').toString().split('\n').map(line => line.trim())

let sum = 0

const leftListForSort: string[] = []
const rightListForSort: string[] = []

for (let line of list) {
    if (!line) continue; 
    const [leftList, rightList] = line.split(/\s+/);

    leftListForSort.push(leftList)
    rightListForSort.push(rightList)
}


const arr1 = leftListForSort.map(Number).sort()
const arr2 = rightListForSort.map(Number).sort()

for (let i = 0; i < arr1.length; i++) {
    let multiplier = 0

    for (let j = 0; j < arr1.length; j++){
        if(arr1[i] == arr2[j]){
            multiplier++
        }
    }

    sum += arr1[i] * multiplier
}


console.log(sum)