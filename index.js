const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "githubUser",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "githubRepo",
      message: "What is your project's repository name?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description of your project.",
    },
    {
      type: "input",
      name: "install",
      message: "Provide instructions for installation",
    },
    {
      type: "input",
      name: "usage",
      message: "What can your project be used for?",
    },
    {
      type: "input",
      name: "license",
      message: "License Information",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to your project?",
    },
    {
      type: "input",
      name: "test",
      message: "How to test your project is working?",
    },
    {
      type: "input",
      name: "contact",
      message: "Where can you be contacted for questions about your project?",
    },
  ]);
}

async function init() {
  try {
    const data = await promptUser();

    const readMe = generateMarkdown(data);

    await writeFileAsync("README.md", readMe);

    console.log("Successfully wrote readme file!");
  } catch (err) {
    error.log(err);
  }
}

init();
