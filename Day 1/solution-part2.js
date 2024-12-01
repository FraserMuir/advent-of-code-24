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

    let similarityScore = 0;

    for (let i = 0; i < listA.length; i++) {
        let itemA = listA[i];

        let count = 0;
        for (let j = 0; j < listB.length; j++) {
            let itemB = listB[j];

            if (itemA === itemB) count++;
        }

        const similarity = itemA * count;
        console.log({ leftItem: itemA, count, similarity })
        similarityScore = similarityScore + similarity;
    }

    console.log(similarityScore);
}

solution();