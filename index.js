const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outPath = path.join(OUTPUT_DIR, "README.md");

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
      message: "What is your application's repository name?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your application title?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description of your application.",
    },
    {
      type: "input",
      name: "link",
      message: "What is the deployed link to your application?",
    },
    {
      type: "input",
      name: "install",
      message: "Provide instructions for installation",
    },
    {
      type: "input",
      name: "technologies",
      message: "What technologies did you incorporate?",
    },
    {
      type: "input",
      name: "test",
      message: "How to test your application is working?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to your application?",
    },
    {
      type: "input",
      name: "email",
      message: "What email can you be reached at?",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "What is your LinkedIn URL?",
    },
  ]);
}

async function init() {
  try {
    const data = await promptUser();

    const readMe = generateMarkdown(data);

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }

    await writeFileAsync(outPath, readMe);

    console.log("Successfully wrote README.md file!");
  } catch (err) {
    error.log(err);
  }
}

init();
