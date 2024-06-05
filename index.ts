#! usr/bin/env node
import inquirer from "inquirer";
import { exit } from "process";
///user input
let UserInput = await inquirer.prompt([{
    name : "num1",
    type :"number",
    message : "Please enter Your Number: ",
    validate:(input) => {
      const num2 = parseInt(input)
      if (isNaN(num2)){
        return "Please enter a valid number"
      process.exit
    }
      else{
        return true
    }
      },
}])
///console.log(UserInput.num1);
///user input value
let userNum = UserInput.num1

//logic for table
for (let i = 1; i <= 12; i++) {
    let result:number = userNum* i
    console.log(`${userNum} x ${i} = ${result} `);
    }

