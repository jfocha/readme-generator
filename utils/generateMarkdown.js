// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (!license) {
    return '';
  } else {
    license = encodeURIComponent(license.trim())
    return "![badge](https://img.shields.io/badge/license-" + license + "-green)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    const licenseURL = [
      'https://choosealicense.com/licenses/agpl-3.0/',
      'https://choosealicense.com/licenses/gpl-3.0/',
      'https://choosealicense.com/licenses/lgpl-3.0/',
      'https://choosealicense.com/licenses/mpl-2.0/',
      'https://choosealicense.com/licenses/apache-2.0/',
      'https://choosealicense.com/licenses/mit/',
      'https://choosealicense.com/licenses/bsl-1.0/',
      'https://choosealicense.com/licenses/unlicense/'
    ];
    const licenseChoice = [
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'MIT License',
      'Boost Software License 1.0',
      'The Unlicense'
    ];

    for (let index = 0; index < licenseChoice.length; index++) {
      if (license === licenseChoice[index]) {
        return "[" + license +"](" + licenseURL[index] + ")";
      }
      
    }
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (!license) {
    return '';
  } else {
    const licenseURL = [
      "This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. <br /> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. <br /> You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.",
      'https://choosealicense.com/licenses/gpl-3.0/',
      'https://choosealicense.com/licenses/lgpl-3.0/',
      'https://choosealicense.com/licenses/mpl-2.0/',
      'https://choosealicense.com/licenses/apache-2.0/',
      'https://choosealicense.com/licenses/mit/',
      'https://choosealicense.com/licenses/bsl-1.0/',
      'https://choosealicense.com/licenses/unlicense/'
    ];
    const licenseChoice = [
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'MIT License',
      'Boost Software License 1.0',
      'The Unlicense'
    ];

    for (let index = 0; index < licenseChoice.length; index++) {
      if (license === licenseChoice[index]) {
        return licenseURL[index];
      }
      
    }
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  
  ${data.description}
  

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#Contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}
  
  
  ## Contributing

  ${data.contributing}
  
  [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)',

  
  ## Tests
  
  ${data.test}


  ## Questions

  You can checkout my repos here: [https://github.com/${data.github}](https://github.com/${data.github})

  For further questions, I can also be reached at ${data.email}


  ## License
  
  Copyright (c) ${new Date().getFullYear()} by ${data.name}

  License: ${renderLicenseLink(data.license)}
  ---
  ${renderLicenseSection(data.license)}
  
  

  
`;
}

module.exports = generateMarkdown;
