function generateMarkdown(data) {
  return `
# ${data.title}
![Github](https://img.shields.io/github/last-commit/${data.githubUser}/${data.githubRepo})
## Description 
  ${data.description}
## Deployed Link
  ${data.link}
## Table of Contents 
  * [Installation](##Installation)
  * [Technologies Used](##Technologies Used)
  * [Test](##Test)
  * [Contributors](##Contributors)
  * [Contact](##Contact)
## Installation
  ${data.install}
##Technologies Used
  ${data.technologies}
## Test 
  ${data.test}
## Contributors 
  ${data.contributing}
## Contact 
<img src="https://avatars.githubusercontent.com/${data.githubUser}" height='90' width='90' borderRadius='100%'>
Email: ${data.email}
LinkedIn: ${data.linkedIn}
`;
}

module.exports = generateMarkdown;
