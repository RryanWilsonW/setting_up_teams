const fs = require('fs');

function generateMarkdown(managerData, engineerData, internData) {
    console.log(managerData);
    console.log(engineerData);
    console.log(internData);
    
    let managerCard = getManagerCard(managerData);
    let engineerCards = getEngineerCards(engineerData);
    let internCards = getInternCards(internData);

    let htmlText = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href='./assets/style/style.css'>
        <link rel="stylesheet" href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'>
    </head>
    <body>
        <h1>My Team!</h1>
            <div class="allCards">
                <ul> 
                ${managerCard}
                ${engineerCards}
                ${internCards}
                </ul>
            </div>
    </body>
    </html>`

    fs.writeFile('index.html', htmlText,
    (err) => {err ? console.log(err) : console.log('HTML Generated!!')});
}

function getManagerCard(managerData) {
    let card =
    `    <li>
                <div class="employeeCard">
                    <div class="cardHead">
                        <h2><strong>${managerData.name}</strong></h2>
                        <h3>(Manager)</h3>
                    </div>
                    <div>
                        <p>ID: #${managerData.id}</p>
                        <p>Email:<a href="mailto:${managerData.email}">${managerData.email}</a></p>
                        <p>Office: #${managerData.officeNumber}</p>
                    </div>
                </div>
            </li>`;
    return card;
}

function getEngineerCards(engineerData) {
    let cards = '';

    engineerData.forEach(engineer => {
        cards +=
        `    <li>
        <div class="employeeCard">
            <div class="cardHead">
                <h2><strong>${engineer.name}</strong></h2>
                <h3>(Engineer)</h3>
            </div>
            <div>
                <p>ID: #${engineer.id}</p>
                <p>Email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href=${engineer.gitHubLink} target="_blank">${engineer.gitHubUser}</a></p>
            </div>
        </div>
    </li>
        `;
    });

    return cards;
}

function getInternCards(internData) {
    let cards = '';
    internData.forEach(intern => {
        cards +=
        `    <li>
                <div class="employeeCard">
                    <div class="cardHead">
                        <h2><strong>${intern.name}</strong></h2>
                        <h3>(Intern)</h3>
                    </div>
                    <div>
                        <p>ID: #${intern.id}</p>
                        <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p>School: ${intern.school}</p>
                    </div>
                </div>
            </li>
        `;
    });
    return cards;
}

module.exports = generateMarkdown;
