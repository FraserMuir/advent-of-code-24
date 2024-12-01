import { readFile } from "fs/promises"

const solution = async () => {
    const inputFile = (await readFile("./input.txt")).toString("utf-8");

    let listA = [];
    let listB = [];

    for (const line of inputFile.split("\r\n")) {
        let [itemA, itemB] = line.split("   ");
        listA.push(Number(itemA));
        listB.push(Number(itemB));
    }

    listA = listA.sort();
    listB = listB.sort();

    let totalDistance = 0;

    for (let i = 0; i < listA.length; i++) {
        const distance = listB[i] - listA[i];
        const distanceMagnitude = Math.sqrt(Math.pow(distance, 2));
        totalDistance = totalDistance + distanceMagnitude;
    }

    console.log(totalDistance);
}

solution();