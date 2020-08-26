

// function to generate markdown for README

//ES6 temporal literals uses backticks


function generateMarkdown(data) {
  return `# ${data.title}
  # Unit 09 Node.js and ES6+ Homework: Good README Generator
  # Table of Contents

  ## Description
  * [Description](#Description)

  ## Questions
  * [Questions](#Questions)

  ## Installation
  * [Installation](#Installation)

  ## License
  * [License](#License)

  ## Usage
  * [Usage](#Usage)

  ## Contribution
  * [Contribution](#Contribution)

  ## Tests
  * [Tests](#Tests)


  ## Title :
  ${data.Title}
  
  ## Username :
   ${data.Username}
  ## Email :
  ### ${data.Email}
  ## Project Name :
  ###  ${data.Name}
  ## Description :
  ###  ${data.Description}
  ## License :
  ###  ${data.License}
  ## Installation :
  ###  ${data.Installation}
  ## Tests :
  ###  ${data.Tests}
  ## Usage :
  ###  ${data.Usage}
  ## Contribution :
  ### ${data.Contribution}


  [github](https://www.example.com)
  ![alt text](image.jpg)

`;
}

module.exports = generateMarkdown;
