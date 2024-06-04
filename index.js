#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.black.bgBlueBright("\n\t\t", "=".repeat(60)));
console.log(chalk.black.bgGreenBright("\n\t\t", "<".repeat(15)), chalk.black.bgRedBright("<=== WELLCOME TO OOP PROJECT ===>"), chalk.black.bgGreenBright(">".repeat(15)));
console.log(chalk.black.bgBlueBright("\n\t\t", "=".repeat(60)), "\n");
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.black.bgCyanBright("\n\t\t>>>> Wellcome Guest <<<<"));
        const ans = await inquirer.prompt({
            type: "list",
            message: chalk.red.bgWhite("\n\t\t>>> Aap kis se baat karenge..."),
            name: "select",
            choices: ["Khud se:Self", "Student"],
        });
        if (ans.select == "Khud se:Self") {
            console.log(chalk.black.bgRedBright("\n\t\t>>> Hello me khud se Baat kar rahi hun!"));
            console.log(chalk.black.bgRedBright("\n\t\t >>> Meri tabiyat achi hai."));
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: chalk.red.bgWhite("\n\t\t>>> Aap ko kis se baat karni hai?"),
                name: "student",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.red.bgWhite(`\n\t\t>>> Hello I am ${chalk.black.bgBlue(name.name)}, or me theak hun.`));
                console.log("\n\t\t", persons.students);
            }
            if (student) {
                console.log(chalk.red.bgWhite(`\n\t\t>>> Hello I am ${chalk.black.bgBlue(student.name)}, or me theak hun........`));
                console.log("\n\t\t", persons.students);
                process.exit();
            }
        }
    } while (true);
};
programStart(persons);
