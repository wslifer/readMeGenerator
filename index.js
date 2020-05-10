const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([
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
      name: "questions",
      message: "Where can you be contacted for questions about your project?",
    },
  ])
  .then((data) => {});

function writeToFile(fileName, data) {}

function init() {}

init();
