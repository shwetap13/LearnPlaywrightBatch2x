const readline = require("node:readline");

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const ask = (question) =>
        new Promise((resolve) => {
            rl.question(question, resolve);
        });

    try {
        const side1 = Number(await ask("Enter side 1 (in cm): "));
        const side2 = Number(await ask("Enter side 2 (in cm): "));
        const side3 = Number(await ask("Enter side 3 (in cm): "));

        if (
            Number.isNaN(side1) ||
            Number.isNaN(side2) ||
            Number.isNaN(side3) ||
            side1 <= 0 ||
            side2 <= 0 ||
            side3 <= 0
        ) {
            console.log("Please enter valid positive numbers for all sides.");
            return;
        }

        if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
            console.log("These sides do not form a valid triangle.");
            return;
        }

        if (side1 === side2 && side1 === side3) {
            console.log("This is an Equilateral triangle");
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            console.log("This is an Isosceles triangle");
        } else {
            console.log("This is a Scalene triangle");
        }
    } finally {
        rl.close();
    }
}

main();
