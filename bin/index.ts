#! /usr/bin/env node
const inquirer=require('inquirer');
const chalk=require('chalk');
let currencies={
    Message:'This the list for reference and keys abbreviation ',
    dollar:'d',
    Euro:'e',
    JapaneseYen:'y',
    EgyptianPound:'e',
    IndianRupee:'i',
    help:'type h to list all options to select ',
    step_1_to_solve:'Enter desired amount of foreign currency when prompts',
    step_2_to_solve:'Enter Equivalent anount of desired foreign currency ',
    step_3: "The code will generate your desired conversion",
}

console.log(currencies)
 

let user=inquirer.prompt([
  {
    name:'pak',
    type:'input',
    message:"\n Enter amount to convert for desired currency",

  },
  {
   
     name:'from',
     message:'\n Equivalents of desired currency from list ',
     type:'expand',
     choices:[{
        key: 'D' ,
        value: 280,
      },
      
      {
        key: 'E',
        value: 301,
      },
      {
        key: 'Y',
        value: 1.83,
      },
      {
        key: 'p',
        value: 5.86,
      },
      {
        key: 'i',
        value: 3.34,
      },
]

}
])
.then(ans=>{
console.log("\n How much foreign currency? ",chalk.magenta(ans.pak),"\n")
console.log("Equivalent of '1' of desired foreign currency in pkr= ",chalk.yellow(ans.from),"rupees \n")
  console.info(chalk.cyan('\n The desired currency is converted to pakistani rupees.Your amount is ', chalk.yellow(ans.pak*ans.from),'Rupees') )
})
