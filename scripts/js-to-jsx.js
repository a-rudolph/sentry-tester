// @ts-check

const fs = require("fs");
const path = require("path");

function replaceExtension(filePath, newExtension) {
  const { dir, name } = path.parse(filePath);
  return path.join(dir, `${name}${newExtension}`);
}

function processFile(filePath) {
  const contents = fs.readFileSync(filePath, "utf8");
  if (contents.includes("import React")) {
    const newFilePath = replaceExtension(filePath, ".jsx");
    fs.renameSync(filePath, newFilePath);
  }
}

function processDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else {
      processFile(filePath);
    }
  }
}

const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error("Error: missing directory path argument");
  process.exit(1);
}

processDirectory(directoryPath);
