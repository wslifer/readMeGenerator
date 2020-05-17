function generateMarkdown(data) {
  return `
# ${data.title}
![Github](https://img.shields.io/github/last-commit/${data.githubUser}/${data.githubRepo})
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
<img src="https://avatars.githubusercontent.com/${data.githubUser}" style="width: 45px; height: 45px; border-radius:100%;">
Email: ${data.contact}
`;
}

module.exports = generateMarkdown;
