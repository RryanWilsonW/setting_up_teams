const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
let internResponse;
let engineerResponse;
let managerResponse;
function init() {
    const questions = [
        {
            type: 'input',
            message: 'What is the name of your teams manager',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is your team managers email?',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is your team managers employee ID?',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'What is your team managers office number?',
            name: 'managerName'
        },
    ];
    

    inquirer.prompt(questions)
    .then(response => {
        managerResponse = response; 
        menuQuestion()})
    .catch(err => {err ? console.log(err) : console.log('HTML Generated!!')});
}
function menuQuestion() {
    let questions = [
        {
        type: 'list',
            massage: 'Add an engineer, add an intern, or finish application.',
            choices: ['Engineer', 'Intern', 'Finish application'],
            name: 'addTeamMember'
        }
    ]
    inquirer.prompt(questions)
    .then(response => {
        if(response.addTeamMember === 'Engineer') {
            engineerQuestions();
        } else if(response.addTeamMember === 'Intern') {
            internQuestions();
        } else {
            generateMarkdown();
        }
    })
    .catch(err => {err ? console.log(err) : console.log('HTML Generated!!')});
}

function engineerQuestions() {
    let questions = [
        {
            type: 'input',
            message: 'What is the name of your engineer?',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'What is your engineers ID number?',
            name: 'engineerID',          
        },
        {
            type: 'input',
            message: 'What is your engineers email?',
            name: 'engineerEmail',           
        },
        {
            type: 'input',
            message: 'What is your engieers GitHub user name?',
            name: 'engineerGitUser',            
        }
    ]
    inquirer.prompt(questions)
    .then(response => {
        engineerResponse = response;
        menuQuestion();
    })
    .catch(err => {err ? console.log(err) : console.log('HTML Generated!!')});
}

function internQuestions() {
    let questions = [
        {
            type: 'input',
            message: 'What is the name of your intern?',
            name: 'internName',            
        },
        {
            type: 'input',
            message: 'What is your interns ID number?',
            name: 'internID',          
        },
        {
            type: 'input',
            message: 'What is your interns email?',
            name: 'internEmail',          
        },
        {
            type: 'input',
            message: 'What school does your intern attend?',
            name: 'internSchool',        
        }
    ]
    inquirer.prompt(questions)
    .then(response => {
        internResponse = response;
        menuQuestion();
    })
    .catch(err => {err ? console.log(err) : console.log('HTML Generated!!')});
}

init();