// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    'What is your name? (Required)',    // Name
    'Enter your GitHub Username (Required)',    // GitHub Username
    'Enter your email (Required)',  // Email
    'What is your project title? (Required)',   // Title
    'Enter a description of your project (Required)',   // Description
    'Would you like to enter installation instructions?', // Installation confirmation
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',   // Installation
    'Would you like to enter a Usage section?',     // Usage confirm
    'Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ![alt text](assets/images/screenshot.png)', // Usage
    'Would you like to write your own Contributing section? Default is the Contributor Covenant v2.0', // Contributing confirmation
    'Please add guidelines for how to contribute:', // Contributing
    'Would you like to go the extra mile and write tests for your application?', // Testing confirm
    'Please provide examples on how to run your tests.', // Tests
    'Which license is the application is covered under?' // Licensing
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
    };


// TODO: Create a function to initialize app
function init() {
    const [nameQ, githubQ, emailQ, titleQ, descriptionQ, confirmInstallationQ, installationQ, confirmUsageQ, usageQ, confirmContributingQ, contributingQ, confirmTestQ, testQ, licenseQ] = questions;
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: nameQ,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: githubQ,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: emailQ,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: titleQ,
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: descriptionQ,
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmInstallation',
        //     message: confirmInstallationQ,
        //     default: false
        // },
        {
            type: 'input',
            name: 'installation',
            message: installationQ,
            // when: ({ confirmInstallation }) => {
            //     if (confirmInstallation) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // }
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmUsage',
        //     message: confirmUsageQ,
        //     default: false
        // },
        {
            type: 'input',
            name: 'usage',
            message: usageQ,
            // when: ({ confirmUsage }) => {
            //     if (confirmUsage) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // }
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmContributing',
        //     message: confirmContributingQ,
        //     default: false
        // },
        {
            type: 'input',
            name: 'contributing',
            message: contributingQ,
            // default: 'Default: [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)',
            // when: ({ confirmContributing }) => {
            //     if (confirmContributing) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // }
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmTest',
        //     message: confirmTestQ,
        //     default: false
        // },
        {
            type: 'input',
            name: 'test',
            message: testQ,
            // when: ({ confirmTest }) => {
            //     if (confirmTest) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // }
        },
        {
            type: 'list',
            name: 'license',
            message: licenseQ,
            choices: [
                'GNU AGPLv3',
                'GNU GPLv3',
                'GNU LGPLv3',
                'Mozilla Public License 2.0',
                'Apache License 2.0',
                'MIT License',
                'Boost Software License 1.0',
                'The Unlicense'
            ],
        }
    ]).then((answers) => {
        // Use user feedback for... whatever!!
        writeToFile('README.md', generateMarkdown(answers))
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
      });
}


// Function call to initialize app
init();
