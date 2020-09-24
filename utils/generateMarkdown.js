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
  * [Technologies/Languages](##Technologies/Languages)
  * [Test](##Test)
  * [Contributors](##Contributors)
  * [Contact](##Contact)
  * 
## Installation
  ${data.install}

##Technologies/Languages
  ${data.technologies}

## Test 
  ${data.test}

## Contributors 
  ${data.contributing}

## Contact 
<img src="https://avatars.githubusercontent.com/${data.githubUser}" height='100' width='100'>

Email: ${data.email}

LinkedIn: ${data.linkedIn}
`;
}

module.exports = generateMarkdown;
