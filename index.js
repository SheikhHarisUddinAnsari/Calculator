#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
function sleep() {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
}
async function welcome() {
    const wel = chalkAnimation.neon("Welcome To My Calculator"); // Animation starts
    wel.start();
    await sleep();
    wel.stop();
} //This funcion displays welcome message
var status = false;
async function ask_Question() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: `which operation do you want to perform ? }`,
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "Modulus",
                "Power",
            ],
        },
        {
            type: "number",
            name: "num_1",
            message: "Enter the first number ",
        },
        {
            type: "number",
            name: "num_2",
            message: "Enter the second number ",
        },
    ])
        .then((ans) => {
        switch (ans.operator) {
            case "Addition":
                console.log(chalk.blueBright(` ${ans.num_1} + ${ans.num_2} =`), +ans.num_1 + +ans.num_2);
                break;
            case "Subtraction":
                console.log(chalk.blueBright(` ${ans.num_1} - ${ans.num_2} =`), ans.num_1 - ans.num_2);
                break;
            case "Multiplication":
                console.log(chalk.blueBright(` ${ans.num_1} * ${ans.num_2} =`), ans.num_1 * ans.num_2);
                break;
            case "Division":
                console.log(chalk.blueBright(` ${ans.num_1} / ${ans.num_2} =`), ans.num_1 / ans.num_2);
                break;
            case "Modulus":
                console.log(chalk.blueBright(` ${ans.num_1} mod ${ans.num_2} =`), ans.num_1 % ans.num_2);
                break;
            case "Power":
                console.log(chalk.blueBright(` ${ans.num_1} power ${ans.num_2} =`), Math.pow(ans.num_1, ans.num_2));
                break;
            default:
                console.log(`You did not selected any number`);
                break;
        }
    });
} //This function asks questions as well as performs calculations according to given numbers
await welcome();
async function startAgain() {
    do {
        await ask_Question();
        var again = await inquirer.prompt({
            type: "input",
            name: `restart`,
            message: chalk.red.bold(`press y or yes to restart calculator`),
        });
    } while (again.restart == "y" || again.restart == "yes");
} //this function restarts the calculator
startAgain();
