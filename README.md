# Team Profile Generator
![Last Commit](https://img.shields.io/github/last-commit/macz-norton/team-profile-generator)

## Description

The Team Profile Generator is a Node.js command-line application that takes in information about employees and generates an HTML webpage that displays summaries for each person.

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)

## Installation

1. Open your integrated terminal 
2. Clone this repository into a local directory (via SSH) with this command in your terminal: `git clone git@github.com:macz-norton/team-profile-generator.git`
3. Install Node.js by running `npm i` in your terminal

## Usage

To run the command-line application following installation, run `node app.js` in your terminal.

You will be prompted with questions about your team and your answers will be used to build the `team.html` file generated in the `output` folder:
* Video that demonstrates the application's functionality: watch video
* Inquirer prompt questions in the user's terminal: ![Terminal screenshot](ADD IMAGE)
* Output HTML file from prompted questions: ![Team profile HTML page](ADD IMAGE)

## Tests

1. When you run the application, it will prompt you for information about the team manager and then information about the team members. 
2. You can input any number of team members, and they may be a mix of engineers and interns. 
3. All unit tests pass.
4. When you have completed building the team, the application will create an HTML file that displays a team roster based on the information you provided. 

## Credits

* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
* [Inquirer.js npm package](https://www.npmjs.com/package/inquirer)
* [FS npm package](https://www.npmjs.com/package/file-system)
* [Jest npm package](https://www.npmjs.com/package/jest)
* [Node.js](https://nodejs.org/en/)
* [*Choose A License*, GitHub, Inc.](https://choosealicense.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)