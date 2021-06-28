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

}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
// function generateTableOfContents(data) {
//   if (data.instillation) {
//     console.log(data.instillation);
//   }
// }

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
  

  ## Tests
  
  ${data.test}


  ## Questions

  You can checkout my repos here: [https://github.com/${data.github}](https://github.com/${data.github})

  For further questions, I can also be reached at ${data.email}


  ## License
  
  The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
  
  
  ---
  
`;
}

module.exports = generateMarkdown;
