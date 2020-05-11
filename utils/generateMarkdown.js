function generateMarkdown(data) {
  return `
# ${data.title}
## Description 
  ${data.description}
## Table of Contents 
  * [Installation](##Installation )
  * [Usage](##Usage)
  * [License](##License)
  * [Contributors](##Contributors)
  * [Test](##Test)
  * [Contact](##Contact)
## Installation
  ${data.install}
## Usage
  ${data.usage}
## License 
  ${data.license}
## Contributors 
  ${data.contributing}
## Test 
  ${data.test}
## Contact 
  ${data.contact}
`;
}

module.exports = generateMarkdown;
