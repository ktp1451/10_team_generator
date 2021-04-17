const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/manager")
const generateTemplate = require("./src/template")

let team = []

function init (){
    function manager(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "",
            },
            {
                type: "input",
                name: "email",
                message: "",
            },
            {
                type: "input",
                name: "id",
                message: "",
            },
            {
                type: "input",
                name: "office",
                message: "",
            }
        ]).then(function(answers){
            let manager = new Manager(answers.name,answers.email,answers.id,answers.office)
            team.push(manager)
            fs.writeFileSync("dist/output.html", generateTemplate(team))
            inquirer.prompt([
                {
                    message: "do you want to add an engineer?"
                }
            ]).then(function(data){
                if(data.answer == "engineer") {
                    engineer()
                }
            })
        })
    }
    
    function engineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "",
            },
            {
                type: "input",
                name: "email",
                message: "",
            },
            {
                type: "input",
                name: "id",
                message: "",
            },
            {
                type: "input",
                name: "github",
                message: "",
            }
        ]).then(function(answers){
            let engineer = new Engineer(answers.name,answers.email,answers.id,answers.github)
            team.push(engineer)
            fs.writeFileSync("dist/output.html", generateTemplate(team))
            inquirer.prompt([
                {
                    message: "do you want to add an intern?"
                }
            ]).then(function(data){
                if(data.answer == "intern") {
                    intern()
                }
            })
        })
    }

    function intern(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "",
            },
            {
                type: "input",
                name: "email",
                message: "",
            },
            {
                type: "input",
                name: "id",
                message: "",
            },
            {
                type: "input",
                name: "school",
                message: "",
            }
        ]).then(function(answers){
            let engineer = new Intern(answers.name,answers.email,answers.id,answers.school)
            team.push(intern)
            fs.writeFileSync("dist/output.html", generateTemplate(team))
        })
    }
}

init();
